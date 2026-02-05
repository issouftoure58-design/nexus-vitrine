import { useState } from 'react';
import { Link } from 'wouter';
import './Features.css';

type Plan = 'starter' | 'pro' | 'business';

interface Module {
  id: string;
  icon: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
}

const MODULES: Record<Plan, Module[]> = {
  starter: [
    {
      id: 'reservations',
      icon: '📅',
      name: 'Réservations IA',
      tagline: 'Prise de rendez-vous automatisée par IA',
      description: 'Calendrier intelligent, rappels SMS, gestion des disponibilités en temps réel.',
      features: [
        'Calendrier intelligent',
        'Rappels automatiques',
        'Réservations 24/7'
      ]
    },
    {
      id: 'paiements',
      icon: '💳',
      name: 'Paiements Stripe',
      tagline: 'Encaissez en ligne avec Stripe',
      description: 'Acomptes, paiements complets, facturation automatique et suivi en temps réel.',
      features: [
        'Stripe intégré',
        'Facturation auto',
        'Suivi paiements'
      ]
    }
  ],

  pro: [
    {
      id: 'crm',
      icon: '👥',
      name: 'CRM Clients',
      tagline: 'Gérez votre relation client comme un pro',
      description: 'Historique complet, préférences, segmentation et communication ciblée.',
      features: [
        'Fiches clients',
        'Historique complet',
        'Segmentation'
      ]
    },
    {
      id: 'compta',
      icon: '💰',
      name: 'Comptabilité',
      tagline: 'Suivi financier simplifié',
      description: 'Chiffre d\'affaires, dépenses, marges et export comptable en un clic.',
      features: [
        'Dashboard financier',
        'Export comptable',
        'Suivi CA/marges'
      ]
    },
    {
      id: 'stock',
      icon: '📦',
      name: 'Stock & Inventaire',
      tagline: 'Gérez vos produits et consommables',
      description: 'Alertes de stock bas, commandes fournisseurs et valorisation.',
      features: [
        'Gestion produits',
        'Alertes stock',
        'Valorisation'
      ]
    },
    {
      id: 'marketing',
      icon: '📢',
      name: 'Marketing Automation',
      tagline: 'Campagnes email et SMS automatisées',
      description: 'Relance clients inactifs, promotions ciblées et fidélisation.',
      features: [
        'Campagnes auto',
        'Relance clients',
        'Promotions'
      ]
    }
  ],

  business: [
    {
      id: 'seo',
      icon: '🔍',
      name: 'SEO & Analytics',
      tagline: 'Référencement Google optimisé',
      description: 'Suivez vos performances et améliorez votre visibilité.',
      features: [
        'SEO automatisé',
        'Analytics avancés',
        'Rapports mensuels'
      ]
    },
    {
      id: 'rh',
      icon: '👔',
      name: 'RH & Planning',
      tagline: 'Gestion des employés et planning d\'équipe',
      description: 'Heures travaillées, absences et commissions.',
      features: [
        'Planning équipe',
        'Suivi heures',
        'Commissions'
      ]
    },
    {
      id: 'social',
      icon: '📱',
      name: 'Réseaux Sociaux IA',
      tagline: 'Publication automatique sur Instagram, Facebook',
      description: 'Génération de contenu IA et programmation intelligente.',
      features: [
        'Posts automatiques',
        'Contenu IA',
        'Multi-plateformes'
      ]
    }
  ]
};

function ModuleCard({ module, plan }: { module: Module; plan: string }) {
  return (
    <div className="module-card">
      <div className="module-badge">{plan}</div>
      <div className="module-icon">{module.icon}</div>
      <h3>{module.name}</h3>
      <p className="module-tagline">{module.tagline}</p>
      <p className="module-description">{module.description}</p>
      <ul className="module-features">
        {module.features.map((feature, i) => (
          <li key={i}>
            <span className="check">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Features() {
  const [activePlan, setActivePlan] = useState<Plan>('starter');

  return (
    <div className="features-page">
      {/* Hero */}
      <section className="features-hero">
        <h1>Tous les modules pour faire grandir votre business</h1>
        <p>Chaque plan débloque des fonctionnalités supplémentaires</p>
      </section>

      {/* Sélecteur de plan */}
      <div className="plan-selector">
        <button
          className={activePlan === 'starter' ? 'active' : ''}
          onClick={() => setActivePlan('starter')}
        >
          <span className="plan-name">Starter</span>
          <span className="plan-price">99€/mois</span>
        </button>
        <button
          className={activePlan === 'pro' ? 'active' : ''}
          onClick={() => setActivePlan('pro')}
        >
          <span className="plan-name">Pro</span>
          <span className="plan-price">199€/mois</span>
          <span className="badge">Populaire</span>
        </button>
        <button
          className={activePlan === 'business' ? 'active' : ''}
          onClick={() => setActivePlan('business')}
        >
          <span className="plan-name">Business</span>
          <span className="plan-price">399€/mois</span>
        </button>
      </div>

      {/* Modules Starter */}
      <section className="modules-section">
        <div className="section-header">
          <div className="section-indicator starter" />
          <h2>Modules Starter</h2>
          <p>L'essentiel pour démarrer</p>
        </div>

        <div className="modules-grid">
          {MODULES.starter.map(module => (
            <ModuleCard key={module.id} module={module} plan="Starter+" />
          ))}
        </div>
      </section>

      {/* Modules Pro */}
      <section className={`modules-section ${activePlan === 'starter' ? 'locked' : ''}`}>
        <div className="section-header">
          <div className="section-indicator pro" />
          <h2>Modules Pro</h2>
          <p>Pour aller plus loin</p>
          {activePlan === 'starter' && (
            <span className="upgrade-hint">Passez au plan Pro pour débloquer</span>
          )}
        </div>

        <div className="modules-grid">
          {MODULES.pro.map(module => (
            <ModuleCard key={module.id} module={module} plan="Pro+" />
          ))}
        </div>
      </section>

      {/* Modules Business */}
      <section className={`modules-section ${activePlan !== 'business' ? 'locked' : ''}`}>
        <div className="section-header">
          <div className="section-indicator business" />
          <h2>Modules Business</h2>
          <p>La puissance totale</p>
          {activePlan !== 'business' && (
            <span className="upgrade-hint">Passez au plan Business pour débloquer</span>
          )}
        </div>

        <div className="modules-grid">
          {MODULES.business.map(module => (
            <ModuleCard key={module.id} module={module} plan="Business+" />
          ))}
        </div>
      </section>

      {/* Options indépendantes */}
      <section className="options-section">
        <h2>Options indépendantes</h2>
        <p className="options-subtitle">Non incluses dans les plans - à ajouter selon vos besoins</p>

        <div className="options-grid">
          {/* Agent IA */}
          <div className="option-card">
            <div className="option-icon">🤖</div>
            <h3>Agent Réservation IA</h3>
            <p>Un réceptionniste virtuel 24/7</p>
            <div className="option-channels">
              <span>💬 Web : 29€/mois</span>
              <span>📱 WhatsApp : 39€/mois</span>
              <span>☎️ Téléphone : 99€/mois</span>
            </div>
            <Link href="/pricing" className="option-link">
              Voir les détails →
            </Link>
          </div>

          {/* Site vitrine */}
          <div className="option-card">
            <div className="option-icon">🌐</div>
            <h3>Site Vitrine Pro</h3>
            <p>Un site professionnel en 7 jours</p>
            <div className="option-price">
              <span className="from">À partir de</span>
              <span className="price">596€</span>
              <span className="original">1,490€</span>
            </div>
            <Link href="/pricing" className="option-link">
              Voir les offres →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="features-cta">
        <h2>Prêt à choisir votre plan ?</h2>
        <p>Essai gratuit 14 jours • Sans carte bancaire</p>
        <Link href="/pricing" className="cta-button">
          Voir les tarifs
        </Link>
      </section>
    </div>
  );
}
