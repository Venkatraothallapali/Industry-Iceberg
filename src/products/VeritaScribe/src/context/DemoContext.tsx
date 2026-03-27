import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { Template, DataSource} from '../data/mockTemplates';

interface DemoState {
  selectedTemplate: Template | null;
  dataSource: DataSource[];
  filledDocument: string;
  originalDocument: string;
  guidedDemoMode: boolean;
  changes: Change[];
}

interface Change {
  id: string;
  section: string;
  type: 'added' | 'removed' | 'modified';
  oldValue: string;
  newValue: string;
  author: string;
  timestamp: Date;
}

interface DemoContextType {
  state: DemoState;
  setSelectedTemplate: (template: Template | null) => void;
  setDataSource: (data: DataSource[]) => void;
  setFilledDocument: (doc: string) => void;
  setOriginalDocument: (doc: string) => void;
  toggleGuidedDemo: () => void;
  addChange: (change: Omit<Change, 'id' | 'timestamp'>) => void;
  updateDataSourceField: (fieldName: string, value: string) => void;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export function DemoProvider({ children }: { children: ReactNode }) {
  // Initialize state from localStorage or use defaults
  const initializeState = (): DemoState => {
    try {
      const savedState = localStorage.getItem('veritascribe-demo-state');
      if (savedState) {
        const parsed = JSON.parse(savedState);
        return {
          selectedTemplate: parsed.selectedTemplate || null,
          dataSource: parsed.dataSource || [],
          filledDocument: parsed.filledDocument || '',
          originalDocument: parsed.originalDocument || '',
          guidedDemoMode: parsed.guidedDemoMode || false,
          changes: parsed.changes || [],
        };
      }
    } catch (error) {
      console.error('Error loading state from localStorage:', error);
    }
    
    // Return default state if nothing saved or error
    return {
      selectedTemplate: null,
      dataSource: [],
      filledDocument: '',
      originalDocument: '',
      guidedDemoMode: false,
      changes: [],
    };
  };

  const [state, setState] = useState<DemoState>(initializeState);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('veritascribe-demo-state', JSON.stringify(state));
    } catch (error) {
      console.error('Error saving state to localStorage:', error);
    }
  }, [state]);

  const setSelectedTemplate = useCallback((template: Template | null) => {
    setState(prev => ({ ...prev, selectedTemplate: template }));
  }, []);

  const setDataSource = useCallback((data: DataSource[]) => {
    setState(prev => ({ ...prev, dataSource: data }));
  }, []);

  const setFilledDocument = useCallback((doc: string) => {
    setState(prev => ({ ...prev, filledDocument: doc }));
  }, []);

  const setOriginalDocument = useCallback((doc: string) => {
    setState(prev => ({ ...prev, originalDocument: doc }));
  }, []);

  const toggleGuidedDemo = useCallback(() => {
    setState(prev => ({ ...prev, guidedDemoMode: !prev.guidedDemoMode }));
  }, []);

  const addChange = useCallback((change: Omit<Change, 'id' | 'timestamp'>) => {
    const newChange: Change = {
      ...change,
      id: Date.now().toString(),
      timestamp: new Date(),
    };
    setState(prev => ({ ...prev, changes: [...prev.changes, newChange] }));
  }, []);

  const updateDataSourceField = useCallback((fieldName: string, value: string) => {
    setState(prev => ({
      ...prev,
      dataSource: prev.dataSource.map(d =>
        d.fieldName === fieldName ? { ...d, value } : d
      ),
    }));
  }, []);

  return (
    <DemoContext.Provider
      value={{
        state,
        setSelectedTemplate,
        setDataSource,
        setFilledDocument,
        setOriginalDocument,
        toggleGuidedDemo,
        addChange,
        updateDataSourceField,
      }}
    >
      {children}
    </DemoContext.Provider>
  );
}

export function useDemo() {
  const context = useContext(DemoContext);
  if (context === undefined) {
    throw new Error('useDemo must be used within a DemoProvider');
  }
  return context;
}

