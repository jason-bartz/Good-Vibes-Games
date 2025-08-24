import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useRef } from 'react'

export default function Home() {
  const vibeEmojis = ['😊', '😎', '🤩', '😄', '🥳', '😌', '🤔', '😴', '🤯', '🥰', '😋', '🤗', '😏', '🤓', '🫠', '😵‍💫', '🤪', '😆']
  const vibeMeterRef = useRef(null)
  
  useEffect(() => {
    let emojiIndex = 0
    
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      
      document.querySelectorAll('.vibe-orb').forEach((orb, index) => {
        const speed = (index + 1) * 0.01
        orb.style.transform = `translate(${x * 50 * speed}px, ${y * 50 * speed}px)`
      })
    }
    
    const handleScroll = () => {
      // Removed to let CSS animations handle the floating
    }
    
    const interval = setInterval(() => {
      emojiIndex = (emojiIndex + 1) % vibeEmojis.length
      if (vibeMeterRef.current) {
        vibeMeterRef.current.style.opacity = '0'
        setTimeout(() => {
          if (vibeMeterRef.current) {
            vibeMeterRef.current.textContent = vibeEmojis[emojiIndex]
            vibeMeterRef.current.style.opacity = '1'
          }
        }, 300)
      }
    }, 2000)
    
    document.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      clearInterval(interval)
      document.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  return (
    <>
      <Head>
        <title>Good Vibes Games - Solo Game Development Studio</title>
        <meta name="description" content="Good Vibes Games is the solo game development studio of Jason Bartz, creating unique indie games like Infinite Snake and Tandem Daily." />
        <meta property="og:title" content="Good Vibes Games - Solo Game Development Studio" />
        <meta property="og:description" content="Creating unique indie games with good vibes. Home of Infinite Snake and Tandem Daily." />
        <meta property="og:url" content="https://goodvibesgames.com" />
        <meta name="twitter:title" content="Good Vibes Games" />
        <meta name="twitter:description" content="Solo game dev studio creating Infinite Snake, Tandem Daily, and more indie games with good vibes." />
      </Head>
      
      <div className="vibes-bg">
        <div className="vibe-orb"></div>
        <div className="vibe-orb"></div>
        <div className="vibe-orb"></div>
        <div className="vibe-orb"></div>
        <div className="vibe-orb"></div>
      </div>
      
      <div className="float-element">👾</div>
      <div className="float-element">✨</div>
      <div className="float-element">🐍</div>
      
      <div className="container">
        <header className={styles.header}>
          <div className={styles.logoWrapper}>
            <Image 
              src="/logo.webp" 
              alt="Good Vibes Games Logo" 
              width={120} 
              height={120}
              className={styles.logoImage}
              priority
            />
            <div className={styles.logoContainer}>
              <h1 className={styles.studioName}>GOOD VIBES<br/>GAMES STUDIO</h1>
            </div>
          </div>
          <p className={styles.tagline}>THE SOLO DEVELOPMENT PROJECT OF JASON BARTZ</p>
        </header>
        
        <section className={styles.philosophy}>
          <p>
            Hi, I&apos;m Jason. I try to make games that start with a simple question: 
            <span className={styles.highlight}> &quot;Would I actually want to play this?&quot;</span> 
            Whether that&apos;s taking inspiration from my son and combining snake mechanics with alchemy crafting, 
            or making my version of a NYT puzzle game, I hope you enjoy my work.
          </p>
        </section>
        
        <section className={styles.gamesSection}>
          <h2 className={styles.sectionTitle}>CURRENT VIBES</h2>
          
          <div className={styles.gamesGrid}>
            <div className={styles.gameCard}>
              <div className={styles.gameEmoji} style={{'--delay': '0s'}}>🐍</div>
              <h3 className={styles.gameTitle}>Infinite Snake</h3>
              <p className={styles.gameDescription}>
                A mind-bending fusion of classic snake gameplay with deep crafting mechanics. 
                Consume and combine over 10,000 elements to literally rebuild reality, 
                from basic fire and water to entire civilizations and pop culture icons.
              </p>
              <ul className={styles.gameFeatures}>
                <li>10,000+ craftable elements</li>
                <li>Multiple game modes & AI opponents</li>
                <li>45+ unlockable skins</li>
                <li>Epic boss encounters</li>
                <li>Built for my son who loves both genres</li>
              </ul>
              <a href="https://www.infinitesnake.io" target="_blank" rel="noopener noreferrer" className={styles.gameLink}>
                PLAY INFINITE SNAKE
              </a>
            </div>
            
            <div className={styles.gameCard}>
              <div className={styles.gameEmoji} style={{'--delay': '0.5s'}}>🚲</div>
              <h3 className={styles.gameTitle}>Tandem</h3>
              <p className={styles.gameDescription}>
                A daily brain teaser that pairs emojis with meaning. 
                Match emoji duos to themed answers in this minimalist puzzle 
                that takes just minutes but stays with you all day.
              </p>
              <ul className={styles.gameFeatures}>
                <li>Fresh puzzle every 24 hours</li>
                <li>4 answers, 2 emojis each</li>
                <li>Track your daily streaks</li>
                <li>Share results with friends</li>
                <li>Clean, focused interface</li>
              </ul>
              <a href="https://www.tandemdaily.com" target="_blank" rel="noopener noreferrer" className={styles.gameLink}>
                PLAY TANDEM
              </a>
            </div>
          </div>
        </section>
        
        <footer className={styles.footer}>
          <div className={styles.vibeMeter}>
            Current Vibe Level: <span ref={vibeMeterRef}>😊</span> 
          </div>
          <div className={styles.footerLinks}>
            <a href="https://x.com/Jsnbrtz" target="_blank" rel="noopener noreferrer">X</a>
            <span className={styles.separator}>•</span>
            <a href="https://www.jason-bartz.com/" target="_blank" rel="noopener noreferrer">Personal Site</a>
          </div>
          <Image 
            src="/logo.webp" 
            alt="Good Vibes Games Logo" 
            width={60} 
            height={60}
            className={styles.footerLogo}
          />
          <p className={styles.copyright}>© 2025 Good Vibes Games</p>
        </footer>
      </div>
    </>
  )
}