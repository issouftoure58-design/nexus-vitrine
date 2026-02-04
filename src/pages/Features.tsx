import { Link } from 'wouter';
import { Calendar, Bot, MessageCircle, CreditCard, BarChart3, Shield, Smartphone, Globe, Users, Megaphone } from 'lucide-react';

const modules = [
  { icon: Calendar, name: 'Reservations', desc: 'Gestion complete des rendez-vous avec calendrier intelligent, rappels SMS automatiques et gestion multi-jours.' },
  { icon: Bot, name: 'Agent IA Halimah', desc: 'Assistante virtuelle qui accueille vos clients, repond a leurs questions et les aide a reserver 24h/24.' },
  { icon: MessageCircle, name: 'Chat & WhatsApp', desc: 'Communication multicanal : chat web, WhatsApp Business, SMS. Tout centralise dans un seul dashboard.' },
  { icon: Smartphone, name: 'Telephone IA', desc: 'Standard telephonique intelligent avec prise de rendez-vous vocale et synthese vocale naturelle.' },
  { icon: CreditCard, name: 'Paiements', desc: 'Stripe et PayPal integres. Acomptes en ligne, suivi des paiements, facturation automatique.' },
  { icon: BarChart3, name: 'Analytics', desc: 'Tableau de bord en temps reel : chiffre d\'affaires, taux de conversion, satisfaction client.' },
  { icon: Shield, name: 'Sentinel', desc: 'Surveillance 24/7 de votre plateforme : performance, securite, anomalies detectees automatiquement.' },
  { icon: Globe, name: 'SEO & Site Web', desc: 'Site vitrine professionnel genere automatiquement, optimise pour le referencement Google.' },
  { icon: Users, name: 'CRM', desc: 'Gestion de la relation client : historique, preferences, segmentation, campagnes ciblees.' },
  { icon: Megaphone, name: 'Marketing', desc: 'Campagnes email/SMS, reseaux sociaux, generation de contenu IA, planification automatique.' },
];

export default function Features() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Fonctionnalites</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Plus de 15 modules metier pour gerer votre activite de A a Z.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((m, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-xl border hover:shadow-md transition">
                <div className="flex-shrink-0">
                  <m.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{m.name}</h3>
                  <p className="text-gray-600">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Convaincu ?</h2>
          <Link href="/pricing">
            <span className="inline-flex items-center px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition">
              Voir les tarifs
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
