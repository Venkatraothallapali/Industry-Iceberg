/**
 * Schema Validation Utility
 * Validates and tests structured data for Google Rich Results
 * Top 1% schema implementation validation
 */

interface ValidationRule {
  field: string
  required: boolean
  type: 'string' | 'number' | 'boolean' | 'array' | 'object' | 'url'
  pattern?: RegExp
  minLength?: number
  maxLength?: number
}

interface ValidationResult {
  isValid: boolean
  errors: string[]
  warnings: string[]
  score: number
  richSnippetTypes: string[]
}

interface SchemaTestResult {
  url: string
  schemas: ValidationResult[]
  overall: ValidationResult
  timestamp: number
}

class SchemaValidator {
  private validationRules: Record<string, ValidationRule[]> = {
    Organization: [
      { field: '@context', required: true, type: 'string', pattern: /^https:\/\/schema\.org$/ },
      { field: '@type', required: true, type: 'string', pattern: /^Organization$/ },
      { field: 'name', required: true, type: 'string', minLength: 1, maxLength: 100 },
      { field: 'url', required: true, type: 'url' },
      { field: 'logo', required: false, type: 'object' },
      { field: 'description', required: false, type: 'string', maxLength: 500 }
    ],
    WebSite: [
      { field: '@context', required: true, type: 'string', pattern: /^https:\/\/schema\.org$/ },
      { field: '@type', required: true, type: 'string', pattern: /^WebSite$/ },
      { field: 'name', required: true, type: 'string', minLength: 1, maxLength: 100 },
      { field: 'url', required: true, type: 'url' },
      { field: 'potentialAction', required: false, type: 'object' }
    ],
    WebPage: [
      { field: '@context', required: true, type: 'string', pattern: /^https:\/\/schema\.org$/ },
      { field: '@type', required: true, type: 'string', pattern: /^WebPage$/ },
      { field: 'name', required: true, type: 'string', minLength: 1, maxLength: 100 },
      { field: 'url', required: true, type: 'url' },
      { field: 'description', required: false, type: 'string', maxLength: 500 }
    ],
    SoftwareApplication: [
      { field: '@context', required: true, type: 'string', pattern: /^https:\/\/schema\.org$/ },
      { field: '@type', required: true, type: 'string', pattern: /^SoftwareApplication$/ },
      { field: 'name', required: true, type: 'string', minLength: 1, maxLength: 100 },
      { field: 'url', required: true, type: 'url' },
      { field: 'applicationCategory', required: false, type: 'string' },
      { field: 'description', required: false, type: 'string', maxLength: 500 }
    ],
    Service: [
      { field: '@context', required: true, type: 'string', pattern: /^https:\/\/schema\.org$/ },
      { field: '@type', required: true, type: 'string', pattern: /^Service$/ },
      { field: 'name', required: true, type: 'string', minLength: 1, maxLength: 100 },
      { field: 'url', required: true, type: 'url' },
      { field: 'description', required: false, type: 'string', maxLength: 500 },
      { field: 'serviceType', required: false, type: 'string' }
    ],
    FAQPage: [
      { field: '@context', required: true, type: 'string', pattern: /^https:\/\/schema\.org$/ },
      { field: '@type', required: true, type: 'string', pattern: /^FAQPage$/ },
      { field: 'mainEntity', required: true, type: 'array' }
    ],
    BreadcrumbList: [
      { field: '@context', required: true, type: 'string', pattern: /^https:\/\/schema\.org$/ },
      { field: '@type', required: true, type: 'string', pattern: /^BreadcrumbList$/ },
      { field: 'itemListElement', required: true, type: 'array' }
    ],
    TechArticle: [
      { field: '@context', required: true, type: 'string', pattern: /^https:\/\/schema\.org$/ },
      { field: '@type', required: true, type: 'string', pattern: /^TechArticle$/ },
      { field: 'headline', required: true, type: 'string', minLength: 1, maxLength: 200 },
      { field: 'description', required: false, type: 'string', maxLength: 500 }
    ],
    VideoObject: [
      { field: '@context', required: true, type: 'string', pattern: /^https:\/\/schema\.org$/ },
      { field: '@type', required: true, type: 'string', pattern: /^VideoObject$/ },
      { field: 'name', required: true, type: 'string', minLength: 1, maxLength: 100 },
      { field: 'description', required: false, type: 'string', maxLength: 500 }
    ]
  }

  /**
   * Validate a single schema object
   */
  public validateSchema(schema: any, schemaType: string): ValidationResult {
    const errors: string[] = []
    const warnings: string[] = []
    const rules = this.validationRules[schemaType]

    if (!rules) {
      return {
        isValid: false,
        errors: [`Unknown schema type: ${schemaType}`],
        warnings: [],
        score: 0,
        richSnippetTypes: []
      }
    }

    const totalFields = rules.length
    let validFields = 0

    // Validate each required field
    rules.forEach(rule => {
      const value = this.getNestedValue(schema, rule.field)
      
      if (rule.required && (value === undefined || value === null || value === '')) {
        errors.push(`Required field '${rule.field}' is missing`)
        return
      }

      if (value !== undefined && value !== null) {
        const fieldValidation = this.validateField(value, rule)
        if (fieldValidation.isValid) {
          validFields++
        } else {
          errors.push(...fieldValidation.errors)
        }
        warnings.push(...fieldValidation.warnings)
      }
    })

    // Check for recommended fields
    this.checkRecommendedFields(schema, schemaType, warnings)

    // Calculate score
    const score = totalFields > 0 ? Math.round((validFields / totalFields) * 100) : 0

    // Determine rich snippet eligibility
    const richSnippetTypes = this.getRichSnippetTypes(schemaType, score)

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
      score,
      richSnippetTypes
    }
  }

  /**
   * Validate field value against rules
   */
  private validateField(value: any, rule: ValidationRule): { isValid: boolean; errors: string[]; warnings: string[] } {
    const errors: string[] = []
    const warnings: string[] = []

    // Type validation
    if (!this.validateType(value, rule.type)) {
      errors.push(`Field '${rule.field}' must be of type ${rule.type}`)
      return { isValid: false, errors, warnings }
    }

    // Pattern validation
    if (rule.pattern && typeof value === 'string' && !rule.pattern.test(value)) {
      errors.push(`Field '${rule.field}' does not match required pattern`)
    }

    // Length validation
    if (typeof value === 'string') {
      if (rule.minLength && value.length < rule.minLength) {
        errors.push(`Field '${rule.field}' must be at least ${rule.minLength} characters`)
      }
      if (rule.maxLength && value.length > rule.maxLength) {
        warnings.push(`Field '${rule.field}' is longer than recommended ${rule.maxLength} characters`)
      }
    }

    // URL validation
    if (rule.type === 'url' && typeof value === 'string') {
      try {
        new URL(value)
      } catch {
        errors.push(`Field '${rule.field}' must be a valid URL`)
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    }
  }

  /**
   * Validate value type
   */
  private validateType(value: any, type: string): boolean {
    switch (type) {
      case 'string':
        return typeof value === 'string'
      case 'number':
        return typeof value === 'number'
      case 'boolean':
        return typeof value === 'boolean'
      case 'array':
        return Array.isArray(value)
      case 'object':
        return typeof value === 'object' && value !== null && !Array.isArray(value)
      case 'url':
        return typeof value === 'string'
      default:
        return true
    }
  }

  /**
   * Get nested value from object
   */
  private getNestedValue(obj: any, path: string): any {
    return path.split('.').reduce((current, key) => current?.[key], obj)
  }

  /**
   * Check for recommended fields
   */
  private checkRecommendedFields(schema: any, schemaType: string, warnings: string[]) {
    const recommendedFields: Record<string, string[]> = {
      Organization: ['description', 'logo', 'contactPoint'],
      WebSite: ['description', 'potentialAction'],
      WebPage: ['description', 'breadcrumb'],
      SoftwareApplication: ['description', 'applicationCategory', 'offers'],
      Service: ['description', 'serviceType', 'provider'],
      TechArticle: ['description', 'author', 'publisher'],
      VideoObject: ['description', 'thumbnailUrl', 'uploadDate']
    }

    const recommended = recommendedFields[schemaType] || []
    recommended.forEach(field => {
      if (!this.getNestedValue(schema, field)) {
        warnings.push(`Recommended field '${field}' is missing for better rich snippet display`)
      }
    })
  }

  /**
   * Get rich snippet types based on schema and score
   */
  private getRichSnippetTypes(schemaType: string, score: number): string[] {
    const types: string[] = []
    
    if (score >= 80) {
      switch (schemaType) {
        case 'Organization':
          types.push('Knowledge Panel', 'Brand Search')
          break
        case 'SoftwareApplication':
          types.push('Software Rich Snippet', 'Price Snippet')
          break
        case 'Service':
          types.push('Service Rich Snippet', 'Review Snippet')
          break
        case 'FAQPage':
          types.push('FAQ Rich Snippet')
          break
        case 'BreadcrumbList':
          types.push('Breadcrumb Rich Snippet')
          break
        case 'TechArticle':
          types.push('Article Rich Snippet', 'Carousel')
          break
        case 'VideoObject':
          types.push('Video Rich Snippet')
          break
        case 'WebSite':
          types.push('Site Links Search Box')
          break
      }
    }

    return types
  }

  /**
   * Validate all schemas on current page
   */
  public validateCurrentPage(): SchemaTestResult {
    const schemas = this.extractSchemasFromPage()
    const results: ValidationResult[] = []
    let totalScore = 0
    const allErrors: string[] = []
    const allWarnings: string[] = []

    schemas.forEach(schema => {
      const schemaType = schema['@type']
      if (schemaType) {
        const result = this.validateSchema(schema, schemaType)
        results.push(result)
        totalScore += result.score
        allErrors.push(...result.errors)
        allWarnings.push(...result.warnings)
      }
    })

    const averageScore = results.length > 0 ? Math.round(totalScore / results.length) : 0

    const overall: ValidationResult = {
      isValid: allErrors.length === 0,
      errors: allErrors,
      warnings: allWarnings,
      score: averageScore,
      richSnippetTypes: results.flatMap(r => r.richSnippetTypes)
    }

    return {
      url: window.location.href,
      schemas: results,
      overall,
      timestamp: Date.now()
    }
  }

  /**
   * Extract all JSON-LD schemas from current page
   */
  private extractSchemasFromPage(): any[] {
    const schemas: any[] = []
    const scriptTags = document.querySelectorAll('script[type="application/ld+json"]')

    scriptTags.forEach(tag => {
      try {
        const schema = JSON.parse(tag.textContent || '{}')
        if (Array.isArray(schema)) {
          schemas.push(...schema)
        } else {
          schemas.push(schema)
        }
      } catch (error) {
        console.warn('Invalid JSON-LD schema found:', error)
      }
    })

    return schemas
  }

  /**
   * Generate schema validation report
   */
  public generateValidationReport(): void {
    const result = this.validateCurrentPage()
    
    console.group('🔍 Schema Validation Report - Top 1% Implementation')
    console.log('URL:', result.url)
    console.log('Overall Score:', result.overall.score, '/ 100')
    console.log('Status:', result.overall.isValid ? '✅ Valid' : '❌ Invalid')
    console.log('Rich Snippets Eligible:', result.overall.richSnippetTypes.join(', ') || 'None')
    
    if (result.overall.errors.length > 0) {
      console.group('❌ Errors')
      result.overall.errors.forEach(error => console.log('•', error))
      console.groupEnd()
    }
    
    if (result.overall.warnings.length > 0) {
      console.group('⚠️ Warnings')
      result.overall.warnings.forEach(warning => console.log('•', warning))
      console.groupEnd()
    }
    
    console.group('📊 Individual Schema Results')
    result.schemas.forEach((schemaResult, index) => {
      const schemaType = this.extractSchemasFromPage()[index]?.['@type'] || 'Unknown'
      console.log(`${schemaType}: ${schemaResult.score}/100 - ${schemaResult.isValid ? '✅' : '❌'}`)
    })
    console.groupEnd()
    
    console.groupEnd()

    // Store result for analytics
    this.storeValidationResult(result)
  }

  /**
   * Store validation result for analytics
   */
  private storeValidationResult(result: SchemaTestResult): void {
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem('schemaValidationResults')
      const results: SchemaTestResult[] = stored ? JSON.parse(stored) : []
      results.push(result)
      
      // Keep only last 10 results
      if (results.length > 10) {
        results.shift()
      }
      
      localStorage.setItem('schemaValidationResults', JSON.stringify(results))
    }
  }

  /**
   * Get validation history
   */
  public getValidationHistory(): SchemaTestResult[] {
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem('schemaValidationResults')
      return stored ? JSON.parse(stored) : []
    }
    return []
  }

  /**
   * Test schema with Google Rich Results Test API simulation
   */
  public async testWithGoogleSimulator(url?: string): Promise<any> {
    // Simulate Google Rich Results Test
    const testUrl = url || window.location.href
    const result = this.validateCurrentPage()
    
    return {
      url: testUrl,
      richResults: result.overall.richSnippetTypes,
      score: result.overall.score,
      errors: result.overall.errors,
      warnings: result.overall.warnings,
      testDate: new Date().toISOString(),
      status: result.overall.isValid ? 'PASS' : 'FAIL'
    }
  }
}

// Singleton instance
let schemaValidator: SchemaValidator | null = null

/**
 * Get schema validator instance
 */
export const getSchemaValidator = (): SchemaValidator => {
  if (!schemaValidator) {
    schemaValidator = new SchemaValidator()
  }
  return schemaValidator
}

/**
 * Initialize schema validation
 */
export const initializeSchemaValidation = () => {
  const validator = getSchemaValidator()
  
  // Run validation after page load
  if (document.readyState === 'complete') {
    setTimeout(() => {
      validator.generateValidationReport()
    }, 1000)
  } else {
    window.addEventListener('load', () => {
      setTimeout(() => {
        validator.generateValidationReport()
      }, 1000)
    })
  }

  return validator
}

/**
 * Schema validation utilities for developers
 */
export const SchemaValidationUtils = {
  /**
   * Validate specific schema object
   */
  validateSchema: (schema: any, type: string) => {
    return getSchemaValidator().validateSchema(schema, type)
  },

  /**
   * Test current page
   */
  testCurrentPage: () => {
    return getSchemaValidator().validateCurrentPage()
  },

  /**
   * Get validation history
   */
  getHistory: () => {
    return getSchemaValidator().getValidationHistory()
  },

  /**
   * Run Google simulator test
   */
  runGoogleTest: async (url?: string) => {
    return getSchemaValidator().testWithGoogleSimulator(url)
  }
}

export default SchemaValidator
