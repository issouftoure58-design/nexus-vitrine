import { Link } from 'wouter';
import {
  Bot, Zap, Shield, TrendingUp, Calendar,
  ArrowRight, Check, Star, Sparkles
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm mb-8">
              <Sparkles className="w-4 h-4" />
              <span>L'IA qui fait tourner votre business</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              NEXUS
              <br />
              <span className="bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">
                Votre Business en Autopilote
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              Des agents IA qui gèrent vos réservations, répondent à vos clients
              et optimisent votre activité 24h/24. Sans effort.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all hover:scale-105 shadow-xl"
              >
                Démarrer Gratuitement
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all"
              >
                Voir les Tarifs
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>Sans carte bancaire</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>Installation 30 min</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>Support 7j/7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#ffffff"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            />
          </svg>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              Tout ce dont vous avez besoin
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              NEXUS combine puissance de l'IA et simplicité d'utilisation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Bot, title: 'Agent IA Client', desc: "Répond à vos clients 24h/24, prend les RDV, gère les annulations. Par téléphone, WhatsApp ou chat.", color: 'cyan' },
              { icon: Sparkles, title: 'Assistant Back-Office', desc: "Analysez vos performances, gérez vos clients, optimisez votre planning. En langage naturel.", color: 'purple' },
              { icon: Calendar, title: 'Gestion Complète', desc: "Agenda, clients, services, paiements, analytics. Tout centralisé dans une interface moderne.", color: 'blue' },
              { icon: TrendingUp, title: 'Analytics Intelligents', desc: "KPIs temps réel, comparaisons, insights automatiques, exports Excel/PDF. Pilotez votre croissance.", color: 'green' },
              { icon: Zap, title: 'Installation Express', desc: "Prêt en 30 minutes. Configuration simple, formation incluse. Vous vendez le jour même.", color: 'yellow' },
              { icon: Shield, title: 'Sécurité Maximale', desc: "Multi-tenant isolé, données cryptées, RGPD conforme. Vos données sont protégées.", color: 'red' },
            ].map((f, i) => (
              <div key={i} className="group p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              Ils nous font confiance
            </h2>
            <p className="text-xl text-gray-600">
              Rejoignez les entrepreneurs qui ont révolutionné leur business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { text: "Halimah gère maintenant 80% de mes prises de RDV. Je peux enfin me concentrer sur mon cœur de métier. Un gain de temps incroyable !", name: 'Fatou', biz: "Fat's Hair-Afro · Franconville", gradient: 'from-purple-400 to-pink-400', initial: 'F' },
              { text: "Installation en 20 minutes, premiers RDV IA le jour même. L'interface est intuitive, mes clients adorent !", name: 'Amadou', biz: 'Salon · Paris 18e', gradient: 'from-blue-400 to-cyan-400', initial: 'A' },
              { text: "Le dashboard analytics m'a permis d'identifier mes heures creuses et d'optimiser mon planning. +40% de CA en 2 mois.", name: 'Safiya', biz: 'Institut · Argenteuil', gradient: 'from-green-400 to-emerald-400', initial: 'S' },
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

      {/* Stats */}
      <section className="py-24 bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: '80%', label: 'RDV automatisés' },
              { val: '30min', label: 'Installation moyenne' },
              { val: '24/7', label: 'Disponibilité IA' },
              { val: '+40%', label: 'CA moyen clients' },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{s.val}</div>
                <div className="text-white/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
            Prêt à transformer votre business ?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Rejoignez NEXUS aujourd'hui. Sans engagement, sans carte bancaire.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold text-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Démarrer Gratuitement
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-gray-500 mt-6">
            Installation en 30 minutes · Support inclus · Essai gratuit 14 jours
          </p>
        </div>
      </section>
    </div>
  );
}
