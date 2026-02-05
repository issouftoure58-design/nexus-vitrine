import { useState } from 'react';
import { Link } from 'wouter';

// Mock data pour la démo
const MOCK_STATS = {
  revenue: 4580,
  reservations: 47,
  fillRate: 87,
  newClients: 12
};

const MOCK_RESERVATIONS = [
  { id: 1, client: 'Marie Dupont', service: 'Tresses africaines', date: '2025-02-06', heure: '10:00', statut: 'confirme', prix: 85 },
  { id: 2, client: 'Aminata Diallo', service: 'Locks entretien', date: '2025-02-06', heure: '14:00', statut: 'confirme', prix: 65 },
  { id: 3, client: 'Sophie Martin', service: 'Soins hydratants', date: '2025-02-06', heure: '16:30', statut: 'en_attente', prix: 45 },
  { id: 4, client: 'Fatou Sow', service: 'Coupe + Brushing', date: '2025-02-07', heure: '09:00', statut: 'confirme', prix: 55 },
  { id: 5, client: 'Claire Petit', service: 'Coloration', date: '2025-02-07', heure: '11:00', statut: 'en_attente', prix: 75 },
];

const MOCK_CHAT = [
  { role: 'assistant', content: 'Bonjour ! Je suis Halimah, votre assistante. Comment puis-je vous aider ?' },
  { role: 'user', content: 'Je voudrais prendre rendez-vous pour des tresses samedi' },
  { role: 'assistant', content: 'Bien sûr ! J\'ai vérifié les disponibilités pour samedi. Je peux vous proposer 10h00, 14h00 ou 16h30. Quelle heure vous conviendrait ?' },
  { role: 'user', content: '14h ce serait parfait' },
];

function StatCard({ label, value, suffix = '', trend }: { label: string; value: number | string; suffix?: string; trend?: number }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
      <p className="text-sm text-white/60 mb-1">{label}</p>
      <p className="text-2xl font-bold text-white">
        {typeof value === 'number' ? value.toLocaleString('fr-FR') : value}{suffix}
      </p>
      {trend !== undefined && (
        <p className={`text-xs mt-1 ${trend >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
          {trend >= 0 ? '+' : ''}{trend}% vs mois dernier
        </p>
      )}
    </div>
  );
}

function StatusBadge({ statut }: { statut: string }) {
  const styles: Record<string, string> = {
    confirme: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    en_attente: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    annule: 'bg-red-500/20 text-red-300 border-red-500/30',
  };
  const labels: Record<string, string> = {
    confirme: 'Confirmé',
    en_attente: 'En attente',
    annule: 'Annulé',
  };
  return (
    <span className={`px-2 py-1 text-xs rounded-full border ${styles[statut] || styles.en_attente}`}>
      {labels[statut] || statut}
    </span>
  );
}

export default function Demo() {
  const [activeTab, setActiveTab] = useState<'overview' | 'reservations' | 'agent'>('overview');

  const tabs = [
    { id: 'overview' as const, label: 'Vue d\'ensemble', icon: '📊' },
    { id: 'reservations' as const, label: 'Réservations', icon: '📅' },
    { id: 'agent' as const, label: 'Agent IA', icon: '🤖' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <span className="text-xl font-bold text-white cursor-pointer hover:text-white/80 transition">
              NEXUS
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-medium rounded-full border border-amber-500/30">
              MODE DÉMO
            </span>
            <Link href="/pricing">
              <span className="px-4 py-2 bg-white text-slate-900 text-sm font-medium rounded-lg hover:bg-white/90 transition cursor-pointer">
                Voir les tarifs
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 text-sm font-medium transition border-b-2 -mb-[1px] ${
                  activeTab === tab.id
                    ? 'text-white border-indigo-500'
                    : 'text-white/50 border-transparent hover:text-white/80'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-white mb-1">Tableau de bord</h1>
              <p className="text-white/50 text-sm">Données de démonstration - Février 2025</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard label="Chiffre d'affaires" value={MOCK_STATS.revenue} suffix="€" trend={12} />
              <StatCard label="Réservations" value={MOCK_STATS.reservations} trend={8} />
              <StatCard label="Taux de remplissage" value={MOCK_STATS.fillRate} suffix="%" trend={5} />
              <StatCard label="Nouveaux clients" value={MOCK_STATS.newClients} trend={15} />
            </div>

            {/* Mini Chart Placeholder */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-4">Évolution du CA</h3>
              <div className="flex items-end gap-2 h-32">
                {[65, 72, 58, 80, 95, 87, 92].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t"
                      style={{ height: `${h}%` }}
                    />
                    <span className="text-[10px] text-white/40">
                      {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-4">Activité récente</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                  <span className="text-white/70">Nouvelle réservation de Marie Dupont</span>
                  <span className="text-white/40 ml-auto">Il y a 5 min</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span className="text-white/70">Paiement reçu - 85€</span>
                  <span className="text-white/40 ml-auto">Il y a 12 min</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-2 h-2 bg-amber-400 rounded-full" />
                  <span className="text-white/70">Rappel SMS envoyé à Aminata Diallo</span>
                  <span className="text-white/40 ml-auto">Il y a 1h</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Reservations Tab */}
        {activeTab === 'reservations' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-white mb-1">Réservations</h1>
                <p className="text-white/50 text-sm">5 rendez-vous à venir</p>
              </div>
              <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-500 transition">
                + Nouveau RDV
              </button>
            </div>

            {/* Reservations Table */}
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left text-xs font-medium text-white/50 px-4 py-3">CLIENT</th>
                      <th className="text-left text-xs font-medium text-white/50 px-4 py-3">SERVICE</th>
                      <th className="text-left text-xs font-medium text-white/50 px-4 py-3">DATE</th>
                      <th className="text-left text-xs font-medium text-white/50 px-4 py-3">HEURE</th>
                      <th className="text-left text-xs font-medium text-white/50 px-4 py-3">STATUT</th>
                      <th className="text-right text-xs font-medium text-white/50 px-4 py-3">PRIX</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MOCK_RESERVATIONS.map((rdv) => (
                      <tr key={rdv.id} className="border-b border-white/5 hover:bg-white/5 transition">
                        <td className="px-4 py-3">
                          <span className="text-white font-medium text-sm">{rdv.client}</span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-white/70 text-sm">{rdv.service}</span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-white/70 text-sm">
                            {new Date(rdv.date).toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' })}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-white/70 text-sm">{rdv.heure}</span>
                        </td>
                        <td className="px-4 py-3">
                          <StatusBadge statut={rdv.statut} />
                        </td>
                        <td className="px-4 py-3 text-right">
                          <span className="text-white font-medium text-sm">{rdv.prix}€</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Agent IA Tab */}
        {activeTab === 'agent' && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-white mb-1">Agent IA</h1>
              <p className="text-white/50 text-sm">Votre assistant virtuel qui répond 24h/24</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Chat Preview */}
              <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                <div className="px-4 py-3 border-b border-white/10 flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-white/70 text-sm font-medium">Conversation en direct</span>
                </div>
                <div className="p-4 space-y-4 h-80 overflow-y-auto">
                  {MOCK_CHAT.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                          msg.role === 'user'
                            ? 'bg-indigo-600 text-white'
                            : 'bg-white/10 text-white/90'
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-3 border-t border-white/10">
                  <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                    <input
                      type="text"
                      placeholder="Tapez votre message..."
                      className="flex-1 bg-transparent text-white text-sm outline-none placeholder:text-white/30"
                      disabled
                    />
                    <button className="p-1.5 bg-indigo-600 rounded-lg text-white" disabled>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Agent Stats */}
              <div className="space-y-4">
                <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                  <h3 className="text-white font-semibold mb-4">Performances de l'agent</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white/60">Taux de conversion</span>
                        <span className="text-white font-medium">73%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full">
                        <div className="h-2 bg-emerald-500 rounded-full" style={{ width: '73%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white/60">Satisfaction client</span>
                        <span className="text-white font-medium">94%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full">
                        <div className="h-2 bg-indigo-500 rounded-full" style={{ width: '94%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white/60">Temps de réponse moyen</span>
                        <span className="text-white font-medium">1.2s</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full">
                        <div className="h-2 bg-amber-500 rounded-full" style={{ width: '88%' }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                  <h3 className="text-white font-semibold mb-3">Capacités</h3>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-400">✓</span>
                      Prise de rendez-vous automatique
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-400">✓</span>
                      Réponses aux questions fréquentes
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-400">✓</span>
                      Rappels et confirmations SMS
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-400">✓</span>
                      Support multilingue
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-400">✓</span>
                      Intégration téléphone et WhatsApp
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* CTA Footer */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white">Prêt à automatiser votre business ?</h3>
              <p className="text-white/50 text-sm">Essai gratuit 14 jours, sans carte bancaire</p>
            </div>
            <div className="flex gap-3">
              <Link href="/pricing">
                <span className="px-5 py-2.5 bg-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition border border-white/10 cursor-pointer">
                  Voir les tarifs
                </span>
              </Link>
              <Link href="/contact">
                <span className="px-5 py-2.5 bg-white text-slate-900 text-sm font-medium rounded-lg hover:bg-white/90 transition cursor-pointer">
                  Créer mon compte gratuit
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
