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
      id: 'facturation',
      icon: '💰',
      name: 'Facturation & Paiements',
      tagline: 'Encaissez et facturez en ligne',
      description: 'Création factures/devis, paiement Stripe, relances automatiques, export PDF.',
      features: [
        'Factures & devis illimités',
        'Paiement en ligne Stripe',
        'Relances impayés (1 relance)',
        'Export PDF'
      ]
    },
    {
      id: 'clients',
      icon: '👥',
      name: 'CRM Clients Base',
      tagline: 'Gérez vos contacts efficacement',
      description: 'Fiches clients, historique factures, recherche rapide, import/export CSV.',
      features: [
        'Fiches clients complètes',
        'Historique factures',
        'Recherche & filtres',
        'Import/Export CSV (500 max)'
      ]
    },
    {
      id: 'dashboard',
      icon: '📊',
      name: 'Dashboard & Stats',
      tagline: 'Pilotez votre activité en temps réel',
      description: 'CA jour/semaine/mois, top clients, factures impayées, graphiques.',
      features: [
        'CA en temps réel',
        'Top 5 clients',
        'Factures impayées',
        'Graphique évolution (7j)'
      ]
    },
    {
      id: 'assistant-ia',
      icon: '🤖',
      name: 'Assistant Admin IA',
      tagline: 'Votre copilote intelligent',
      description: 'Chat IA qui répond à vos questions sur votre activité (lecture seule).',
      features: [
        'Questions activité',
        'Suggestions actions',
        'Historique 30 jours',
        'Lecture seule (pas d\'exécution)'
      ]
    },
    {
      id: 'notifications',
      icon: '🔔',
      name: 'Notifications',
      tagline: 'Restez informé automatiquement',
      description: 'Emails automatiques pour factures payées, impayées, rappels.',
      features: [
        'Email facture payée',
        'Rappel impayés J+7',
        'Rappel hebdo activité',
        '50 emails/mois inclus'
      ]
    },
    {
      id: 'documents',
      icon: '📁',
      name: 'Documents & Fichiers',
      tagline: 'Centralisez vos fichiers',
      description: 'Upload, rangement par client/projet, partage sécurisé.',
      features: [
        'Upload fichiers (500 MB)',
        'Rangement par client',
        'Partage lien sécurisé',
        '50 fichiers max'
      ]
    },
    {
      id: 'sentinel-basic',
      icon: '🛡️',
      name: 'SENTINEL Monitor',
      tagline: 'Surveillance système basique',
      description: 'Uptime monitoring, logs 7 jours, alertes critiques.',
      features: [
        'Uptime monitoring',
        'Logs 7 derniers jours',
        'Alertes critiques',
        'Dashboard santé'
      ]
    }
  ],

  pro: [
    {
      id: 'comptabilite',
      icon: '💼',
      name: 'Comptabilité Complète',
      tagline: 'Suivi financier professionnel',
      description: 'TVA auto, bilan, compte résultat, export comptable expert.',
      features: [
        'TVA automatique',
        'Bilan & compte résultat',
        'Export comptable',
        'Rapprochement bancaire'
      ]
    },
    {
      id: 'crm-advanced',
      icon: '👔',
      name: 'CRM Avancé',
      tagline: 'Relation client optimisée',
      description: 'Segmentation, tags, scoring, clients illimités.',
      features: [
        'Clients illimités',
        'Segmentation avancée',
        'Tags personnalisés',
        'Scoring A/B/C'
      ]
    },
    {
      id: 'marketing',
      icon: '📢',
      name: 'Marketing Automation',
      tagline: 'Fidélisez automatiquement',
      description: 'Campagnes email/SMS, relances auto, A/B testing.',
      features: [
        'Campagnes email/SMS',
        'Relances auto intelligentes',
        'A/B testing',
        '1000 emails/mois'
      ]
    },
    {
      id: 'stock',
      icon: '📦',
      name: 'Stock & Inventaire',
      tagline: 'Gérez vos produits',
      description: 'Catalogue, alertes stock, commandes fournisseurs.',
      features: [
        'Catalogue produits',
        'Alertes stock bas',
        'Commandes fournisseurs',
        'Valorisation stock'
      ]
    },
    {
      id: 'analytics',
      icon: '📈',
      name: 'Analytics Avancés',
      tagline: 'Décisions data-driven',
      description: 'Rapports personnalisés, exports Excel, prévisions IA.',
      features: [
        'Rapports personnalisés',
        'Exports Excel/CSV',
        'Prévisions IA',
        'KPI métier'
      ]
    },
    {
      id: 'assistant-pro',
      icon: '🤖',
      name: 'Assistant Admin PRO',
      tagline: 'IA qui agit pour vous',
      description: 'Exécution d\'actions : créer factures, relancer clients, workflows auto.',
      features: [
        'Exécution actions',
        'Workflows automatiques',
        'Historique illimité',
        'Suggestions proactives'
      ]
    },
    {
      id: 'sentinel-active',
      icon: '🛡️',
      name: 'SENTINEL Actif',
      tagline: 'Optimisation intelligente',
      description: 'Logs 30j, auto-optimisation coûts, détection anomalies.',
      features: [
        'Logs 30 jours',
        'Auto-optimisation coûts',
        'Détection anomalies',
        'Recommandations IA'
      ]
    }
  ],

  business: [
    {
      id: 'seo',
      icon: '🔍',
      name: 'SEO & Visibilité',
      tagline: 'Dominez Google',
      description: 'SEO automatisé, analytics avancés, rapports mensuels.',
      features: [
        'SEO automatisé',
        'Analytics avancés',
        'Rapports mensuels',
        'Audit technique'
      ]
    },
    {
      id: 'rh',
      icon: '👔',
      name: 'RH & Planning',
      tagline: 'Gérez votre équipe',
      description: 'Planning, heures travaillées, absences, commissions.',
      features: [
        'Planning équipe',
        'Suivi heures',
        'Gestion absences',
        'Commissions auto'
      ]
    },
    {
      id: 'social',
      icon: '📱',
      name: 'Réseaux Sociaux IA',
      tagline: 'Présence automatique',
      description: 'Posts auto Instagram/Facebook, contenu IA, programmation.',
      features: [
        'Posts automatiques',
        'Génération contenu IA',
        'Multi-plateformes',
        'Analytics social'
      ]
    },
    {
      id: 'whitelabel',
      icon: '🎨',
      name: 'White-Label',
      tagline: 'Votre marque uniquement',
      description: 'Interface personnalisée, domaine custom, logo.',
      features: [
        'Interface personnalisée',
        'Domaine custom',
        'Logo & couleurs',
        'Email personnalisé'
      ]
    },
    {
      id: 'api',
      icon: '🔌',
      name: 'API & Intégrations',
      tagline: 'Connectez tout',
      description: 'API REST complète, webhooks, intégrations tierces.',
      features: [
        'API REST complète',
        'Webhooks',
        'Intégrations tierces',
        'Documentation dev'
      ]
    },
    {
      id: 'sentinel-intelligence',
      icon: '🛡️',
      name: 'SENTINEL Intelligence',
      tagline: 'IA de surveillance avancée',
      description: 'Veille concurrentielle, auto-repair, prédictions business.',
      features: [
        'Veille concurrentielle',
        'Auto-repair système',
        'Prédictions business',
        'Alerting avancé'
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
          <span className="plan-price">249€/mois</span>
          <span className="badge">Populaire</span>
        </button>
        <button
          className={activePlan === 'business' ? 'active' : ''}
          onClick={() => setActivePlan('business')}
        >
          <span className="plan-name">Business</span>
          <span className="plan-price">499€/mois</span>
        </button>
      </div>

      {/* Modules Starter */}
      <section className="modules-section">
        <div className="section-header">
          <div className="section-indicator starter" />
          <h2>Modules Starter</h2>
          <p>7 modules universels pour tous les business</p>
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
          <p>7 modules supplémentaires pour automatiser et croître</p>
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
          <p>6 modules pour scaler et dominer</p>
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
            <p>Un réceptionniste virtuel 24/7 pour les métiers à RDV</p>
            <div className="option-channels">
              <span>💬 Web : 29€/mois</span>
              <span>📱 WhatsApp : 39€/mois</span>
              <span>☎️ Téléphone : 99€/mois</span>
              <span className="highlight">📦 Pack 3 canaux : 149€/mois</span>
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
            <div className="option-note">-60% avec Business (engagement 12 mois)</div>
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
