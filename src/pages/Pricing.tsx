import { useState } from 'react';
import { Check, Bot, Globe, Users, Phone, MessageCircle, Smartphone, Shield } from 'lucide-react';
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
      'Site Vitrine Pro OFFERT',
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
  { q: "Y a-t-il un engagement de durée ?", a: "Non, aucun engagement sur les plans NEXUS (Starter, Pro, Business). Seule l'Option A du site vitrine (offert avec Business) implique un engagement 12 mois. L'Option B (-50%) est sans engagement." },
  { q: "L'installation est-elle incluse ?", a: "Oui, l'installation et la formation sont incluses dans tous les plans. Nous vous accompagnons jusqu'à ce que vous soyez autonome." },
  { q: "L'agent IA est-il obligatoire ?", a: "Non, l'agent IA est une option. Vous pouvez utiliser NEXUS sans agent et l'ajouter plus tard quand vous êtes prêt." },
  { q: 'Que se passe-t-il si je résilie Business avant 12 mois avec un site offert ?', a: 'Si vous avez choisi l\'Option A (site offert avec engagement 12 mois) et résiliez avant terme, une facturation prorata s\'applique : Mois 1-3 : 1 490€ | Mois 4-6 : 1 200€ | Mois 7-9 : 800€ | Mois 10-11 : 400€ | Après 12 mois : 0€. Cela ne concerne pas l\'Option B (-50% sans engagement). Dans tous les cas, vous restez propriétaire de votre site.' },
  { q: 'Comment fonctionne le multi-utilisateurs ?', a: 'Chaque plan inclut un nombre d\'utilisateurs. Le propriétaire peut inviter des membres avec différents rôles (Manager, Employé, Viewer) et permissions adaptées.' },
  { q: 'Que se passe-t-il si je dépasse mes utilisateurs inclus ?', a: 'Vous pouvez ajouter des utilisateurs supplémentaires à 20€/mois (Pro) ou 15€/mois (Business). Aucune coupure de service.' },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const [selectedChannels, setSelectedChannels] = useState<string[]>([]);
  const [sitePayment, setSitePayment] = useState<'onetime' | 'monthly'>('onetime');
  const [businessOption, setBusinessOption] = useState<'free-commitment' | 'discount' | null>(null);

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
                    to="/website/contact"
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
                    to="/website/contact"
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Globe className="w-4 h-4" />
              Option
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Site Vitrine Pro</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un site professionnel en 7 jours, optimisé pour convertir vos visiteurs en clients
            </p>
          </div>

          <div className="max-w-5xl mx-auto">

            {/* OFFRE BUSINESS - Options A/B */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-10 border-2 border-green-200">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-3">
                  <Shield className="w-4 h-4" />
                  Offre Plan Business
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Choisissez votre formule avantageuse
                </h3>
                <p className="text-gray-600">Réservé aux clients Plan Business (399€/mois)</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Option A: Offert avec engagement */}
                <button
                  onClick={() => setBusinessOption('free-commitment')}
                  className={`text-left bg-white rounded-xl p-6 border-2 transition-all ${
                    businessOption === 'free-commitment'
                      ? 'border-green-500 shadow-lg ring-1 ring-green-200'
                      : 'border-gray-200 hover:border-green-300'
                  }`}
                >
                  <div className="text-green-600 font-bold text-lg mb-3">Option A : Site OFFERT</div>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">0€</span>
                    <span className="text-gray-500 ml-2">(valeur 1 490€)</span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {['Site complet offert', 'Engagement 12 mois Business', 'Propriété 100% à vous'].map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-gray-700">
                    <span className="font-semibold">Résiliation anticipée :</span> facturation prorata
                    <div className="mt-1 text-gray-500">
                      Mois 1-3 : 1 490€ | Mois 4-6 : 1 200€ | Mois 7-9 : 800€ | Mois 10-11 : 400€
                    </div>
                  </div>
                </button>

                {/* Option B: -50% sans engagement */}
                <button
                  onClick={() => setBusinessOption('discount')}
                  className={`text-left bg-white rounded-xl p-6 border-2 transition-all ${
                    businessOption === 'discount'
                      ? 'border-blue-500 shadow-lg ring-1 ring-blue-200'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="text-blue-600 font-bold text-lg mb-3">Option B : Site -50%</div>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">745€</span>
                    <span className="text-gray-400 line-through ml-2">1 490€</span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {['Réduction 50% exclusive', 'Sans engagement de durée', 'Ou 62€/mois pendant 12 mois'].map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs text-gray-700">
                    Liberté totale &mdash; Résiliez votre plan Business quand vous voulez
                  </div>
                </button>
              </div>

              {businessOption && (
                <div className="mt-6 text-center">
                  <Link
                    to="/website/contact"
                    className="inline-block px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-xl transition-all text-lg"
                  >
                    {businessOption === 'free-commitment' ? 'Choisir le site offert' : 'Choisir le site à -50%'}
                  </Link>
                </div>
              )}

              <p className="mt-4 text-center text-sm text-gray-500">
                Option A pour les projets long terme &mdash; Option B pour plus de flexibilité
              </p>
            </div>

            {/* TARIF STANDARD (sans Business) */}
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">Tarif standard (sans Plan Business)</h3>
              </div>

              <div className="flex justify-center mb-6">
                <div className="inline-flex p-1 bg-white rounded-lg shadow">
                  <button
                    onClick={() => setSitePayment('onetime')}
                    className={`px-6 py-2 rounded-md font-medium transition-all ${sitePayment === 'onetime' ? 'bg-purple-600 text-white' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    Paiement unique
                  </button>
                  <button
                    onClick={() => setSitePayment('monthly')}
                    className={`px-6 py-2 rounded-md font-medium transition-all ${sitePayment === 'monthly' ? 'bg-purple-600 text-white' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    Mensuel
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-8">
                  {sitePayment === 'onetime' ? (
                    <>
                      <div className="text-5xl font-bold text-gray-900 mb-1">1 490€</div>
                      <div className="text-gray-600">TTC paiement unique</div>
                      <div className="text-sm text-gray-500 mt-1">+ 50€/an hébergement après 1 an</div>
                    </>
                  ) : (
                    <>
                      <div className="text-5xl font-bold text-gray-900 mb-1">+99€</div>
                      <div className="text-gray-600">/mois (engagement 18 mois)</div>
                      <div className="text-sm text-gray-500 mt-1">Total : 1 782€ &mdash; hébergement inclus</div>
                    </>
                  )}
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <ul className="space-y-3">
                    {[
                      '5 pages professionnelles',
                      'Design responsive moderne',
                      'Contenu rédigé par IA',
                      'SEO optimisé dès le lancement',
                      'Hébergement + domaine .fr 1 an inclus',
                      'Formation 1h',
                      ...(sitePayment === 'monthly' ? ['2 mises à jour/mois incluses', 'Support technique inclus'] : []),
                    ].map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/website/contact"
                  className="mt-6 block text-center px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-xl transition-all text-lg"
                >
                  Commander mon site
                </Link>

                <p className="text-center text-sm text-gray-500 mt-4">Délai : 7-10 jours ouvrés</p>
              </div>

              {/* Options */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'Pages supplémentaires', price: '+150€/page' },
                  { name: 'E-commerce (catalogue)', price: '+990€' },
                  { name: 'Blog intégré', price: '+490€' },
                  { name: 'Multilingue (2 langues)', price: '+690€' },
                ].map(opt => (
                  <div key={opt.name} className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="font-semibold text-gray-900">{opt.name}</div>
                    <div className="text-purple-600 font-bold">{opt.price}</div>
                  </div>
                ))}
              </div>
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
              Notre équipe est là pour vous aider à choisir la meilleure formule
            </p>
            <Link
              to="/website/contact"
              className="inline-block px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-xl transition-all text-lg"
            >
              Réserver une démo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
