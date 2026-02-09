import { useState } from 'react';
import { Link } from 'wouter';
import {
  MessageCircle, Phone, Mail, Calendar,
  TrendingUp, DollarSign, Users, Package,
  Instagram, Facebook, Sparkles, Brain,
  CheckCircle, Clock, Bell, BarChart3,
  Zap, Award, ShoppingCart, FileText,
  ArrowRight, Play, ChevronRight, Star,
  Target, Megaphone, Shield, Settings,
  Rocket
} from 'lucide-react';

export default function Demo() {
  // Etats pour interactions
  const [activeTab, setActiveTab] = useState('agent-ia');
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', text: 'Bonjour ! Je suis Halimah, votre assistante IA. Comment puis-je vous aider ?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [statsView, setStatsView] = useState<'today' | 'week' | 'month'>('today');

  // Demo messages predefinis
  const demoResponses: Record<string, string> = {
    'rdv': 'Super ! Pour quelle date souhaitez-vous reserver ? J\'ai des disponibilites demain a 14h, 15h30 et 17h.',
    'prix': 'Nos prestations : Coupe Femme 45EUR (1h), Box Braids 120EUR (4h), Coloration 80EUR (2h). Quelle prestation vous interesse ?',
    'horaires': 'Nous sommes ouverts du lundi au samedi, 9h-19h. Le dimanche sur rendez-vous uniquement. Souhaitez-vous reserver ?',
    'default': 'Je peux vous aider a reserver un rendez-vous, vous renseigner sur nos tarifs et horaires. Que souhaitez-vous savoir ?'
  };

  // Simuler reponse IA
  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Ajouter message utilisateur
    const newMessages = [...chatMessages, { type: 'user', text: inputMessage }];
    setChatMessages(newMessages);

    // Simuler delai de reponse
    setTimeout(() => {
      let response = demoResponses.default;

      if (inputMessage.toLowerCase().includes('rdv') || inputMessage.toLowerCase().includes('rendez')) {
        response = demoResponses.rdv;
      } else if (inputMessage.toLowerCase().includes('prix') || inputMessage.toLowerCase().includes('tarif')) {
        response = demoResponses.prix;
      } else if (inputMessage.toLowerCase().includes('heure') || inputMessage.toLowerCase().includes('ouvert')) {
        response = demoResponses.horaires;
      }

      setChatMessages([...newMessages, { type: 'bot', text: response }]);
    }, 800);

    setInputMessage('');
  };

  // Stats simulees
  const stats: Record<string, { ca: number; rdv: number; clients: number; taux: number }> = {
    today: { ca: 1240, rdv: 8, clients: 12, taux: 95 },
    week: { ca: 6800, rdv: 42, clients: 68, taux: 92 },
    month: { ca: 28400, rdv: 186, clients: 243, taux: 89 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">

      {/* ═══════════════════════════════════════════════════ */}
      {/* HERO DEMO */}
      {/* ═══════════════════════════════════════════════════ */}

      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm font-medium mb-6">
              <Play className="w-4 h-4 mr-2" />
              Demo interactive
            </div>

            <h1 className="text-5xl font-bold mb-6">
              Explorez NEXUS en action
            </h1>

            <p className="text-xl text-indigo-100 mb-8">
              Decouvrez comment NEXUS transforme votre activite.
              Cliquez, testez, interagissez avec les modules !
            </p>

            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
                100% interactif
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
                Aucune installation
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
                Donnees fictives
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* NAVIGATION MODULES */}
      {/* ═══════════════════════════════════════════════════ */}

      <section className="sticky top-16 bg-white shadow-md z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 py-4 no-scrollbar">
            {[
              { id: 'agent-ia', label: 'Agent IA', icon: Brain },
              { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
              { id: 'reservations', label: 'Reservations', icon: Calendar },
              { id: 'comptabilite', label: 'Comptabilite', icon: DollarSign },
              { id: 'marketing', label: 'Marketing', icon: Megaphone },
              { id: 'crm', label: 'CRM', icon: Users }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium whitespace-nowrap transition ${
                  activeTab === tab.id
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* MODULE : AGENT IA */}
      {/* ═══════════════════════════════════════════════════ */}

      {activeTab === 'agent-ia' && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Agent IA Conversationnel</h2>
              <p className="text-gray-600">Testez la conversation avec Halimah, votre assistante IA 24/7</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">

              {/* Preview site client */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-white/30 rounded-full mr-2"></div>
                      <div className="w-3 h-3 bg-white/30 rounded-full mr-2"></div>
                      <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    </div>
                    <span className="text-sm">fatshairafro.fr</span>
                  </div>
                </div>

                <div className="relative h-[600px] overflow-y-auto">
                  {/* Site vitrine simule */}
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Fat's Hair Afro</h1>
                    <p className="text-gray-600 mb-6">Salon de coiffure afro a Franconville</p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-white p-4 rounded-lg shadow">
                        <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&h=200&fit=crop" alt="Service" className="w-full h-32 object-cover rounded mb-2" />
                        <h3 className="font-bold mb-1">Box Braids</h3>
                        <p className="text-sm text-gray-600">120EUR - 4h</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow">
                        <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=200&fit=crop" alt="Service" className="w-full h-32 object-cover rounded mb-2" />
                        <h3 className="font-bold mb-1">Coloration</h3>
                        <p className="text-sm text-gray-600">80EUR - 2h</p>
                      </div>
                    </div>
                  </div>

                  {/* Widget chat IA */}
                  {!showChat && (
                    <button
                      onClick={() => setShowChat(true)}
                      className="absolute bottom-8 right-8 bg-indigo-600 text-white p-4 rounded-full shadow-2xl hover:bg-indigo-700 transition animate-bounce"
                    >
                      <MessageCircle className="w-6 h-6" />
                    </button>
                  )}

                  {showChat && (
                    <div className="absolute bottom-8 right-8 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden">
                      {/* Header chat */}
                      <div className="bg-indigo-600 text-white p-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                            <Brain className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="font-bold">Halimah</div>
                            <div className="text-xs text-indigo-200 flex items-center">
                              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                              En ligne
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => setShowChat(false)}
                          className="text-white/70 hover:text-white"
                        >
                          X
                        </button>
                      </div>

                      {/* Messages */}
                      <div className="h-72 overflow-y-auto p-4 space-y-3 bg-gray-50">
                        {chatMessages.map((msg, i) => (
                          <div
                            key={i}
                            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                          >
                            <div
                              className={`max-w-xs px-4 py-2 rounded-2xl ${
                                msg.type === 'user'
                                  ? 'bg-indigo-600 text-white'
                                  : 'bg-white text-gray-800 shadow'
                              }`}
                            >
                              {msg.text}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Input */}
                      <div className="p-4 bg-white border-t">
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            placeholder="Tapez votre message..."
                            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                          <button
                            onClick={handleSendMessage}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                          >
                            &rarr;
                          </button>
                        </div>

                        {/* Suggestions rapides */}
                        <div className="flex gap-2 mt-2 flex-wrap">
                          {['Je veux un rdv', 'C\'est combien ?', 'Horaires ?'].map(suggestion => (
                            <button
                              key={suggestion}
                              onClick={() => {
                                setInputMessage(suggestion);
                                setTimeout(() => handleSendMessage(), 100);
                              }}
                              className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Explications */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Zap className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Conversation naturelle</h3>
                      <p className="text-gray-600 mb-4">
                        Halimah comprend le langage naturel et repond comme un humain.
                        Elle prend les rendez-vous, renseigne sur les tarifs, et gere les demandes 24/7.
                      </p>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="flex items-center text-green-800 font-medium mb-2">
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Essayez ces questions :
                        </div>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>- "Je veux un rendez-vous demain"</li>
                          <li>- "C'est combien les box braids ?"</li>
                          <li>- "Vous etes ouverts le dimanche ?"</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Canaux disponibles</h3>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-green-50 rounded-lg">
                      <MessageCircle className="w-5 h-5 text-green-600 mr-3" />
                      <div>
                        <div className="font-medium">Chat Web</div>
                        <div className="text-sm text-gray-600">Sur votre site</div>
                      </div>
                      <div className="ml-auto text-green-600 font-bold">29EUR/mois</div>
                    </div>

                    <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <Phone className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <div className="font-medium">WhatsApp</div>
                        <div className="text-sm text-gray-600">Conversations illimitees</div>
                      </div>
                      <div className="ml-auto text-blue-600 font-bold">39EUR/mois</div>
                    </div>

                    <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                      <Phone className="w-5 h-5 text-purple-600 mr-3" />
                      <div>
                        <div className="font-medium">Telephone</div>
                        <div className="text-sm text-gray-600">120 min incluses</div>
                      </div>
                      <div className="ml-auto text-purple-600 font-bold">99EUR/mois</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl shadow-lg p-6 text-white">
                  <div className="flex items-center mb-3">
                    <Star className="w-6 h-6 mr-2" />
                    <span className="font-bold text-lg">Pack complet</span>
                  </div>
                  <p className="mb-4">Les 3 canaux (Chat + WhatsApp + Telephone)</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-3xl font-bold">149EUR</span>
                      <span className="text-white/80">/mois</span>
                    </div>
                    <div className="bg-white/20 px-3 py-1 rounded-full text-sm">
                      Economie 18EUR
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════ */}
      {/* MODULE : DASHBOARD */}
      {/* ═══════════════════════════════════════════════════ */}

      {activeTab === 'dashboard' && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Dashboard en temps reel</h2>
              <p className="text-gray-600">Visualisez vos KPI et performances instantanement</p>
            </div>

            {/* Periode selector */}
            <div className="flex justify-center gap-4 mb-8">
              {[
                { id: 'today' as const, label: 'Aujourd\'hui' },
                { id: 'week' as const, label: 'Cette semaine' },
                { id: 'month' as const, label: 'Ce mois' }
              ].map(period => (
                <button
                  key={period.id}
                  onClick={() => setStatsView(period.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition ${
                    statsView === period.id
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
                  }`}
                >
                  {period.label}
                </button>
              ))}
            </div>

            {/* KPI Cards */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-xl shadow-xl p-6 transform hover:scale-105 transition cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <DollarSign className="w-8 h-8" />
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div className="text-3xl font-bold mb-1">{stats[statsView].ca}EUR</div>
                <div className="text-green-100">Chiffre d'affaires</div>
                <div className="mt-3 text-sm bg-white/20 backdrop-blur rounded-lg px-3 py-1 inline-block">
                  +12% vs periode precedente
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl shadow-xl p-6 transform hover:scale-105 transition cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <Calendar className="w-8 h-8" />
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div className="text-3xl font-bold mb-1">{stats[statsView].rdv}</div>
                <div className="text-blue-100">Rendez-vous</div>
                <div className="mt-3 text-sm bg-white/20 backdrop-blur rounded-lg px-3 py-1 inline-block">
                  {stats[statsView].taux}% taux remplissage
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-xl shadow-xl p-6 transform hover:scale-105 transition cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <Users className="w-8 h-8" />
                  <Target className="w-5 h-5" />
                </div>
                <div className="text-3xl font-bold mb-1">{stats[statsView].clients}</div>
                <div className="text-purple-100">Clients</div>
                <div className="mt-3 text-sm bg-white/20 backdrop-blur rounded-lg px-3 py-1 inline-block">
                  18 nouveaux ce mois
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-xl shadow-xl p-6 transform hover:scale-105 transition cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <Award className="w-8 h-8" />
                  <Star className="w-5 h-5" />
                </div>
                <div className="text-3xl font-bold mb-1">4.8</div>
                <div className="text-orange-100">Satisfaction moyenne</div>
                <div className="mt-3 text-sm bg-white/20 backdrop-blur rounded-lg px-3 py-1 inline-block">
                  Sur 124 avis Google
                </div>
              </div>
            </div>

            {/* Graphiques */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* CA Chart simule */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4">Evolution CA (7 derniers jours)</h3>
                <div className="h-64 flex items-end justify-between gap-2">
                  {[45, 62, 58, 72, 68, 81, 75].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t hover:from-indigo-700 hover:to-indigo-500 transition cursor-pointer relative group"
                      style={{ height: `${height}%` }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                        {Math.floor(height * 20)}EUR
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-xs text-gray-500">
                  <span>Lun</span>
                  <span>Mar</span>
                  <span>Mer</span>
                  <span>Jeu</span>
                  <span>Ven</span>
                  <span>Sam</span>
                  <span>Dim</span>
                </div>
              </div>

              {/* Services populaires */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4">Services les plus demandes</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Box Braids', value: 85, color: 'bg-purple-500' },
                    { name: 'Coloration', value: 72, color: 'bg-pink-500' },
                    { name: 'Coupe Femme', value: 64, color: 'bg-blue-500' },
                    { name: 'Lissage', value: 58, color: 'bg-green-500' },
                    { name: 'Meches', value: 45, color: 'bg-yellow-500' }
                  ].map(service => (
                    <div key={service.name} className="group cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{service.name}</span>
                        <span className="text-sm text-gray-500">{service.value}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${service.color} rounded-full group-hover:opacity-80 transition`}
                          style={{ width: `${service.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Alertes intelligentes */}
            <div className="mt-6 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
              <div className="flex items-start">
                <Bell className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-bold text-orange-900 mb-2">SENTINEL a detecte une opportunite</h3>
                  <p className="text-orange-800 mb-3">
                    Jeudi 14h-16h est vide. Proposez une promo "Happy Hour" sur Instagram pour remplir ce creneau ?
                  </p>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
                      Creer la promo automatiquement
                    </button>
                    <button className="px-4 py-2 bg-white text-orange-700 rounded-lg hover:bg-gray-50 transition">
                      Plus tard
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════ */}
      {/* MODULE : RESERVATIONS */}
      {/* ═══════════════════════════════════════════════════ */}

      {activeTab === 'reservations' && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Gestion des reservations</h2>
              <p className="text-gray-600">Planning intelligent avec glisser-deposer</p>
            </div>

            {/* Planning simule */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Header planning */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button className="p-2 hover:bg-white/10 rounded">&larr;</button>
                    <h3 className="text-xl font-bold">Semaine du 10-16 Fevrier 2026</h3>
                    <button className="p-2 hover:bg-white/10 rounded">&rarr;</button>
                  </div>
                  <button className="px-4 py-2 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 transition">
                    + Nouveau RDV
                  </button>
                </div>
              </div>

              {/* Grille planning */}
              <div className="overflow-x-auto">
                <div className="min-w-[800px]">
                  {/* Jours */}
                  <div className="grid grid-cols-7 border-b">
                    {['Lun 10', 'Mar 11', 'Mer 12', 'Jeu 13', 'Ven 14', 'Sam 15', 'Dim 16'].map((day, i) => (
                      <div key={day} className={`p-4 text-center font-medium ${i === 6 ? 'bg-gray-100' : ''}`}>
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Creneaux */}
                  <div className="grid grid-cols-7">
                    {/* Simulation quelques RDV */}
                    {Array.from({ length: 7 }).map((_, dayIndex) => (
                      <div key={dayIndex} className="border-r p-2 space-y-2 min-h-[400px]">
                        {dayIndex === 0 && (
                          <div className="bg-blue-100 border-l-4 border-blue-500 p-3 rounded cursor-pointer hover:shadow-lg transition group">
                            <div className="font-medium text-sm">10:00 - 11:30</div>
                            <div className="text-xs text-gray-600 mt-1">Sophie Martin</div>
                            <div className="text-xs text-blue-700 font-medium">Box Braids</div>
                            <div className="text-xs text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition">
                              Clic pour modifier
                            </div>
                          </div>
                        )}

                        {dayIndex === 1 && (
                          <div className="bg-green-100 border-l-4 border-green-500 p-3 rounded cursor-pointer hover:shadow-lg transition group">
                            <div className="font-medium text-sm">14:00 - 15:00</div>
                            <div className="text-xs text-gray-600 mt-1">Julie Dubois</div>
                            <div className="text-xs text-green-700 font-medium">Coupe Femme</div>
                            <div className="text-xs text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition">
                              Clic pour modifier
                            </div>
                          </div>
                        )}

                        {dayIndex === 2 && (
                          <div className="bg-purple-100 border-l-4 border-purple-500 p-3 rounded cursor-pointer hover:shadow-lg transition group">
                            <div className="font-medium text-sm">09:00 - 12:00</div>
                            <div className="text-xs text-gray-600 mt-1">Aisha Keita</div>
                            <div className="text-xs text-purple-700 font-medium">Coloration complete</div>
                          </div>
                        )}

                        {dayIndex === 3 && (
                          <div className="border-2 border-dashed border-orange-300 bg-orange-50 p-3 rounded text-center text-orange-600 text-sm cursor-pointer hover:bg-orange-100 transition">
                            Creneau vide<br/>
                            <span className="text-xs">14h - 16h</span>
                          </div>
                        )}

                        {dayIndex === 4 && (
                          <>
                            <div className="bg-pink-100 border-l-4 border-pink-500 p-3 rounded cursor-pointer hover:shadow-lg transition">
                              <div className="font-medium text-sm">10:00 - 11:00</div>
                              <div className="text-xs text-gray-600 mt-1">Marie Lambert</div>
                              <div className="text-xs text-pink-700 font-medium">Brushing</div>
                            </div>
                            <div className="bg-blue-100 border-l-4 border-blue-500 p-3 rounded cursor-pointer hover:shadow-lg transition">
                              <div className="font-medium text-sm">15:00 - 18:00</div>
                              <div className="text-xs text-gray-600 mt-1">Fatou Diallo</div>
                              <div className="text-xs text-blue-700 font-medium">Tresses africaines</div>
                            </div>
                          </>
                        )}

                        {dayIndex === 5 && (
                          <>
                            <div className="bg-green-100 border-l-4 border-green-500 p-3 rounded cursor-pointer hover:shadow-lg transition">
                              <div className="font-medium text-sm">09:00 - 10:00</div>
                              <div className="text-xs text-gray-600 mt-1">Aminata Sow</div>
                              <div className="text-xs text-green-700 font-medium">Coupe + Soin</div>
                            </div>
                            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded cursor-pointer hover:shadow-lg transition">
                              <div className="font-medium text-sm">14:00 - 17:00</div>
                              <div className="text-xs text-gray-600 mt-1">Khadija Ba</div>
                              <div className="text-xs text-yellow-700 font-medium">Meches + Coupe</div>
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats planning */}
              <div className="bg-gray-50 p-4 border-t grid grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-indigo-600">42</div>
                  <div className="text-sm text-gray-600">RDV cette semaine</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">92%</div>
                  <div className="text-sm text-gray-600">Taux remplissage</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">6</div>
                  <div className="text-sm text-gray-600">Creneaux vides</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">6 800EUR</div>
                  <div className="text-sm text-gray-600">CA previsionnel</div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition cursor-pointer">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold mb-2">Glisser-deposer</h3>
                <p className="text-sm text-gray-600">
                  Deplacez les RDV facilement en les glissant. Changez l'heure, le jour, ou le service en un clic.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition cursor-pointer">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Bell className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold mb-2">Rappels automatiques</h3>
                <p className="text-sm text-gray-600">
                  Email et SMS envoyes 24h avant le RDV. Confirmation automatique. Taux no-show divise par 4.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition cursor-pointer">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold mb-2">Optimisation IA</h3>
                <p className="text-sm text-gray-600">
                  NEXUS detecte les creneaux vides et suggere des actions (promos, relances clients).
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════ */}
      {/* MODULE : COMPTABILITE */}
      {/* ═══════════════════════════════════════════════════ */}

      {activeTab === 'comptabilite' && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Comptabilite simplifiee</h2>
              <p className="text-gray-600">Factures, paiements et exports en quelques clics</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Factures recentes */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">Factures recentes</h3>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition">
                    + Nouvelle facture
                  </button>
                </div>

                <div className="space-y-3">
                  {[
                    { num: 'FAC-2026-042', client: 'Sophie Martin', service: 'Box Braids', amount: 120, status: 'paid', date: '09/02/2026' },
                    { num: 'FAC-2026-041', client: 'Julie Dubois', service: 'Coupe + Coloration', amount: 85, status: 'paid', date: '08/02/2026' },
                    { num: 'FAC-2026-040', client: 'Aisha Keita', service: 'Coloration complete', amount: 95, status: 'pending', date: '08/02/2026' },
                    { num: 'FAC-2026-039', client: 'Marie Lambert', service: 'Brushing + Soin', amount: 55, status: 'paid', date: '07/02/2026' },
                    { num: 'FAC-2026-038', client: 'Fatou Diallo', service: 'Tresses africaines', amount: 150, status: 'overdue', date: '05/02/2026' }
                  ].map(invoice => (
                    <div key={invoice.num} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                      <div className="flex items-center gap-4">
                        <FileText className="w-5 h-5 text-gray-400" />
                        <div>
                          <div className="font-medium">{invoice.num}</div>
                          <div className="text-sm text-gray-500">{invoice.client} - {invoice.service}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{invoice.amount}EUR</div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          invoice.status === 'paid' ? 'bg-green-100 text-green-700' :
                          invoice.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {invoice.status === 'paid' ? 'Payee' : invoice.status === 'pending' ? 'En attente' : 'En retard'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats compta */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-4">Ce mois</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-green-100">Encaisse</span>
                      <span className="font-bold">24 580EUR</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-100">En attente</span>
                      <span className="font-bold">1 820EUR</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-100">En retard</span>
                      <span className="font-bold text-red-300">450EUR</span>
                    </div>
                    <hr className="border-white/20" />
                    <div className="flex justify-between text-lg">
                      <span>Total</span>
                      <span className="font-bold">26 850EUR</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-bold mb-4">Exports</h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                      <span>Export Excel</span>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                      <span>Export PDF</span>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                      <span>Sync comptable</span>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════ */}
      {/* MODULE : MARKETING */}
      {/* ═══════════════════════════════════════════════════ */}

      {activeTab === 'marketing' && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Marketing automatise avec IA</h2>
              <p className="text-gray-600">500 posts/mois generes automatiquement avec images DALL-E</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Generation post */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Generateur de contenu</h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Type de post</label>
                    <select className="w-full px-4 py-2 border rounded-lg">
                      <option>Promotion</option>
                      <option>Avant/Apres</option>
                      <option>Conseil beaute</option>
                      <option>Nouveau service</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Plateforme</label>
                    <div className="flex gap-2">
                      <button className="flex-1 px-4 py-2 bg-pink-500 text-white rounded-lg">Instagram</button>
                      <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg">Facebook</button>
                      <button className="flex-1 px-4 py-2 bg-blue-400 text-white rounded-lg">LinkedIn</button>
                    </div>
                  </div>
                </div>

                <button className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition">
                  <Sparkles className="inline w-5 h-5 mr-2" />
                  Generer avec IA
                </button>

                {/* Preview */}
                <div className="mt-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-4">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=400&fit=crop"
                      alt="Preview"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <p className="text-sm text-gray-800 mb-3">
                        Nouveau service : Box Braids express en 3h !<br/>
                        Reservez maintenant et profitez de -20% sur votre premiere visite<br/>
                        #BoxBraids #CoiffureAfro #Paris
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>234 likes</span>
                        <span>18 comments</span>
                        <span>12 shares</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calendrier posts */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Planning editorial</h3>

                <div className="space-y-3">
                  {[
                    { date: 'Lun 10 Fev - 10:00', platform: 'Instagram', status: 'Publie', color: 'green' },
                    { date: 'Mar 11 Fev - 14:00', platform: 'Facebook', status: 'Programme', color: 'blue' },
                    { date: 'Mer 12 Fev - 09:00', platform: 'LinkedIn', status: 'Brouillon', color: 'gray' },
                    { date: 'Jeu 13 Fev - 16:00', platform: 'Instagram', status: 'Programme', color: 'blue' },
                    { date: 'Ven 14 Fev - 11:00', platform: 'TikTok', status: 'Programme', color: 'blue' }
                  ].map((post, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full mr-3 ${
                          post.color === 'green' ? 'bg-green-500' :
                          post.color === 'blue' ? 'bg-blue-500' : 'bg-gray-400'
                        }`}></div>
                        <div>
                          <div className="font-medium text-sm">{post.date}</div>
                          <div className="text-xs text-gray-500">{post.platform}</div>
                        </div>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded ${
                        post.color === 'green' ? 'bg-green-100 text-green-700' :
                        post.color === 'blue' ? 'bg-blue-100 text-blue-700' : 'bg-gray-200 text-gray-700'
                      }`}>
                        {post.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <div className="flex items-center text-green-800 font-medium mb-2">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Ce mois-ci
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-2xl font-bold text-green-600">24</div>
                      <div className="text-green-700">Posts publies</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">3 421</div>
                      <div className="text-green-700">Impressions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════ */}
      {/* MODULE : CRM */}
      {/* ═══════════════════════════════════════════════════ */}

      {activeTab === 'crm' && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Gestion des clients</h2>
              <p className="text-gray-600">Historique complet, preferences et fidelisation</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Liste clients */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">Clients recents</h3>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Rechercher..."
                      className="px-4 py-2 border rounded-lg text-sm"
                    />
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition">
                      + Ajouter
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { name: 'Sophie Martin', phone: '06 12 34 56 78', visits: 12, lastVisit: '09/02/2026', totalSpent: 1450, vip: true },
                    { name: 'Julie Dubois', phone: '06 98 76 54 32', visits: 8, lastVisit: '08/02/2026', totalSpent: 920, vip: false },
                    { name: 'Aisha Keita', phone: '07 11 22 33 44', visits: 15, lastVisit: '08/02/2026', totalSpent: 2100, vip: true },
                    { name: 'Marie Lambert', phone: '06 55 44 33 22', visits: 5, lastVisit: '07/02/2026', totalSpent: 450, vip: false },
                    { name: 'Fatou Diallo', phone: '07 88 99 00 11', visits: 22, lastVisit: '05/02/2026', totalSpent: 3200, vip: true }
                  ].map(client => (
                    <div key={client.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                          client.vip ? 'bg-gradient-to-br from-yellow-400 to-orange-500' : 'bg-gradient-to-br from-blue-400 to-indigo-500'
                        }`}>
                          {client.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-medium flex items-center gap-2">
                            {client.name}
                            {client.vip && <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />}
                          </div>
                          <div className="text-sm text-gray-500">{client.phone}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-indigo-600">{client.totalSpent}EUR</div>
                        <div className="text-xs text-gray-500">{client.visits} visites</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats CRM */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-4">Vue d'ensemble</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-indigo-100">Total clients</span>
                      <span className="font-bold">243</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-indigo-100">Clients VIP</span>
                      <span className="font-bold">38</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-indigo-100">Nouveaux ce mois</span>
                      <span className="font-bold text-green-300">+18</span>
                    </div>
                    <hr className="border-white/20" />
                    <div className="flex justify-between">
                      <span className="text-indigo-100">Taux fidelisation</span>
                      <span className="font-bold">78%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-bold mb-4">Actions rapides</h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                      <span>Envoyer SMS promo</span>
                      <MessageCircle className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                      <span>Email newsletter</span>
                      <Mail className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                      <span>Export contacts</span>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 text-amber-800 font-bold mb-2">
                    <Bell className="w-5 h-5" />
                    Anniversaires cette semaine
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-amber-700">
                      <span>Sophie Martin</span>
                      <span>12 Fev</span>
                    </div>
                    <div className="flex justify-between text-amber-700">
                      <span>Khadija Ba</span>
                      <span>14 Fev</span>
                    </div>
                  </div>
                  <button className="mt-3 text-amber-800 text-sm font-medium hover:underline">
                    Envoyer un message automatique &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════ */}
      {/* CTA FINAL */}
      {/* ═══════════════════════════════════════════════════ */}

      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Rocket className="w-16 h-16 mx-auto mb-6" />

          <h2 className="text-4xl font-bold mb-6">
            Convaincu ? Essayez NEXUS gratuitement
          </h2>

          <p className="text-xl text-indigo-100 mb-8">
            14 jours d'essai gratuit - Sans engagement - Sans carte bancaire
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 rounded-lg font-medium text-lg hover:bg-gray-100 transition shadow-xl"
            >
              Commencer maintenant
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-indigo-700/50 backdrop-blur text-white rounded-lg font-medium text-lg hover:bg-indigo-700 transition border-2 border-white/20"
            >
              Parler a un expert
              <MessageCircle className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
