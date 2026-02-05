import { Link } from 'wouter';
import {
  Bot, Zap, Shield, TrendingUp, Calendar,
  ArrowRight, Check, Star, Sparkles, X, Clock,
  CreditCard, Phone, MessageSquare
} from 'lucide-react';
import AnimatedHero from '../components/AnimatedHero';
import '../components/AnimatedHero.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Hero Animé Cinématique - Full viewport */}
      <AnimatedHero />

      {/* Séparateur visuel vers contenu blanc */}
      <div className="relative -mt-1">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>

      {/* Temoignage Fatou - Section Vedette */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Temoignage */}
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(s => (
                    <Star key={s} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 mb-6 leading-relaxed">
                  "Depuis NEXUS, je gagne 15h/semaine. Halimah gere mes reservations 24/7,
                  je peux enfin me concentrer sur mes clientes."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    F
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">Fatou</div>
                    <div className="text-gray-600">Fat's Hair-Afro · Franconville</div>
                  </div>
                </div>
              </div>

              {/* Stats Fatou */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-1">+40%</div>
                  <div className="text-sm text-gray-600">reservations</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-1">-15h</div>
                  <div className="text-sm text-gray-600">par semaine</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-1">0</div>
                  <div className="text-sm text-gray-600">RDV manque</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avant / Apres (version compacte) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              La difference NEXUS
            </h2>
            <p className="text-xl text-gray-600">
              Passez du chaos a l'automatisation en quelques clics
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Avant */}
            <div className="bg-white rounded-2xl p-8 border-2 border-red-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <X className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Avant NEXUS</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { icon: Phone, text: 'Telephone qui sonne pendant les prestations' },
                  { icon: Calendar, text: 'Oublis de RDV et annulations de derniere minute' },
                  { icon: Clock, text: 'Gestion manuelle de l\'agenda' },
                  { icon: CreditCard, text: 'Paiements en especes uniquement' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-red-400" />
                    </div>
                    <span className="text-gray-600">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Apres */}
            <div className="bg-white rounded-2xl p-8 border-2 border-green-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Avec NEXUS</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { icon: Bot, text: 'Reservations automatiques 24h/24, 7j/7' },
                  { icon: MessageSquare, text: 'Rappels automatiques par SMS et WhatsApp' },
                  { icon: Calendar, text: 'Agenda synchronise en temps reel' },
                  { icon: CreditCard, text: 'Paiements en ligne securises (Stripe)' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Demo interactive
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Testez NEXUS en 2 minutes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explorez le dashboard, creez des reservations, discutez avec l'IA - le tout sans inscription
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-4 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <span className="text-white/60 text-sm ml-4">nexus-vitrine.onrender.com/demo</span>
            </div>
            <div className="p-8 lg:p-12 bg-gradient-to-br from-slate-900 to-slate-800">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/10">
                  <p className="text-white/60 text-sm mb-1">Chiffre d'affaires</p>
                  <p className="text-3xl font-bold text-white">4 580€</p>
                  <p className="text-emerald-400 text-sm">+12% ce mois</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/10">
                  <p className="text-white/60 text-sm mb-1">Reservations</p>
                  <p className="text-3xl font-bold text-white">47</p>
                  <p className="text-emerald-400 text-sm">+8% ce mois</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/10">
                  <p className="text-white/60 text-sm mb-1">Taux de remplissage</p>
                  <p className="text-3xl font-bold text-white">87%</p>
                  <p className="text-emerald-400 text-sm">+5% ce mois</p>
                </div>
              </div>
              <div className="text-center">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-cyan-500/25 transition-all hover:scale-105"
                >
                  Lancer la demo interactive
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tout ce dont vous avez besoin
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              NEXUS combine puissance de l'IA et simplicite d'utilisation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Bot, title: 'Agent IA Client', desc: "Repond a vos clients 24h/24, prend les RDV, gere les annulations. Par telephone, WhatsApp ou chat." },
              { icon: Sparkles, title: 'Assistant Back-Office', desc: "Analysez vos performances, gerez vos clients, optimisez votre planning. En langage naturel." },
              { icon: Calendar, title: 'Gestion Complete', desc: "Agenda, clients, services, paiements, analytics. Tout centralise dans une interface moderne." },
              { icon: TrendingUp, title: 'Analytics Intelligents', desc: "KPIs temps reel, comparaisons, insights automatiques, exports Excel/PDF. Pilotez votre croissance." },
              { icon: Zap, title: 'Installation Express', desc: "Pret en 30 minutes. Configuration simple, formation incluse. Vous vendez le jour meme." },
              { icon: Shield, title: 'Securite Maximale', desc: "Multi-tenant isole, donnees cryptees, RGPD conforme. Vos donnees sont protegees." },
            ].map((f, i) => (
              <div key={i} className="group p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700 transition"
            >
              Voir tous les modules
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Chiffres Cles */}
      <section className="py-24 bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">NEXUS en chiffres</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: '30 min', label: 'Installation' },
              { val: '24/7', label: 'Disponibilite IA' },
              { val: '-88%', label: 'Couts IA optimises' },
              { val: '99.9%', label: 'Uptime garanti' },
            ].map((s, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl md:text-5xl font-bold mb-2">{s.val}</div>
                <div className="text-white/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Autres temoignages */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-xl text-gray-600">
              Rejoignez les entrepreneurs qui ont revolutionne leur business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Installation en 20 minutes, premiers RDV IA le jour meme. L'interface est intuitive, mes clients adorent !", name: 'Amadou', biz: 'Salon · Paris 18e', gradient: 'from-blue-400 to-cyan-400', initial: 'A' },
              { text: "Le dashboard analytics m'a permis d'identifier mes heures creuses et d'optimiser mon planning. +40% de CA en 2 mois.", name: 'Safiya', biz: 'Institut · Argenteuil', gradient: 'from-green-400 to-emerald-400', initial: 'S' },
              { text: "Fini les appels en pleine coupe ! Halimah gere tout. Mes clientes recoivent les confirmations instantanement.", name: 'Khadija', biz: 'Coiffeuse · Sarcelles', gradient: 'from-purple-400 to-pink-400', initial: 'K' },
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(s => (
                    <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${t.gradient} rounded-full flex items-center justify-center text-white font-bold`}>
                    {t.initial}
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.biz}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Pret a transformer votre business ?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Testez NEXUS maintenant. Sans engagement, sans carte bancaire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold text-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Voir la demo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all"
            >
              Nous contacter
            </Link>
          </div>
          <p className="text-gray-500 mt-6">
            Installation en 30 minutes · Support inclus · Essai gratuit 14 jours
          </p>
        </div>
      </section>
    </div>
  );
}
