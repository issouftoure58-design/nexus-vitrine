import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import './AnimatedHero.css';

const SCENES = [
  {
    id: 1,
    metier: '💇‍♀️ Coiffeuse',
    before: {
      emoji: '😰',
      title: 'Débordée',
      color: '#ff6b6b',
      items: [
        '☎️ Téléphone qui sonne pendant coupe',
        '📋 Agenda papier illisible',
        '💸 Factures oubliées',
        '⏰ Fermeture tardive chaque soir'
      ]
    },
    after: {
      emoji: '😌',
      title: 'Sereine avec NEXUS',
      color: '#4ecdc4',
      items: [
        '🤖 IA répond aux clients 24/7',
        '📅 Agenda synchronisé automatiquement',
        '💳 Paiements automatiques',
        '🏡 Départ à l\'heure garantie'
      ]
    }
  },
  {
    id: 2,
    metier: '👨‍🍳 Restaurateur',
    before: {
      emoji: '😫',
      title: 'Submergé',
      color: '#ff6b6b',
      items: [
        '📞 Réservations par téléphone en plein service',
        '❌ No-shows qui plombent le CA',
        '📊 Comptabilité en retard',
        '🌙 Aucune visibilité sur les stats'
      ]
    },
    after: {
      emoji: '😊',
      title: 'Organisé avec NEXUS',
      color: '#4ecdc4',
      items: [
        '📱 Réservations en ligne 24/7',
        '✅ Rappels automatiques = 0 no-show',
        '💰 Compta en temps réel',
        '📈 Dashboard stats live'
      ]
    }
  },
  {
    id: 3,
    metier: '🎉 Organisateur événements',
    before: {
      emoji: '😩',
      title: 'Noyé',
      color: '#ff6b6b',
      items: [
        '📧 100+ emails/jour sans réponse',
        '📝 Devis manuels interminables',
        '🤝 Clients impatients qui annulent',
        '⏰ Nuits blanches avant chaque event'
      ]
    },
    after: {
      emoji: '😄',
      title: 'Efficace avec NEXUS',
      color: '#4ecdc4',
      items: [
        '🤖 IA répond instantanément',
        '⚡ Devis automatiques en 30s',
        '😊 Clients satisfaits et fidèles',
        '🌙 Sommeil réparateur'
      ]
    }
  }
];

export default function AnimatedHero() {
  const [currentScene, setCurrentScene] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % SCENES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const scene = SCENES[currentScene];

  return (
    <section className="hero-animated">
      {/* Badge métier */}
      <div className="metier-badge" key={`badge-${currentScene}`}>
        {scene.metier}
      </div>

      {/* Split screen avant/après */}
      <div className="split-screen" key={`split-${currentScene}`}>
        {/* AVANT (gauche) */}
        <div className="side before">
          <div className="phase-label">AVANT</div>

          <div className="emoji-giant">
            {scene.before.emoji}
          </div>

          <h2 className="side-title" style={{ color: scene.before.color }}>
            {scene.before.title}
          </h2>

          <ul className="items-list">
            {scene.before.items.map((item, i) => (
              <li
                key={i}
                className="item before-item"
                style={{
                  borderLeftColor: scene.before.color,
                  animationDelay: `${i * 0.1}s`
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Séparateur vertical animé */}
        <div className="divider">
          <div className="arrow">→</div>
        </div>

        {/* APRÈS (droite) */}
        <div className="side after">
          <div className="phase-label success">AVEC NEXUS</div>

          <div className="emoji-giant">
            {scene.after.emoji}
          </div>

          <h2 className="side-title" style={{ color: scene.after.color }}>
            {scene.after.title}
          </h2>

          <ul className="items-list">
            {scene.after.items.map((item, i) => (
              <li
                key={i}
                className="item after-item"
                style={{
                  borderLeftColor: scene.after.color,
                  animationDelay: `${i * 0.1}s`
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Indicateurs */}
      <div className="indicators">
        {SCENES.map((s, i) => (
          <button
            key={i}
            className={i === currentScene ? 'active' : ''}
            onClick={() => setCurrentScene(i)}
            aria-label={`Scène ${i + 1}`}
          />
        ))}
      </div>

      {/* CTA */}
      <Link href="/demo" className="cta-hero">
        🚀 Libérez-vous avec NEXUS
      </Link>
    </section>
  );
}
