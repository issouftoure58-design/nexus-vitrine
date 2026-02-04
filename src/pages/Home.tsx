import { Link } from 'wouter';
import { Bot, Globe, Shield, Users, Zap, BarChart3 } from 'lucide-react';

const features = [
  { icon: Bot, title: 'IA Conversationnelle', desc: 'Assistante virtuelle 24/7 pour vos clients' },
  { icon: Globe, title: 'Site Web Pro', desc: 'Site vitrine optimise SEO genere automatiquement' },
  { icon: Shield, title: 'Sentinel Monitoring', desc: 'Surveillance temps reel de votre activite' },
  { icon: Users, title: 'Multi-tenant', desc: 'Chaque client a son espace isole et securise' },
  { icon: Zap, title: 'Automatisation', desc: 'SMS, emails, rappels automatiques' },
  { icon: BarChart3, title: 'Analytics', desc: 'Tableau de bord complet avec metriques cles' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              La plateforme SaaS
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> universelle</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              NEXUS propulse votre business avec une suite complete : reservations, IA, paiements, marketing, et bien plus. Tout secteur, toute taille.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/pricing">
                <span className="inline-flex items-center px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition">
                  Voir les tarifs
                </span>
              </Link>
              <Link href="/contact">
                <span className="inline-flex items-center px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition">
                  Nous contacter
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Tout ce dont vous avez besoin</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <f.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Pret a transformer votre business ?</h2>
          <p className="text-gray-600 mb-8">Rejoignez les entreprises qui utilisent NEXUS pour automatiser et developper leur activite.</p>
          <Link href="/pricing">
            <span className="inline-flex items-center px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition">
              Commencer maintenant
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
