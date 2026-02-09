import { useState } from 'react';
import { Link } from 'wouter';
import {
  Mail, Calendar, TrendingUp, DollarSign, Users,
  Sparkles, Brain, CheckCircle, BarChart3,
  FileText, Star, Target, Megaphone, Rocket, Search, Settings,
  LogOut, Bot, Send, Image, Clock
} from 'lucide-react';

// ═══════════════════════════════════════════════════════════
// DONNEES FICTIVES - CLIENT DEMO
// ═══════════════════════════════════════════════════════════

const DEMO_BUSINESS = {
  name: 'Salon Elegance',
  domain: 'salon-elegance.fr',
  owner: 'Marie Dupont',
  email: 'marie@salon-elegance.fr'
};

const DEMO_ASSISTANT = {
  name: 'Nova',
  greeting: 'Bonjour ! Je suis Nova, votre assistante IA. Comment puis-je vous aider ?'
};

const DEMO_CLIENTS = [
  { name: 'Claire Martin', phone: '06 12 34 56 78', visits: 12, totalSpent: 1450, vip: true },
  { name: 'Sophie Bernard', phone: '06 98 76 54 32', visits: 8, totalSpent: 920, vip: false },
  { name: 'Julie Moreau', phone: '07 11 22 33 44', visits: 15, totalSpent: 2100, vip: true },
  { name: 'Emma Petit', phone: '06 55 44 33 22', visits: 5, totalSpent: 450, vip: false },
  { name: 'Lea Dubois', phone: '07 88 99 00 11', visits: 22, totalSpent: 3200, vip: true }
];

const DEMO_SERVICES = [
  { name: 'Coupe Femme', price: 45, duration: '1h' },
  { name: 'Coloration', price: 80, duration: '2h' },
  { name: 'Balayage', price: 120, duration: '2h30' },
  { name: 'Brushing', price: 35, duration: '45min' },
  { name: 'Soin Keratine', price: 150, duration: '2h' }
];

export default function Demo() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', text: DEMO_ASSISTANT.greeting }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [marketingTab, setMarketingTab] = useState('publications');

  // Reponses IA demo
  const demoResponses: Record<string, string> = {
    'rdv': `Parfait ! Voici nos disponibilites :\n- Demain 14h, 15h30, 17h\n- Apres-demain 10h, 11h30, 14h\n\nQuelle date vous convient ?`,
    'prix': `Nos tarifs :\n- Coupe Femme : 45EUR\n- Coloration : 80EUR\n- Balayage : 120EUR\n- Brushing : 35EUR\n\nSouhaitez-vous reserver ?`,
    'horaires': `Nous sommes ouverts :\n- Lundi au Vendredi : 9h-19h\n- Samedi : 9h-18h\n- Dimanche : Ferme\n\nPuis-je vous aider a reserver ?`,
    'default': `Je peux vous aider a :\n- Reserver un rendez-vous\n- Consulter nos tarifs\n- Connaitre nos horaires\n\nQue souhaitez-vous faire ?`
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    const newMessages = [...chatMessages, { type: 'user', text: inputMessage }];
    setChatMessages(newMessages);

    setTimeout(() => {
      let response = demoResponses.default;
      const lower = inputMessage.toLowerCase();
      if (lower.includes('rdv') || lower.includes('rendez')) response = demoResponses.rdv;
      else if (lower.includes('prix') || lower.includes('tarif')) response = demoResponses.prix;
      else if (lower.includes('heure') || lower.includes('ouvert')) response = demoResponses.horaires;
      setChatMessages([...newMessages, { type: 'bot', text: response }]);
    }, 800);
    setInputMessage('');
  };

  // Sidebar menu
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'equipe-ia', label: 'Equipe IA', icon: Bot },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'marketing', label: 'Marketing', icon: Megaphone },
    { id: 'commercial', label: 'Commercial', icon: Users },
    { id: 'rh', label: 'RH', icon: Users },
    { id: 'comptabilite', label: 'Comptabilite', icon: DollarSign },
    { id: 'seo', label: 'SEO', icon: Search },
    { id: 'logs', label: 'Logs IA', icon: FileText },
    { id: 'parametres', label: 'Parametres', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* ═══════════════════════════════════════════════════ */}
      {/* HEADER DEMO */}
      {/* ═══════════════════════════════════════════════════ */}
      <header className="bg-[#12121a] border-b border-white/10 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            <span className="text-xl font-bold text-white cursor-pointer hover:text-orange-400 transition">
              NEXUS
            </span>
          </Link>
          <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-medium rounded-full border border-orange-500/30">
            MODE DEMO
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400">Donnees fictives - 100% interactif</span>
          <Link href="/pricing">
            <span className="px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition cursor-pointer">
              Essayer gratuitement
            </span>
          </Link>
        </div>
      </header>

      <div className="flex">
        {/* ═══════════════════════════════════════════════════ */}
        {/* SIDEBAR */}
        {/* ═══════════════════════════════════════════════════ */}
        <aside className="w-64 bg-[#12121a] border-r border-white/10 min-h-[calc(100vh-57px)] flex flex-col">
          {/* Logo client */}
          <div className="p-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <div>
                <div className="font-semibold text-white">{DEMO_BUSINESS.name}</div>
                <div className="text-xs text-gray-500">{DEMO_BUSINESS.domain}</div>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="p-4">
            <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10">
              <Search className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-500">Rechercher...</span>
              <span className="ml-auto text-xs text-gray-600 bg-white/10 px-1.5 py-0.5 rounded">Cmd+K</span>
            </div>
          </div>

          {/* Menu */}
          <nav className="flex-1 px-3 space-y-1">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                  activeSection === item.id
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </nav>

          {/* User */}
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                {DEMO_BUSINESS.owner.charAt(0)}
              </div>
              <div>
                <div className="font-medium text-white text-sm">{DEMO_BUSINESS.owner}</div>
                <div className="text-xs text-gray-500">{DEMO_BUSINESS.email}</div>
              </div>
            </div>
            <button className="w-full flex items-center gap-2 px-3 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition text-sm">
              <LogOut className="w-4 h-4" />
              Deconnexion
            </button>
          </div>
        </aside>

        {/* ═══════════════════════════════════════════════════ */}
        {/* MAIN CONTENT */}
        {/* ═══════════════════════════════════════════════════ */}
        <main className="flex-1 p-6 overflow-auto max-h-[calc(100vh-57px)]">

          {/* DASHBOARD */}
          {activeSection === 'dashboard' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold mb-1">Tableau de bord</h1>
                <p className="text-gray-500">Bienvenue sur votre espace NEXUS</p>
              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-[#1a1a24] rounded-xl p-5 border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-400 text-sm">CA du mois</span>
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-4 h-4 text-green-400" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold">12 450 EUR</div>
                  <div className="text-green-400 text-sm mt-1">+18% vs mois dernier</div>
                </div>

                <div className="bg-[#1a1a24] rounded-xl p-5 border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-400 text-sm">RDV ce mois</span>
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-blue-400" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold">187</div>
                  <div className="text-blue-400 text-sm mt-1">92% taux remplissage</div>
                </div>

                <div className="bg-[#1a1a24] rounded-xl p-5 border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-400 text-sm">Nouveaux clients</span>
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-purple-400" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold">34</div>
                  <div className="text-purple-400 text-sm mt-1">+12 cette semaine</div>
                </div>

                <div className="bg-[#1a1a24] rounded-xl p-5 border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-400 text-sm">Note moyenne</span>
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <Star className="w-4 h-4 text-orange-400" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold">4.9</div>
                  <div className="text-orange-400 text-sm mt-1">Sur 156 avis</div>
                </div>
              </div>

              {/* Charts row */}
              <div className="grid grid-cols-2 gap-6">
                {/* CA Chart */}
                <div className="bg-[#1a1a24] rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold mb-4">Evolution du CA</h3>
                  <div className="h-48 flex items-end justify-between gap-2">
                    {[65, 78, 52, 89, 76, 94, 82].map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2">
                        <div
                          className="w-full bg-gradient-to-t from-orange-600 to-orange-400 rounded-t cursor-pointer hover:from-orange-500 hover:to-orange-300 transition"
                          style={{ height: `${height}%` }}
                        />
                        <span className="text-[10px] text-gray-500">
                          {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Services populaires */}
                <div className="bg-[#1a1a24] rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold mb-4">Services populaires</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Coupe Femme', pct: 85 },
                      { name: 'Coloration', pct: 72 },
                      { name: 'Balayage', pct: 58 },
                      { name: 'Brushing', pct: 45 },
                      { name: 'Soin Keratine', pct: 32 }
                    ].map(s => (
                      <div key={s.name}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-300">{s.name}</span>
                          <span className="text-gray-500">{s.pct}%</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"
                            style={{ width: `${s.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Prochains RDV */}
              <div className="bg-[#1a1a24] rounded-xl p-6 border border-white/10">
                <h3 className="font-semibold mb-4">Prochains rendez-vous</h3>
                <div className="space-y-3">
                  {[
                    { time: '10:00', client: 'Claire Martin', service: 'Coupe + Brushing', status: 'confirmed' },
                    { time: '11:30', client: 'Sophie Bernard', service: 'Coloration', status: 'confirmed' },
                    { time: '14:00', client: 'Julie Moreau', service: 'Balayage', status: 'pending' },
                    { time: '16:00', client: 'Emma Petit', service: 'Soin Keratine', status: 'confirmed' }
                  ].map((rdv, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                      <span className="text-orange-400 font-mono text-sm w-14">{rdv.time}</span>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{rdv.client}</div>
                        <div className="text-xs text-gray-500">{rdv.service}</div>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        rdv.status === 'confirmed'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {rdv.status === 'confirmed' ? 'Confirme' : 'En attente'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* MARKETING */}
          {activeSection === 'marketing' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold mb-1 flex items-center gap-2">
                    <Megaphone className="w-6 h-6" />
                    Marketing
                  </h1>
                  <p className="text-gray-500">Gerez vos publications et campagnes</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition">
                  <Sparkles className="w-4 h-4" />
                  Nouveau post IA
                </button>
              </div>

              {/* Stats cards */}
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-[#1a1a24] rounded-xl p-5 border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Posts publies</div>
                    <div className="text-2xl font-bold">24</div>
                  </div>
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="bg-[#1a1a24] rounded-xl p-5 border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Programmes</div>
                    <div className="text-2xl font-bold">8</div>
                  </div>
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="bg-[#1a1a24] rounded-xl p-5 border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Campagnes actives</div>
                    <div className="text-2xl font-bold">3</div>
                  </div>
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="bg-[#1a1a24] rounded-xl p-5 border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Taux d'engagement</div>
                    <div className="text-2xl font-bold">4.8%</div>
                  </div>
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-2">
                {[
                  { id: 'publications', label: 'Publications', icon: Image },
                  { id: 'campagnes', label: 'Campagnes', icon: Mail },
                  { id: 'statistiques', label: 'Statistiques', icon: BarChart3 }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setMarketingTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
                      marketingTab === tab.id
                        ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                        : 'text-gray-400 hover:bg-white/5'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="bg-[#1a1a24] rounded-xl border border-white/10 p-8">
                {marketingTab === 'publications' && (
                  <div className="space-y-4">
                    {[
                      { date: 'Aujourd\'hui 10:00', platform: 'Instagram', status: 'Publie', title: 'Nouvelle collection printemps' },
                      { date: 'Hier 14:00', platform: 'Facebook', status: 'Publie', title: 'Promo -20% cette semaine' },
                      { date: 'Demain 09:00', platform: 'Instagram', status: 'Programme', title: 'Tuto coiffure tendance' }
                    ].map((post, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition cursor-pointer">
                        <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <Image className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{post.title}</div>
                          <div className="text-sm text-gray-500">{post.date} - {post.platform}</div>
                        </div>
                        <span className={`text-xs px-3 py-1 rounded-full ${
                          post.status === 'Publie'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {post.status}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                {marketingTab === 'campagnes' && (
                  <div className="text-center py-12">
                    <Mail className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                    <div className="text-gray-400 mb-2">3 campagnes actives</div>
                    <button className="px-4 py-2 bg-orange-500 text-white rounded-lg font-medium">
                      Voir les campagnes
                    </button>
                  </div>
                )}
                {marketingTab === 'statistiques' && (
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-white/5 rounded-xl">
                      <div className="text-3xl font-bold text-orange-400">12.4K</div>
                      <div className="text-gray-500 text-sm mt-1">Impressions</div>
                    </div>
                    <div className="text-center p-6 bg-white/5 rounded-xl">
                      <div className="text-3xl font-bold text-green-400">847</div>
                      <div className="text-gray-500 text-sm mt-1">Clics</div>
                    </div>
                    <div className="text-center p-6 bg-white/5 rounded-xl">
                      <div className="text-3xl font-bold text-purple-400">156</div>
                      <div className="text-gray-500 text-sm mt-1">Conversions</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* EQUIPE IA */}
          {activeSection === 'equipe-ia' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold mb-1 flex items-center gap-2">
                  <Bot className="w-6 h-6" />
                  Equipe IA
                </h1>
                <p className="text-gray-500">Vos assistants intelligents au travail</p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { name: DEMO_ASSISTANT.name, role: 'Assistant Client', status: 'Actif', calls: 342, color: 'orange' },
                  { name: 'Atlas', role: 'Analyse & Reporting', status: 'Actif', calls: 156, color: 'blue' },
                  { name: 'Echo', role: 'Marketing Automation', status: 'Pause', calls: 89, color: 'purple' }
                ].map(agent => (
                  <div key={agent.name} className="bg-[#1a1a24] rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-14 h-14 bg-${agent.color}-500/20 rounded-xl flex items-center justify-center`}>
                        <Brain className={`w-7 h-7 text-${agent.color}-400`} />
                      </div>
                      <div>
                        <div className="font-semibold text-lg">{agent.name}</div>
                        <div className="text-sm text-gray-500">{agent.role}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className={`px-2 py-1 rounded-full ${
                        agent.status === 'Actif'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {agent.status}
                      </span>
                      <span className="text-gray-500">{agent.calls} interactions</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat preview */}
              <div className="bg-[#1a1a24] rounded-xl border border-white/10 overflow-hidden">
                <div className="bg-orange-500/10 border-b border-white/10 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">{DEMO_ASSISTANT.name}</div>
                      <div className="text-xs text-green-400 flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        En ligne - Pret a repondre
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowChat(!showChat)}
                    className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition"
                  >
                    {showChat ? 'Fermer le chat' : 'Tester le chat'}
                  </button>
                </div>

                {showChat && (
                  <div className="p-4">
                    <div className="h-64 overflow-y-auto space-y-3 mb-4">
                      {chatMessages.map((msg, i) => (
                        <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-xs px-4 py-2 rounded-2xl text-sm whitespace-pre-line ${
                            msg.type === 'user'
                              ? 'bg-orange-500 text-white'
                              : 'bg-white/10 text-gray-200'
                          }`}>
                            {msg.text}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Tapez votre message..."
                        className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-orange-500 text-white"
                      />
                      <button
                        onClick={handleSendMessage}
                        className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex gap-2 mt-2">
                      {['Prendre RDV', 'Tarifs', 'Horaires'].map(s => (
                        <button
                          key={s}
                          onClick={() => { setInputMessage(s); setTimeout(handleSendMessage, 100); }}
                          className="px-3 py-1 text-xs bg-white/5 text-gray-400 rounded-full hover:bg-white/10 transition"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ANALYTICS */}
          {activeSection === 'analytics' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold mb-1">Analytics</h1>
                <p className="text-gray-500">Performances detaillees de votre activite</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#1a1a24] rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold mb-4">Revenus par service</h3>
                  <div className="space-y-3">
                    {DEMO_SERVICES.map(s => (
                      <div key={s.name} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <span>{s.name}</span>
                        <span className="font-bold text-orange-400">{s.price} EUR</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-[#1a1a24] rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold mb-4">Top clients</h3>
                  <div className="space-y-3">
                    {DEMO_CLIENTS.slice(0, 5).map(c => (
                      <div key={c.name} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                            c.vip ? 'bg-gradient-to-br from-yellow-400 to-orange-500' : 'bg-gray-600'
                          }`}>
                            {c.name.charAt(0)}
                          </div>
                          <span>{c.name}</span>
                          {c.vip && <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />}
                        </div>
                        <span className="font-bold text-green-400">{c.totalSpent} EUR</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* COMMERCIAL */}
          {activeSection === 'commercial' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold mb-1">Commercial</h1>
                <p className="text-gray-500">Gestion des clients et prospects</p>
              </div>
              <div className="bg-[#1a1a24] rounded-xl p-6 border border-white/10">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="p-6 bg-white/5 rounded-xl">
                    <div className="text-3xl font-bold text-blue-400">243</div>
                    <div className="text-gray-500 mt-1">Total clients</div>
                  </div>
                  <div className="p-6 bg-white/5 rounded-xl">
                    <div className="text-3xl font-bold text-green-400">38</div>
                    <div className="text-gray-500 mt-1">Clients VIP</div>
                  </div>
                  <div className="p-6 bg-white/5 rounded-xl">
                    <div className="text-3xl font-bold text-purple-400">78%</div>
                    <div className="text-gray-500 mt-1">Taux fidelisation</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* COMPTABILITE */}
          {activeSection === 'comptabilite' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold mb-1">Comptabilite</h1>
                <p className="text-gray-500">Suivi financier et factures</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl p-6">
                  <div className="text-green-200 text-sm mb-2">Encaisse ce mois</div>
                  <div className="text-3xl font-bold">11 240 EUR</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-600 to-amber-700 rounded-xl p-6">
                  <div className="text-yellow-200 text-sm mb-2">En attente</div>
                  <div className="text-3xl font-bold">1 210 EUR</div>
                </div>
                <div className="bg-gradient-to-br from-red-600 to-rose-700 rounded-xl p-6">
                  <div className="text-red-200 text-sm mb-2">Impayes</div>
                  <div className="text-3xl font-bold">320 EUR</div>
                </div>
              </div>
            </div>
          )}

          {/* Default for other sections */}
          {!['dashboard', 'marketing', 'equipe-ia', 'analytics', 'commercial', 'comptabilite'].includes(activeSection) && (
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-gray-600" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Module {activeSection}</h2>
                <p className="text-gray-500 mb-4">Cette section est disponible dans la version complete</p>
                <Link href="/pricing">
                  <span className="px-6 py-2 bg-orange-500 text-white rounded-lg font-medium cursor-pointer hover:bg-orange-600 transition">
                    Voir les tarifs
                  </span>
                </Link>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* ═══════════════════════════════════════════════════ */}
      {/* CTA FOOTER */}
      {/* ═══════════════════════════════════════════════════ */}
      <div className="fixed bottom-6 right-6">
        <Link href="/pricing">
          <span className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-semibold shadow-2xl shadow-orange-500/25 cursor-pointer hover:shadow-orange-500/40 transition">
            <Rocket className="w-5 h-5" />
            Essayer NEXUS gratuitement
          </span>
        </Link>
      </div>
    </div>
  );
}
