import type { FC } from 'react'
import './Hero.css'

const Hero: FC = () => {
  return (
    <section className="hero">
      <div className="hero-video-container">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  )
}

export default Hero
