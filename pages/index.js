import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useRef } from 'react'

export default function Home() {
  const vibeEmojis = ['😊', '😎', '🤩', '😄', '🥳', '😌', '🤔', '😴', '🤯', '🥰', '😋', '🤗', '😏', '🤓', '🫠', '😵‍💫', '🤪', '😆']
  const vibeMeterRef = useRef(null)
  
  useEffect(() => {
    let emojiIndex = 0
    
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
    
    return () => {
      clearInterval(interval)
    }
  }, [])
  
  return (
    <>
      <Head>
        <title>Good Vibes Games Studio - Solo Game Development</title>
        <meta name="description" content="Good Vibes Games Studio is the solo game development project of Jason Bartz, creating unique indie games like Infinite Snake and Tandem Daily with good vibes." />
        <meta name="keywords" content="indie games, game development, Infinite Snake, Tandem Daily, Jason Bartz, Good Vibes Games" />
        <meta name="author" content="Jason Bartz" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Good Vibes Games Studio - Solo Game Development" />
        <meta property="og:description" content="Creating unique indie games with good vibes. Home of Infinite Snake and Tandem Daily." />
        <meta property="og:url" content="https://goodvibesgames.com" />
        <meta property="og:image" content="https://goodvibesgames.com/open-graph-image.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Good Vibes Games Studio - Creating indie games with good vibes" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@Jsnbrtz" />
        <meta name="twitter:title" content="Good Vibes Games Studio" />
        <meta name="twitter:description" content="Solo game dev studio creating Infinite Snake, Tandem Daily, and more indie games with good vibes." />
        <meta name="twitter:image" content="https://goodvibesgames.com/open-graph-image.webp" />
        <meta name="twitter:image:alt" content="Good Vibes Games Studio - Creating indie games with good vibes" />
      </Head>
      
      <div className="container">
        <header className={styles.header}>
          <div className={styles.logoWrapper}>
            <Image 
              src="/logo.webp" 
              alt="Good Vibes Games Logo" 
              width={200} 
              height={200}
              className={styles.logoImage}
              priority
            />
          </div>
          <div className={styles.taglineWrapper}>
            <Image src="/lightning.webp" alt="Lightning" width={48} height={48} className={styles.lightningLeft} />
            <p className={styles.tagline}>THE SOLO DEVELOPMENT PROJECT OF JASON BARTZ</p>
            <Image src="/lightning.webp" alt="Lightning" width={48} height={48} className={styles.lightningRight} />
          </div>
        </header>
        
        <section className="color-block-yellow">
          <div className={styles.philosophy}>
            <p>
              Hi, I&apos;m Jason. I try to make games that start with a simple question: 
              <span className={styles.highlight}> &quot;Would I actually want to play this?&quot;</span> 
              Whether that&apos;s taking inspiration from my son and combining snake mechanics with alchemy crafting, 
              or making my version of a NYT puzzle game, I hope you enjoy my work.
            </p>
          </div>
        </section>
        
        <div className="marquee-container">
          <div className="marquee-content">
            <Image src="/green-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/blue-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/green-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/blue-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/green-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/blue-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/green-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/blue-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/green-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/blue-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/green-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/blue-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/green-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/blue-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/green-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/blue-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/green-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/blue-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/green-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/blue-smiley.webp" alt="Smiley" width={40} height={40} />
            {/* Duplicate for seamless loop */}
            <Image src="/green-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/blue-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/green-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/blue-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/green-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/blue-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/green-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/blue-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/green-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/blue-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/green-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/blue-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/green-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/blue-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/green-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/blue-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/green-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/blue-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/green-smiley.webp" alt="Smiley" width={40} height={40} />
            <Image src="/blue-smiley.webp" alt="Smiley" width={40} height={40} />
          </div>
        </div>
        
        <section className={styles.gamesSection}>
          <div className="color-block-pink">
            <div className={styles.gamesSectionInner}>
              <div className={styles.sectionTitleWrapper}>
                <Image src="/eye.webp" alt="Eye" width={80} height={80} className={styles.eyeIcon} />
                <h2 className={styles.sectionTitle}>CURRENT VIBES</h2>
              </div>
              
              <div className={styles.gamesGrid}>
                <div className={styles.gameCard}>
                  <div className={styles.gameImageWrapper}>
                    <Image 
                      src="/infinite-snake-gameplay.gif" 
                      alt="Infinite Snake Gameplay" 
                      width={400} 
                      height={225}
                      className={styles.gameImage}
                      unoptimized
                    />
                  </div>
                  <h3 className={styles.gameTitle}>Infinite Snake</h3>
                  <p className={styles.gameDescription}>
                    A fusion of classic snake gameplay with deep crafting mechanics. 
                    Combine over 10,000 elements to literally rebuild reality, 
                    from basic fire and water to entire civilizations and pop culture icons.
                  </p>
                  <ul className={styles.gameFeatures}>
                    <li>10,000+ craftable elements</li>
                    <li>Multiple game modes & AI opponents</li>
                    <li>45+ unlockable skins</li>
                    <li>Epic boss encounters</li>
                  </ul>
                  <a href="https://www.infinitesnake.io" target="_blank" rel="noopener noreferrer" className={styles.gameLink}>
                    PLAY INFINITE SNAKE
                  </a>
                </div>
                
                <div className={styles.gameCard}>
                  <div className={styles.gameImageWrapper}>
                    <Image 
                      src="/tandem-gameplay.gif" 
                      alt="Tandem Gameplay" 
                      width={400} 
                      height={225}
                      className={styles.gameImage}
                      unoptimized
                    />
                  </div>
                  <h3 className={styles.gameTitle}>Tandem</h3>
                  <p className={styles.gameDescription}>
                    A daily, casual word puzzle. 
                    Match emoji duos to themed answers in this minimal game 
                    that takes just minutes but keeps you hooked day-after-day.
                  </p>
                  <ul className={styles.gameFeatures}>
                    <li>Fresh puzzle every 24 hours</li>
                    <li>4 answers, 2 emojis each</li>
                    <li>Track your daily streaks</li>
                    <li>Play the complete archive of puzzles</li>
                  </ul>
                  <a href="https://www.tandemdaily.com" target="_blank" rel="noopener noreferrer" className={styles.gameLink}>
                    PLAY TANDEM
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <footer className={styles.footer}>
          <div className={styles.vibeMeter}>
            Current Vibe: <span ref={vibeMeterRef}>😊</span> 
          </div>
          <Image 
            src="/logo.webp" 
            alt="Good Vibes Games Logo" 
            width={50} 
            height={50}
            className={styles.footerLogo}
          />
          <div className={styles.footerBottom}>
            <span>© 2025 Good Vibes Games</span>
            <span className={styles.separator}>•</span>
            <div className={styles.footerLinks}>
              <a href="https://x.com/Jsnbrtz" target="_blank" rel="noopener noreferrer">X</a>
              <span className={styles.separator}>•</span>
              <a href="https://www.jason-bartz.com/" target="_blank" rel="noopener noreferrer">Personal Site</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}