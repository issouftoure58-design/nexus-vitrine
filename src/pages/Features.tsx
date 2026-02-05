import { Link } from 'wouter';
import {
  Calendar, CreditCard, Users, Calculator, Package,
  Megaphone, BarChart3, UserCog, Share2, ArrowRight, Check
} from 'lucide-react';

type PlanLevel = 'starter' | 'pro' | 'business';

interface Module {
  icon: typeof Calendar;
  name: string;
  desc: string;
  plan: PlanLevel;
  features: string[];
}

const PLAN_COLORS: Record<PlanLevel, { bg: string; text: string; border: string }> = {
  starter: { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-200' },
  pro: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200' },
  business: { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200' },
};

const PLAN_LABELS: Record<PlanLevel, string> = {
  starter: 'Starter+',
  pro: 'Pro+',
  business: 'Business+',
};

const modules: Module[] = [
  {
    icon: Calendar,
    name: 'Reservations IA',
    desc: 'Prise de rendez-vous automatisee par IA. Calendrier intelligent, rappels SMS, gestion des disponibilites en temps reel.',
    plan: 'starter',
    features: ['Calendrier intelligent', 'Rappels automatiques', 'Reservations 24/7']
  },
  {
    icon: CreditCard,
    name: 'Paiements Stripe',
    desc: 'Encaissez en ligne avec Stripe. Acomptes, paiements complets, facturation automatique et suivi en temps reel.',
    plan: 'starter',
    features: ['Stripe integre', 'Facturation auto', 'Suivi paiements']
  },
  {
    icon: Users,
    name: 'CRM Clients',
    desc: 'Gerez votre relation client comme un pro. Historique complet, preferences, segmentation et communication ciblee.',
    plan: 'pro',
    features: ['Fiches clients', 'Historique complet', 'Segmentation']
  },
  {
    icon: Calculator,
    name: 'Comptabilite',
    desc: 'Suivi financier simplifie. Chiffre d\'affaires, depenses, marges et export comptable en un clic.',
    plan: 'pro',
    features: ['Dashboard financier', 'Export comptable', 'Suivi CA/marges']
  },
  {
    icon: Package,
    name: 'Stock & Inventaire',
    desc: 'Gerez vos produits et consommables. Alertes de stock bas, commandes fournisseurs et valorisation.',
    plan: 'pro',
    features: ['Gestion produits', 'Alertes stock', 'Valorisation']
  },
  {
    icon: Megaphone,
    name: 'Marketing Automation',
    desc: 'Campagnes email et SMS automatisees. Relance clients inactifs, promotions ciblees et fidelisation.',
    plan: 'pro',
    features: ['Campagnes auto', 'Relance clients', 'Promotions']
  },
  {
    icon: BarChart3,
    name: 'SEO & Analytics',
    desc: 'Referencement Google optimise et analytics avances. Suivez vos performances et ameliorez votre visibilite.',
    plan: 'business',
    features: ['SEO automatise', 'Analytics avances', 'Rapports mensuels']
  },
  {
    icon: UserCog,
    name: 'RH & Planning',
    desc: 'Gestion des employes et planning d\'equipe. Heures travaillees, absences et commissions.',
    plan: 'business',
    features: ['Planning equipe', 'Suivi heures', 'Commissions']
  },
  {
    icon: Share2,
    name: 'Reseaux Sociaux IA',
    desc: 'Publication automatique sur Instagram, Facebook. Generation de contenu IA et programmation intelligente.',
    plan: 'business',
    features: ['Posts automatiques', 'Contenu IA', 'Multi-plateformes']
  },
];

export default function Features() {
  const starterModules = modules.filter(m => m.plan === 'starter');
  const proModules = modules.filter(m => m.plan === 'pro');
  const businessModules = modules.filter(m => m.plan === 'business');

  const renderModule = (m: Module, i: number) => {
    const colors = PLAN_COLORS[m.plan];
    return (
      <div
        key={i}
        className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300"
      >
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl ${colors.bg}`}>
            <m.icon className={`w-6 h-6 ${colors.text}`} />
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}>
            {PLAN_LABELS[m.plan]}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{m.name}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{m.desc}</p>

        <ul className="space-y-2">
          {m.features.map((f, fi) => (
            <li key={fi} className="flex items-center gap-2 text-sm text-gray-500">
              <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
            9 modules metier
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Tout ce dont vous avez besoin<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              pour gerer votre activite
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Des outils professionnels adaptes a votre plan. Commencez simple, evoluez selon vos besoins.
          </p>
        </div>
      </section>

      {/* Legende plans */}
      <section className="py-8 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${PLAN_COLORS.starter.bg} ${PLAN_COLORS.starter.text}`}>
                Starter+
              </span>
              <span className="text-sm text-gray-600">Inclus des le plan Starter</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${PLAN_COLORS.pro.bg} ${PLAN_COLORS.pro.text}`}>
                Pro+
              </span>
              <span className="text-sm text-gray-600">A partir du plan Pro</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${PLAN_COLORS.business.bg} ${PLAN_COLORS.business.text}`}>
                Business+
              </span>
              <span className="text-sm text-gray-600">Exclusif au plan Business</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Starter */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className={`w-1 h-8 rounded-full bg-green-500`} />
            <h2 className="text-2xl font-bold text-gray-900">Modules Starter</h2>
            <span className="text-gray-500">- L'essentiel pour demarrer</span>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {starterModules.map(renderModule)}
          </div>
        </div>
      </section>

      {/* Modules Pro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className={`w-1 h-8 rounded-full bg-blue-500`} />
            <h2 className="text-2xl font-bold text-gray-900">Modules Pro</h2>
            <span className="text-gray-500">- Pour aller plus loin</span>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {proModules.map(renderModule)}
          </div>
        </div>
      </section>

      {/* Modules Business */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className={`w-1 h-8 rounded-full bg-purple-500`} />
            <h2 className="text-2xl font-bold text-gray-900">Modules Business</h2>
            <span className="text-gray-500">- La puissance totale</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessModules.map(renderModule)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pret a transformer votre activite ?
          </h2>
          <p className="text-gray-400 mb-8">
            Choisissez le plan qui vous correspond et commencez a gagner du temps des aujourd'hui.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing">
              <span className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition">
                Voir les tarifs
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition">
                Nous contacter
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
