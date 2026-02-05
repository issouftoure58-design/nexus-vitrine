import { useState, useRef, useEffect } from 'react';
import { Link } from 'wouter';

// ═══════════════════════════════════════════════════════════
// DONNÉES DÉMO
// ═══════════════════════════════════════════════════════════

const DEMO_RESERVATIONS = [
  { id: 1, time: '09:00', client: 'Marie Dubois', service: 'Coupe classique', phone: '06 12 34 56 78', status: 'confirmed', price: 25 },
  { id: 2, time: '10:30', client: 'Jean Martin', service: 'Coupe + Barbe', phone: '06 98 76 54 32', status: 'confirmed', price: 35 },
  { id: 3, time: '11:30', client: 'Lucas Petit', service: 'Coupe enfant', phone: '07 55 44 33 22', status: 'confirmed', price: 15 },
  { id: 4, time: '14:30', client: 'Sophie Bernard', service: 'Coupe + Coloration', phone: '07 11 22 33 44', status: 'pending', price: 75 },
  { id: 5, time: '16:00', client: 'Emma Leroy', service: 'Coloration', phone: '06 77 88 99 00', status: 'confirmed', price: 50 },
  { id: 6, time: '17:30', client: 'Thomas Moreau', service: 'Coupe classique', phone: '07 22 33 44 55', status: 'pending', price: 25 },
];

const DEMO_CA_DATA = [
  { date: 'Lun', amount: 180 },
  { date: 'Mar', amount: 245 },
  { date: 'Mer', amount: 320 },
  { date: 'Jeu', amount: 290 },
  { date: 'Ven', amount: 410 },
  { date: 'Sam', amount: 580 },
  { date: 'Dim', amount: 0 },
];

const DEMO_TOP_SERVICES = [
  { name: 'Coupe classique', count: 45, percent: 100 },
  { name: 'Coupe + Barbe', count: 32, percent: 71 },
  { name: 'Coloration', count: 18, percent: 40 },
  { name: 'Coupe enfant', count: 12, percent: 27 },
];

const INITIAL_MESSAGES = [
  { id: 1, role: 'assistant', text: "Bonjour ! Je suis l'assistant NEXUS. Comment puis-je vous aider aujourd'hui ?" },
];

// ═══════════════════════════════════════════════════════════
// GÉNÉRATEUR DE RÉPONSES IA
// ═══════════════════════════════════════════════════════════

const generateDemoResponse = (input: string): string => {
  const lower = input.toLowerCase();

  if (lower.includes('réserv') || lower.includes('rdv') || lower.includes('rendez')) {
    return `Bien sûr ! Je peux vous aider à réserver.

Nous proposons :
• Coupe classique - 25€ (30min)
• Coupe + barbe - 35€ (45min)
• Coupe enfant - 15€ (20min)
• Coloration - 50€ (1h30)

Quelle prestation vous intéresse ?`;
  }

  if (lower.includes('service') || lower.includes('prestation') || lower.includes('propose')) {
    return `Voici nos services :

✂️ Coupe classique - 25€
✂️ Coupe + barbe - 35€
👶 Coupe enfant - 15€
🎨 Coloration - 50€
💇 Coupe + Coloration - 75€

Tous nos tarifs incluent le shampoing. Souhaitez-vous réserver ?`;
  }

  if (lower.includes('horaire') || lower.includes('heure') || lower.includes('ouvert')) {
    return `Nous sommes ouverts :

📅 Lundi - Vendredi : 9h - 19h
📅 Samedi : 9h - 18h
📅 Dimanche : Fermé

Souhaitez-vous réserver un créneau ?`;
  }

  if (lower.includes('prix') || lower.includes('tarif') || lower.includes('coût') || lower.includes('combien')) {
    return `Nos tarifs :

• Coupe classique : 25€
• Coupe + barbe : 35€
• Coupe enfant : 15€
• Coloration : 50€
• Coupe + Coloration : 75€

Le shampoing est inclus dans toutes nos prestations.`;
  }

  if (lower.includes('annul') || lower.includes('modif') || lower.includes('chang')) {
    return `Pour modifier ou annuler un rendez-vous :

• Annulation gratuite jusqu'à 24h avant
• Modification possible selon disponibilités
• Contactez-nous par téléphone ou message

Avez-vous un rendez-vous à modifier ?`;
  }

  if (lower.includes('merci') || lower.includes('super') || lower.includes('parfait')) {
    return `Avec plaisir ! N'hésitez pas si vous avez d'autres questions.

À bientôt ! 👋`;
  }

  if (lower.includes('bonjour') || lower.includes('salut') || lower.includes('hello')) {
    return `Bonjour ! Bienvenue chez nous.

Comment puis-je vous aider aujourd'hui ?
• 📅 Réserver un rendez-vous
• ✂️ Découvrir nos services
• 💰 Consulter nos tarifs`;
  }

  // Réponse générique
  return `Je suis là pour vous aider ! Vous pouvez me demander :

📅 Réserver un rendez-vous
✂️ Voir nos services et tarifs
🕐 Connaître nos horaires
🔄 Modifier un rendez-vous

Comment puis-je vous aider ?`;
};

// ═══════════════════════════════════════════════════════════
// COMPOSANTS
// ═══════════════════════════════════════════════════════════

function StatCard({ icon, title, value, subtitle, trend }: {
  icon: string;
  title: string;
  value: string;
  subtitle: string;
  trend?: 'up' | 'down';
}) {
  return (
    <div className="bg-white/5 backdrop-blur rounded-xl p-5 border border-white/10">
      <div className="flex items-center gap-2 text-white/60 text-sm mb-2">
        <span>{icon}</span>
        <span>{title}</span>
      </div>
      <p className="text-2xl font-bold text-white mb-1">{value}</p>
      <p className={`text-sm ${trend === 'up' ? 'text-emerald-400' : trend === 'down' ? 'text-red-400' : 'text-white/50'}`}>
        {subtitle}
      </p>
    </div>
  );
}

function SimpleChart({ data }: { data: typeof DEMO_CA_DATA }) {
  const max = Math.max(...data.map(d => d.amount));
  return (
    <div className="flex items-end gap-2 h-40">
      {data.map((d, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-2">
          <div className="w-full flex flex-col justify-end h-32">
            <div
              className="w-full bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t transition-all duration-500"
              style={{ height: `${(d.amount / max) * 100}%`, minHeight: d.amount > 0 ? '8px' : '0' }}
            />
          </div>
          <span className="text-[10px] text-white/40">{d.date}</span>
        </div>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// MODE CLIENT - Chat interactif
// ═══════════════════════════════════════════════════════════

function ClientMode() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!userInput.trim()) return;

    const newMessage = { id: Date.now(), role: 'user' as const, text: userInput };
    setMessages(prev => [...prev, newMessage]);
    setUserInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateDemoResponse(userInput);
      setMessages(prev => [...prev, { id: Date.now() + 1, role: 'assistant' as const, text: response }]);
      setIsTyping(false);
    }, 800 + Math.random() * 700);
  };

  const handleQuickSend = (text: string) => {
    setUserInput(text);
    setTimeout(() => {
      const newMessage = { id: Date.now(), role: 'user' as const, text };
      setMessages(prev => [...prev, newMessage]);
      setIsTyping(true);

      setTimeout(() => {
        const response = generateDemoResponse(text);
        setMessages(prev => [...prev, { id: Date.now() + 1, role: 'assistant' as const, text: response }]);
        setIsTyping(false);
      }, 800 + Math.random() * 700);
    }, 100);
    setUserInput('');
  };

  return (
    <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {/* Chat Interface */}
      <div className="lg:col-span-2 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 px-5 py-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl">
            🤖
          </div>
          <div>
            <h3 className="text-white font-semibold">Assistant NEXUS</h3>
            <span className="text-cyan-100 text-sm flex items-center gap-1">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              En ligne
            </span>
          </div>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm whitespace-pre-line ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-br-md'
                    : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-md'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white text-gray-500 px-4 py-3 rounded-2xl rounded-bl-md shadow-sm border border-gray-100">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestions */}
        <div className="px-4 py-2 bg-white border-t border-gray-100 flex gap-2 overflow-x-auto">
          <button
            onClick={() => handleQuickSend("Je voudrais réserver un rendez-vous")}
            className="px-3 py-1.5 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium hover:bg-cyan-100 transition whitespace-nowrap"
          >
            📅 Réserver
          </button>
          <button
            onClick={() => handleQuickSend("Quels sont vos services ?")}
            className="px-3 py-1.5 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium hover:bg-cyan-100 transition whitespace-nowrap"
          >
            ✂️ Services
          </button>
          <button
            onClick={() => handleQuickSend("Quels sont vos horaires ?")}
            className="px-3 py-1.5 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium hover:bg-cyan-100 transition whitespace-nowrap"
          >
            🕐 Horaires
          </button>
          <button
            onClick={() => handleQuickSend("Quels sont vos tarifs ?")}
            className="px-3 py-1.5 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium hover:bg-cyan-100 transition whitespace-nowrap"
          >
            💰 Tarifs
          </button>
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex gap-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Tapez votre message..."
              className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <button
              onClick={handleSend}
              disabled={!userInput.trim()}
              className="px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-medium hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Envoyer
            </button>
          </div>
        </div>
      </div>

      {/* Context Panel */}
      <div className="space-y-4">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white">
          <h4 className="font-bold mb-3 flex items-center gap-2">
            <span>🎯</span> Scénario de démo
          </h4>
          <p className="text-white/70 text-sm mb-4">
            Vous êtes un client qui découvre le chatbot d'un salon de coiffure équipé de NEXUS.
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2 text-white/80">
              <span className="text-emerald-400">✓</span>
              Demandez les services disponibles
            </li>
            <li className="flex items-center gap-2 text-white/80">
              <span className="text-emerald-400">✓</span>
              Renseignez-vous sur les tarifs
            </li>
            <li className="flex items-center gap-2 text-white/80">
              <span className="text-emerald-400">✓</span>
              Demandez les horaires d'ouverture
            </li>
            <li className="flex items-center gap-2 text-white/80">
              <span className="text-emerald-400">✓</span>
              Essayez de réserver un RDV
            </li>
          </ul>
        </div>

        <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-5">
          <h4 className="font-bold text-cyan-900 mb-2">💡 Le saviez-vous ?</h4>
          <p className="text-cyan-700 text-sm">
            Avec NEXUS, ce chatbot peut aussi prendre des réservations par <strong>téléphone</strong> et <strong>WhatsApp</strong>, 24h/24 et 7j/7.
          </p>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// MODE ADMIN - Dashboard
// ═══════════════════════════════════════════════════════════

function AdminMode() {
  const [tab, setTab] = useState<'dashboard' | 'reservations' | 'analytics'>('dashboard');

  return (
    <div className="flex max-w-7xl mx-auto bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
      {/* Sidebar */}
      <div className="w-64 bg-slate-950 p-4 flex flex-col">
        <div className="flex items-center gap-3 mb-8 px-2">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
            N
          </div>
          <div>
            <span className="text-white font-bold">NEXUS</span>
            <span className="text-cyan-400 text-xs block">Pro Dashboard</span>
          </div>
        </div>

        <nav className="space-y-1 flex-1">
          <button
            onClick={() => setTab('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition ${
              tab === 'dashboard' ? 'bg-cyan-600 text-white' : 'text-white/60 hover:bg-white/5 hover:text-white'
            }`}
          >
            <span>📊</span>
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => setTab('reservations')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition ${
              tab === 'reservations' ? 'bg-cyan-600 text-white' : 'text-white/60 hover:bg-white/5 hover:text-white'
            }`}
          >
            <span>📅</span>
            <span>Réservations</span>
          </button>
          <button
            onClick={() => setTab('analytics')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition ${
              tab === 'analytics' ? 'bg-cyan-600 text-white' : 'text-white/60 hover:bg-white/5 hover:text-white'
            }`}
          >
            <span>📈</span>
            <span>Analytics</span>
          </button>
        </nav>

        <div className="mt-auto pt-4 border-t border-white/10">
          <div className="px-3 py-2 bg-amber-500/20 rounded-lg border border-amber-500/30">
            <p className="text-amber-300 text-xs font-medium">Mode Démo</p>
            <p className="text-amber-200/60 text-[10px]">Données fictives</p>
          </div>
          <Link href="/pricing">
            <span className="mt-3 block w-full text-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:shadow-lg transition">
              Essayer gratuitement →
            </span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto max-h-[600px]">
        {tab === 'dashboard' && <DashboardTab />}
        {tab === 'reservations' && <ReservationsTab />}
        {tab === 'analytics' && <AnalyticsTab />}
      </div>
    </div>
  );
}

function DashboardTab() {
  const todayTotal = DEMO_RESERVATIONS.filter(r => r.status === 'confirmed').reduce((sum, r) => sum + r.price, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white mb-1">Vue d'ensemble</h1>
        <p className="text-white/50 text-sm">Bienvenue dans votre dashboard NEXUS</p>
      </div>

      {/* Next Appointment */}
      <div className="bg-white/5 rounded-xl p-5 border border-white/10">
        <h3 className="text-white/60 text-sm mb-3">📅 Prochain rendez-vous</h3>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
            S
          </div>
          <div className="flex-1">
            <p className="text-white font-semibold">Sophie Bernard</p>
            <p className="text-white/60 text-sm">Coupe + Coloration</p>
          </div>
          <div className="text-right">
            <p className="text-cyan-400 font-medium">14:30</p>
            <p className="text-white/40 text-sm">Aujourd'hui</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon="💰" title="CA du jour" value={`${todayTotal}€`} subtitle="5 RDV confirmés" />
        <StatCard icon="📅" title="CA du mois" value="4 580€" subtitle="+18% vs mois dernier" trend="up" />
        <StatCard icon="✅" title="RDV confirmés" value="27" subtitle="Ce mois" />
        <StatCard icon="👥" title="Total clients" value="89" subtitle="+12 ce mois" trend="up" />
      </div>

      {/* Quick Actions */}
      <div className="flex gap-3">
        <button className="flex-1 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white text-sm font-medium transition flex items-center justify-center gap-2">
          <span>➕</span> Nouveau RDV
        </button>
        <button className="flex-1 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white text-sm font-medium transition flex items-center justify-center gap-2">
          <span>👤</span> Ajouter client
        </button>
        <button className="flex-1 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white text-sm font-medium transition flex items-center justify-center gap-2">
          <span>📊</span> Stats complètes
        </button>
      </div>

      {/* Today's Schedule */}
      <div className="bg-white/5 rounded-xl p-5 border border-white/10">
        <h3 className="text-white font-semibold mb-4">Agenda du jour</h3>
        <div className="space-y-3">
          {DEMO_RESERVATIONS.slice(0, 4).map((rdv) => (
            <div key={rdv.id} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
              <span className="text-cyan-400 font-mono text-sm w-12">{rdv.time}</span>
              <div className="flex-1">
                <p className="text-white text-sm font-medium">{rdv.client}</p>
                <p className="text-white/50 text-xs">{rdv.service}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${
                rdv.status === 'confirmed'
                  ? 'bg-emerald-500/20 text-emerald-400'
                  : 'bg-amber-500/20 text-amber-400'
              }`}>
                {rdv.status === 'confirmed' ? '✓ Confirmé' : '⏳ En attente'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ReservationsTab() {
  const [filter, setFilter] = useState<'today' | 'week' | 'month'>('today');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Réservations</h1>
          <p className="text-white/50 text-sm">{DEMO_RESERVATIONS.length} rendez-vous</p>
        </div>
        <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg text-sm font-medium hover:bg-cyan-500 transition">
          + Nouveau RDV
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-2">
        {(['today', 'week', 'month'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              filter === f
                ? 'bg-cyan-600 text-white'
                : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
            }`}
          >
            {f === 'today' && "Aujourd'hui"}
            {f === 'week' && 'Cette semaine'}
            {f === 'month' && 'Ce mois'}
          </button>
        ))}
      </div>

      {/* Reservations List */}
      <div className="space-y-3">
        {DEMO_RESERVATIONS.map((rdv) => (
          <div key={rdv.id} className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center gap-4">
            <div className="w-16 text-center">
              <p className="text-cyan-400 font-bold text-lg">{rdv.time}</p>
            </div>
            <div className="flex-1">
              <p className="text-white font-semibold">{rdv.client}</p>
              <p className="text-white/60 text-sm">{rdv.service}</p>
              <p className="text-white/40 text-xs mt-1">{rdv.phone}</p>
            </div>
            <div className="text-right">
              <p className="text-white font-semibold">{rdv.price}€</p>
              <span className={`inline-block mt-1 px-2 py-1 rounded-full text-xs ${
                rdv.status === 'confirmed'
                  ? 'bg-emerald-500/20 text-emerald-400'
                  : 'bg-amber-500/20 text-amber-400'
              }`}>
                {rdv.status === 'confirmed' ? '✓ Confirmé' : '⏳ En attente'}
              </span>
            </div>
            <div className="flex gap-2">
              <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-white/60 hover:text-white transition">
                ✏️
              </button>
              <button className="p-2 bg-white/5 hover:bg-red-500/20 rounded-lg text-white/60 hover:text-red-400 transition">
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsTab() {
  const [period, setPeriod] = useState<'7d' | '30d' | '90d'>('30d');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Analytics</h1>
          <p className="text-white/50 text-sm">Suivez vos performances</p>
        </div>
        <div className="flex gap-2">
          {(['7d', '30d', '90d'] as const).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                period === p
                  ? 'bg-cyan-600 text-white'
                  : 'bg-white/5 text-white/60 hover:bg-white/10'
              }`}
            >
              {p === '7d' && '7 jours'}
              {p === '30d' && '30 jours'}
              {p === '90d' && '90 jours'}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
        <h3 className="text-white font-semibold mb-4">Évolution du CA</h3>
        <SimpleChart data={DEMO_CA_DATA} />
        <div className="mt-4 pt-4 border-t border-white/10 flex justify-between text-sm">
          <span className="text-white/50">Total période</span>
          <span className="text-white font-semibold">2 025€</span>
        </div>
      </div>

      {/* Top Services */}
      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
        <h3 className="text-white font-semibold mb-4">Services les plus demandés</h3>
        <div className="space-y-4">
          {DEMO_TOP_SERVICES.map((service) => (
            <div key={service.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-white">{service.name}</span>
                <span className="text-white/60">{service.count} réservations</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
                  style={{ width: `${service.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
          <p className="text-2xl font-bold text-white">73%</p>
          <p className="text-white/50 text-sm">Taux de conversion</p>
        </div>
        <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
          <p className="text-2xl font-bold text-white">4.8</p>
          <p className="text-white/50 text-sm">Note moyenne</p>
        </div>
        <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
          <p className="text-2xl font-bold text-white">12%</p>
          <p className="text-white/50 text-sm">Nouveaux clients</p>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// PAGE PRINCIPALE
// ═══════════════════════════════════════════════════════════

export default function Demo() {
  const [mode, setMode] = useState<'client' | 'admin'>('client');

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

      {/* Hero */}
      <div className="text-center py-10 px-6">
        <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">
          Testez NEXUS en conditions réelles
        </h1>
        <p className="text-white/60 mb-8 max-w-xl mx-auto">
          Données fictives • 100% interactif • Sans inscription
        </p>

        {/* Mode Selector */}
        <div className="inline-flex bg-white/10 rounded-xl p-1.5 gap-1">
          <button
            onClick={() => setMode('client')}
            className={`px-6 py-3 rounded-lg font-medium transition ${
              mode === 'client'
                ? 'bg-white text-slate-900 shadow-lg'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            <span className="text-lg mr-2">👤</span>
            Vue Client
            <span className="block text-xs opacity-70 mt-0.5">Discutez avec l'IA</span>
          </button>
          <button
            onClick={() => setMode('admin')}
            className={`px-6 py-3 rounded-lg font-medium transition ${
              mode === 'admin'
                ? 'bg-white text-slate-900 shadow-lg'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            <span className="text-lg mr-2">⚙️</span>
            Vue Admin
            <span className="block text-xs opacity-70 mt-0.5">Gérez votre business</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <main className="px-6 pb-12">
        {mode === 'client' && <ClientMode />}
        {mode === 'admin' && <AdminMode />}
      </main>

      {/* CTA Footer */}
      <div className="border-t border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">
              Prêt à automatiser votre business ?
            </h2>
            <p className="text-white/50 mb-6">
              Configuration en 30 minutes • Essai gratuit 14 jours • Sans engagement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <span className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-cyan-500/25 transition cursor-pointer">
                  Voir les tarifs
                </span>
              </Link>
              <Link href="/contact">
                <span className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition cursor-pointer">
                  Demander une démo personnalisée
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
