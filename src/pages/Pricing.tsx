import { useState } from 'react';
import { Check, Bot, Globe, Users, Phone, MessageCircle, Smartphone } from 'lucide-react';
import { Link } from 'wouter';

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 99,
    yearlyPrice: 79,
    description: 'Parfait pour démarrer',
    users: 1,
    features: [
      '9 modules métier basiques',
      'Dashboard admin',
      'SENTINEL monitoring',
      'Support email',
      '1 utilisateur',
    ],
    cta: 'Commencer',
    popular: false,
  },
  {
    name: 'Pro',
    monthlyPrice: 199,
    yearlyPrice: 159,
    description: 'Le plus populaire',
    users: 5,
    features: [
      'Tous les modules métier',
      'SENTINEL actif (auto-optimisation)',
      'Analytics avancés + Exports',
      'Comptabilité & Commercial',
      'Marketing & Relances auto',
      'Support prioritaire',
      '5 utilisateurs inclus',
      '+20€/utilisateur supplémentaire',
    ],
    cta: 'Essayer Pro',
    popular: true,
  },
  {
    name: 'Business',
    monthlyPrice: 399,
    yearlyPrice: 319,
    description: 'Pour les pros exigeants',
    users: 10,
    features: [
      'Tout Pro, plus :',
      'SENTINEL Intelligence (veille)',
      'SEO & Visibilité',
      'RH & Multi-employés',
      'White-label',
      'API & Intégrations',
      'Support dédié 24/7',
      '10 utilisateurs inclus',
      '+15€/utilisateur supplémentaire',
      'Site Vitrine Pro -60%',
    ],
    cta: 'Passer Business',
    popular: false,
  },
];

const channels = [
  { id: 'web', name: 'Chat Web', icon: MessageCircle, price: 29, desc: 'Conversations illimitées' },
  { id: 'whatsapp', name: 'WhatsApp', icon: Smartphone, price: 39, desc: 'Conversations illimitées' },
  { id: 'phone', name: 'Téléphone', icon: Phone, price: 99, desc: '120 min incluses, +0,95€/min' },
];

const packs = [
  { name: 'Web + WhatsApp', price: 59, ids: ['web', 'whatsapp'], save: 9 },
  { name: 'Web + Téléphone', price: 119, ids: ['web', 'phone'], save: 9 },
  { name: 'WhatsApp + Téléphone', price: 129, ids: ['whatsapp', 'phone'], save: 9 },
  { name: 'Les 3 canaux', price: 149, ids: ['web', 'whatsapp', 'phone'], save: 18, popular: true },
];

const faqs = [
  { q: 'Puis-je changer de plan à tout moment ?', a: 'Oui, vous pouvez upgrader ou downgrader votre plan à tout moment. Les changements prennent effet immédiatement.' },
  { q: "Y a-t-il un engagement de durée ?", a: "Non, aucun engagement sur les plans NEXUS (Starter, Pro, Business). Seule l'Option A du site vitrine (-60% avec Business) implique un engagement 12 mois. Toutes les autres options sont sans engagement." },
  { q: "L'installation est-elle incluse ?", a: "Oui, l'installation et la formation sont incluses dans tous les plans. Nous vous accompagnons jusqu'à ce que vous soyez autonome." },
  { q: "L'agent IA est-il obligatoire ?", a: "Non, l'agent IA est une option. Vous pouvez utiliser NEXUS sans agent et l'ajouter plus tard quand vous êtes prêt." },
  { q: 'Comment fonctionne la réduction sur le site vitrine ?', a: 'La réduction dépend de votre plan NEXUS : Business = -60% (596€) ou -20% (1 192€), Pro = -15% (1 267€), Starter = prix normal (1 490€). L\'Option A Business (-60%) nécessite un engagement 12 mois.' },
  { q: 'Que se passe-t-il si je résilie Business avant 12 mois avec l\'Option A ?', a: 'Si vous avez choisi l\'Option A (-60% avec engagement 12 mois) et résiliez avant terme, une facturation prorata s\'applique sur la réduction obtenue. Après 12 mois : aucune pénalité. Dans tous les cas, vous restez propriétaire de votre site.' },
  { q: 'Comment fonctionne le multi-utilisateurs ?', a: 'Chaque plan inclut un nombre d\'utilisateurs. Le propriétaire peut inviter des membres avec différents rôles (Manager, Employé, Viewer) et permissions adaptées.' },
  { q: 'Que se passe-t-il si je dépasse mes utilisateurs inclus ?', a: 'Vous pouvez ajouter des utilisateurs supplémentaires à 20€/mois (Pro) ou 15€/mois (Business). Aucune coupure de service.' },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const [selectedChannels, setSelectedChannels] = useState<string[]>([]);
  const [selectedSiteOption, setSelectedSiteOption] = useState<string | null>(null);

  const toggleChannel = (id: string) => {
    setSelectedChannels(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const channelTotal = selectedChannels.reduce((sum, id) => {
    const ch = channels.find(c => c.id === id);
    return sum + (ch?.price || 0);
  }, 0);

  const bestPack = packs.find(pack =>
    pack.ids.length === selectedChannels.length &&
    pack.ids.every(c => selectedChannels.includes(c))
  );

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* Demo Banner */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center gap-3 text-sm font-medium">
          <span>⚡ Pas encore convaincu ?</span>
          <Link href="/demo" className="underline underline-offset-2 hover:no-underline font-semibold">
            Testez NEXUS gratuitement en 2 min →
          </Link>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Tarifs NEXUS</h1>
          <p className="text-xl mb-8 opacity-90">
            Transparent, simple, et adapté à votre croissance
          </p>
          <div className="inline-flex items-center bg-white/20 rounded-lg px-6 py-3">
            <span className="text-lg">Essai gratuit 14 jours &mdash; Sans carte bancaire</span>
          </div>
        </div>
      </section>

      {/* PLANS NEXUS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Plans NEXUS</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Votre plateforme tout-en-un pour gérer votre activité
            </p>

            <div className="mt-8 inline-flex items-center gap-0 p-1 bg-white rounded-lg shadow">
              <button
                onClick={() => setAnnual(false)}
                className={`px-6 py-2 rounded-md font-medium transition-all ${!annual ? 'bg-cyan-500 text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Mensuel
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`px-6 py-2 rounded-md font-medium transition-all ${annual ? 'bg-cyan-500 text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Annuel
                <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">-20%</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map(plan => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-transform ${plan.popular ? 'ring-2 ring-cyan-500 md:scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                    Le plus populaire
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">
                      {annual ? plan.yearlyPrice : plan.monthlyPrice}€
                    </span>
                    <span className="text-gray-600">/mois</span>
                  </div>

                  <Link
                    to="/contact"
                    className={`block text-center px-6 py-3 rounded-lg font-semibold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-xl'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </Link>

                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENT IA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Bot className="w-4 h-4" />
              Option
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Agent Réservation IA</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un réceptionniste virtuel 24/7 qui prend les rendez-vous pour vous
            </p>
          </div>

          {/* Channels */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Choisissez vos canaux</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {channels.map(ch => {
                const Icon = ch.icon;
                const selected = selectedChannels.includes(ch.id);
                return (
                  <button
                    key={ch.id}
                    onClick={() => toggleChannel(ch.id)}
                    className={`p-6 rounded-xl border-2 text-left transition-all ${
                      selected
                        ? 'border-cyan-500 bg-cyan-50 shadow-md'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <Icon className={`w-8 h-8 mb-3 ${selected ? 'text-cyan-600' : 'text-gray-400'}`} />
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{ch.name}</h4>
                    <div className="text-2xl font-bold text-cyan-600 mb-1">
                      {ch.price}€<span className="text-sm text-gray-500 font-normal">/mois</span>
                    </div>
                    <p className="text-sm text-gray-500">{ch.desc}</p>
                  </button>
                );
              })}
            </div>

            {selectedChannels.length > 1 && (
              <div className="mt-6 p-5 bg-gray-50 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-gray-600">Total à la carte</div>
                  <div className="text-2xl font-bold text-gray-900">{channelTotal}€/mois</div>
                </div>
                {bestPack && (
                  <div className="text-right">
                    <div className="text-green-600 font-semibold text-sm mb-1">Pack disponible</div>
                    <div className="text-2xl font-bold text-cyan-600">{bestPack.price}€/mois</div>
                    <div className="text-sm text-green-600">-{bestPack.save}€ d'économie</div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Packs */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Ou choisissez un pack</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {packs.map(pack => (
                <div
                  key={pack.name}
                  className={`p-6 rounded-xl border-2 ${
                    pack.popular ? 'border-cyan-500 bg-cyan-50' : 'border-gray-200 bg-white'
                  }`}
                >
                  {pack.popular && (
                    <div className="text-cyan-600 font-semibold text-sm mb-2">Recommandé</div>
                  )}
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{pack.name}</h4>
                  <div className="text-3xl font-bold text-cyan-600 mb-1">
                    {pack.price}€<span className="text-sm text-gray-500 font-normal">/mois</span>
                  </div>
                  <div className="text-sm text-green-600 font-medium mb-4">
                    Économie : {pack.save}€/mois
                  </div>
                  <Link
                    to="/contact"
                    className="block text-center px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg transition-all"
                  >
                    Choisir ce pack
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SITE VITRINE PRO */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Globe className="w-4 h-4" />
              Option
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Site Vitrine Pro</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
              Un site professionnel en 7 jours, optimisé pour convertir vos visiteurs en clients
            </p>
            <div className="inline-block bg-white px-6 py-3 rounded-xl shadow-sm">
              <span className="text-gray-600">Prix normal : </span>
              <span className="text-2xl font-bold text-gray-900">1 490€</span>
              <span className="text-gray-500"> TTC</span>
            </div>
          </div>

          {/* Comparatif des 4 options */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

              {/* Option Business A : -60% avec engagement */}
              <button
                onClick={() => setSelectedSiteOption('business-a')}
                className={`relative text-left bg-white rounded-2xl p-6 border-2 transition-all hover:shadow-lg ${
                  selectedSiteOption === 'business-a'
                    ? 'border-green-500 shadow-xl ring-2 ring-green-200'
                    : 'border-gray-200 hover:border-green-300'
                }`}
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    Meilleure offre
                  </span>
                </div>

                <div className="pt-2">
                  <div className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">Plan Business</div>
                  <div className="text-lg font-bold text-gray-900 mb-3">Option A : -60%</div>

                  <div className="mb-3">
                    <span className="text-3xl font-bold text-green-600">596€</span>
                    <span className="text-gray-400 line-through ml-2 text-sm">1 490€</span>
                  </div>

                  <div className="bg-green-50 rounded-lg p-3 mb-4">
                    <div className="text-xs text-gray-600">Économie</div>
                    <div className="text-lg font-bold text-green-600">894€</div>
                  </div>

                  <ul className="space-y-2 mb-4 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Engagement 12 mois Business</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Plan à 399€/mois</span>
                    </li>
                  </ul>

                  <div className="text-xs text-gray-500 border-t pt-3">
                    Résiliation anticipée : facturation prorata
                  </div>
                </div>
              </button>

              {/* Option Business B : -20% sans engagement */}
              <button
                onClick={() => setSelectedSiteOption('business-b')}
                className={`text-left bg-white rounded-2xl p-6 border-2 transition-all hover:shadow-lg ${
                  selectedSiteOption === 'business-b'
                    ? 'border-blue-500 shadow-xl ring-2 ring-blue-200'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">Plan Business</div>
                <div className="text-lg font-bold text-gray-900 mb-3">Option B : -20%</div>

                <div className="mb-3">
                  <span className="text-3xl font-bold text-blue-600">1 192€</span>
                  <span className="text-gray-400 line-through ml-2 text-sm">1 490€</span>
                </div>

                <div className="bg-blue-50 rounded-lg p-3 mb-4">
                  <div className="text-xs text-gray-600">Économie</div>
                  <div className="text-lg font-bold text-blue-600">298€</div>
                </div>

                <ul className="space-y-2 mb-4 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Sans engagement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Plan à 399€/mois</span>
                  </li>
                </ul>

                <div className="text-xs text-gray-500 border-t pt-3">
                  Liberté totale, résiliez quand vous voulez
                </div>
              </button>

              {/* Option Pro : -15% */}
              <button
                onClick={() => setSelectedSiteOption('pro')}
                className={`text-left bg-white rounded-2xl p-6 border-2 transition-all hover:shadow-lg ${
                  selectedSiteOption === 'pro'
                    ? 'border-cyan-500 shadow-xl ring-2 ring-cyan-200'
                    : 'border-gray-200 hover:border-cyan-300'
                }`}
              >
                <div className="text-xs font-semibold text-cyan-600 uppercase tracking-wide mb-1">Plan Pro</div>
                <div className="text-lg font-bold text-gray-900 mb-3">Réduction -15%</div>

                <div className="mb-3">
                  <span className="text-3xl font-bold text-cyan-600">1 267€</span>
                  <span className="text-gray-400 line-through ml-2 text-sm">1 490€</span>
                </div>

                <div className="bg-cyan-50 rounded-lg p-3 mb-4">
                  <div className="text-xs text-gray-600">Économie</div>
                  <div className="text-lg font-bold text-cyan-600">223€</div>
                </div>

                <ul className="space-y-2 mb-4 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Sans engagement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Plan à 199€/mois</span>
                  </li>
                </ul>

                <div className="text-xs text-gray-500 border-t pt-3">
                  Idéal pour les indépendants
                </div>
              </button>

              {/* Option Starter : prix normal */}
              <button
                onClick={() => setSelectedSiteOption('starter')}
                className={`text-left bg-white rounded-2xl p-6 border-2 transition-all hover:shadow-lg ${
                  selectedSiteOption === 'starter'
                    ? 'border-gray-500 shadow-xl ring-2 ring-gray-200'
                    : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">Plan Starter</div>
                <div className="text-lg font-bold text-gray-900 mb-3">Prix normal</div>

                <div className="mb-3">
                  <span className="text-3xl font-bold text-gray-700">1 490€</span>
                </div>

                <div className="bg-gray-100 rounded-lg p-3 mb-4">
                  <div className="text-xs text-gray-600">Économie</div>
                  <div className="text-lg font-bold text-gray-500">0€</div>
                </div>

                <ul className="space-y-2 mb-4 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Sans engagement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Plan à 99€/mois</span>
                  </li>
                </ul>

                <div className="text-xs text-gray-500 border-t pt-3">
                  Pas de réduction site
                </div>
              </button>
            </div>

            {/* CTA après sélection */}
            {selectedSiteOption && (
              <div className="mt-8 text-center">
                <Link
                  to="/contact"
                  className="inline-block px-10 py-4 rounded-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-xl transition-all text-lg"
                >
                  {selectedSiteOption === 'business-a' && 'Commander à 596€ (-60%)'}
                  {selectedSiteOption === 'business-b' && 'Commander à 1 192€ (-20%)'}
                  {selectedSiteOption === 'pro' && 'Commander à 1 267€ (-15%)'}
                  {selectedSiteOption === 'starter' && 'Commander à 1 490€'}
                </Link>
              </div>
            )}

            {/* Inclus dans tous les sites */}
            <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Inclus dans tous les sites</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  '5 pages professionnelles',
                  'Design responsive moderne',
                  'Contenu rédigé par IA',
                  'SEO optimisé',
                  'Hébergement 1 an inclus',
                  'Domaine .fr inclus',
                  'Formation 1h',
                  'Livraison 7-10 jours',
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Options supplémentaires */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Pages supplémentaires', price: '+150€/page' },
                { name: 'E-commerce (catalogue)', price: '+990€' },
                { name: 'Blog intégré', price: '+490€' },
                { name: 'Multilingue (2 langues)', price: '+690€' },
              ].map(opt => (
                <div key={opt.name} className="bg-white p-4 rounded-xl border border-gray-200 text-center">
                  <div className="font-semibold text-gray-900 text-sm">{opt.name}</div>
                  <div className="text-purple-600 font-bold">{opt.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MULTI-UTILISATEURS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              Inclus dans chaque plan
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Multi-utilisateurs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Invitez votre équipe avec des rôles et permissions adaptés
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { plan: 'Starter', users: '1 utilisateur', extra: null },
                { plan: 'Pro', users: '5 utilisateurs inclus', extra: '+20€/utilisateur sup.' },
                { plan: 'Business', users: '10 utilisateurs inclus', extra: '+15€/utilisateur sup.' },
              ].map(item => (
                <div key={item.plan} className="bg-gray-50 rounded-xl p-6 text-center">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{item.plan}</h4>
                  <div className="text-2xl font-bold text-cyan-600 mb-1">{item.users}</div>
                  {item.extra && <div className="text-sm text-gray-500">{item.extra}</div>}
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Rôles disponibles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { role: 'Propriétaire', desc: 'Accès total, facturation, gestion équipe' },
                  { role: 'Manager', desc: 'Gestion RDV, clients, stats (sans compta)' },
                  { role: 'Employé', desc: 'Ses RDV et clients uniquement' },
                  { role: 'Viewer', desc: 'Lecture seule, aucune modification' },
                ].map(r => (
                  <div key={r.role} className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="font-bold text-gray-900">{r.role}</div>
                    <div className="text-sm text-gray-600">{r.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Questions Fréquentes</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Des questions sur nos tarifs ?
            </h3>
            <p className="text-gray-600 mb-6">
              Testez NEXUS avant de décider, ou contactez notre équipe
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-xl transition-all text-lg"
              >
                🎬 Voir la démo
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all text-lg"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
