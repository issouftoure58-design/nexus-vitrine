import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import './AnimatedHero.css';

// ═══════════════════════════════════════════════════════════
// DONNÉES DES SCÈNES
// ═══════════════════════════════════════════════════════════

interface SceneContent {
  emoji: string;
  title: string;
  items: string[];
}

interface Scene {
  id: number;
  metier: string;
  color: string;
  before: SceneContent;
  after: SceneContent;
}

const SCENES: Scene[] = [
  {
    id: 1,
    metier: 'Coiffeuse',
    color: '#e91e63',
    before: {
      emoji: '😰💇‍♀️☎️📋',
      title: 'Débordée...',
      items: [
        'Téléphone qui sonne sans arrêt',
        'Agenda papier illisible',
        'Clients oubliés, double réservations',
        'Pas le temps de coiffer'
      ]
    },
    after: {
      emoji: '😌💇‍♀️🤖✨',
      title: 'Sereine avec NEXUS',
      items: [
        'Réservations automatiques 24/7',
        'Rappels SMS envoyés par l\'IA',
        'Zéro appel, zéro stress',
        'Focus sur votre art'
      ]
    }
  },
  {
    id: 2,
    metier: 'Restaurateur',
    color: '#ff9800',
    before: {
      emoji: '😫👨‍🍳📞📊',
      title: 'Submergé...',
      items: [
        'Réservations par téléphone en plein service',
        'No-shows qui plombent le CA',
        'Comptabilité en retard',
        'Aucune visibilité sur les stats'
      ]
    },
    after: {
      emoji: '😊👨‍🍳💻📈',
      title: 'Organisé avec NEXUS',
      items: [
        'Réservations en ligne + acompte',
        'Rappels automatiques = 0 no-show',
        'Dashboard temps réel',
        'Comptabilité simplifiée'
      ]
    }
  },
  {
    id: 3,
    metier: 'Organisateur événements',
    color: '#9c27b0',
    before: {
      emoji: '😩🎉📧⏰',
      title: 'Noyé...',
      items: [
        'Centaines d\'emails à traiter',
        'Inscriptions manuelles Excel',
        'Paiements à relancer',
        'Nuits blanches avant l\'event'
      ]
    },
    after: {
      emoji: '😄🎉🤖✅',
      title: 'Efficace avec NEXUS',
      items: [
        'Inscriptions automatisées',
        'Paiements sécurisés Stripe',
        'Relances IA intelligentes',
        'Dormez tranquille'
      ]
    }
  }
];

// ═══════════════════════════════════════════════════════════
// COMPOSANT PARTICULES FLOTTANTES
// ═══════════════════════════════════════════════════════════

const FloatingParticles = () => (
  <div className="particles">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="particle"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${15 + Math.random() * 10}s`
        }}
      />
    ))}
  </div>
);

// ═══════════════════════════════════════════════════════════
// COMPOSANT PRINCIPAL
// ═══════════════════════════════════════════════════════════

export default function AnimatedHero() {
  const [currentScene, setCurrentScene] = useState(0);
  const [phase, setPhase] = useState<'before' | 'after'>('before');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Cycle automatique : 3s before → 3s after → next scene
  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        if (phase === 'before') {
          setPhase('after');
        } else {
          setPhase('before');
          setCurrentScene((prev) => (prev + 1) % SCENES.length);
        }
        setIsTransitioning(false);
      }, 400);
    }, 3000);

    return () => clearInterval(timer);
  }, [phase]);

  const scene = SCENES[currentScene];
  const content = phase === 'before' ? scene.before : scene.after;

  const handleIndicatorClick = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentScene(index);
      setPhase('before');
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <section className={`animated-hero phase-${phase}`}>
      <FloatingParticles />

      {/* Background gradient animé */}
      <div className="hero-bg-gradient" />

      <div className="hero-container">
        {/* Badge métier */}
        <div className="metier-badge" style={{ backgroundColor: scene.color }}>
          {scene.metier}
        </div>

        <div className={`hero-content ${isTransitioning ? 'transitioning' : ''}`}>
          {/* Colonne gauche : Texte */}
          <div className="hero-text">
            <div className={`phase-indicator ${phase}`}>
              {phase === 'before' ? '😟 AVANT' : '✨ APRÈS'}
            </div>

            <h1 className="hero-title">
              {content.title}
            </h1>

            <ul className={`hero-list ${phase}`}>
              {content.items.map((item, i) => (
                <li
                  key={i}
                  className="hero-list-item"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <span className="item-icon">
                    {phase === 'before' ? '❌' : '✅'}
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA principal */}
            <Link href="/demo">
              <span className="hero-cta">
                <span className="cta-icon">🚀</span>
                Libérez-vous avec NEXUS
                <span className="cta-arrow">→</span>
              </span>
            </Link>
          </div>

          {/* Colonne droite : Illustration emoji */}
          <div className="hero-visual">
            <div className="emoji-illustration">
              <div className="emoji-container">
                {content.emoji.split('').filter(c => c.trim()).map((emoji, i) => (
                  <span
                    key={`${phase}-${i}`}
                    className="emoji-char"
                    style={{
                      animationDelay: `${i * 0.15}s`,
                      fontSize: i === 0 ? '100px' : '56px'
                    }}
                  >
                    {emoji}
                  </span>
                ))}
              </div>
            </div>

            {/* Cercle décoratif */}
            <div className={`visual-circle ${phase}`} />
          </div>
        </div>

        {/* Indicateurs de scène */}
        <div className="scene-indicators">
          {SCENES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => handleIndicatorClick(i)}
              className={`indicator ${i === currentScene ? 'active' : ''}`}
              style={{
                '--indicator-color': s.color
              } as React.CSSProperties}
            >
              <span className="indicator-label">{s.metier}</span>
            </button>
          ))}
        </div>

        {/* Barre de progression */}
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: phase === 'before' ? '50%' : '100%',
              backgroundColor: scene.color
            }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span>Découvrir</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  );
}
