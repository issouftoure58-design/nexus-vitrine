import {
  Zap, Shield, Globe, Brain,
  Sparkles, TrendingUp, Clock,
  Users, Award, ChevronRight,
  CheckCircle, ArrowRight, Rocket,
  Code, Cloud, Lock, Heart
} from 'lucide-react';
import { Link } from 'wouter';

export default function About() {
  return (
    <div className="min-h-screen bg-white">

      {/* ═══════════════════════════════════════════════════ */}
      {/* HERO SECTION */}
      {/* ═══════════════════════════════════════════════════ */}

      <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white py-24 overflow-hidden">
        {/* Effet background anime */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              L'IA au service de votre business
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              NEXUS
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                Votre operateur IA
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-indigo-100 mb-12 leading-relaxed">
              La premiere plateforme qui automatise l'integralite de votre activite
              comme un operateur telecom installe une ligne.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <span className="inline-flex items-center px-8 py-4 bg-white text-indigo-900 rounded-lg font-medium text-lg hover:bg-gray-100 transition shadow-xl cursor-pointer">
                  Voir les plans
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </Link>
              <Link href="/demo">
                <span className="inline-flex items-center px-8 py-4 bg-indigo-700/50 backdrop-blur text-white rounded-lg font-medium text-lg hover:bg-indigo-700 transition border-2 border-white/20 cursor-pointer">
                  Demo gratuite
                  <Rocket className="ml-2 w-5 h-5" />
                </span>
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-indigo-200">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                14 jours gratuits
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                Sans engagement
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                Support 24/7
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* PROBLEME → SOLUTION */}
      {/* ═══════════════════════════════════════════════════ */}

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Le probleme que NEXUS resout
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vous perdez du temps et de l'argent sur des taches repetitives
              pendant que vos concurrents automatisent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* AVANT */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-red-200">
              <div className="text-red-600 text-lg font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">X</span>
                AVANT NEXUS
              </div>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    <strong>15h/semaine</strong> perdues a repondre aux appels et messages
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    <strong>40% de RDV perdus</strong> hors heures d'ouverture
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    <strong>10h/mois</strong> sur la comptabilite et factures
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    <strong>5h/semaine</strong> pour creer du contenu marketing
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Pas de vision claire de votre business en temps reel
                  </span>
                </li>
              </ul>

              <div className="mt-6 p-4 bg-red-50 rounded-lg">
                <p className="text-red-800 font-medium">
                  Perte estimee : <strong>8 000 EUR/mois</strong> en opportunites manquees
                </p>
              </div>
            </div>

            {/* APRES */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl p-8 border-4 border-green-400">
              <div className="text-green-600 text-lg font-bold mb-4 flex items-center">
                <CheckCircle className="w-8 h-8 mr-3" />
                AVEC NEXUS
              </div>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Agent IA 24/7</strong> repond et prend les RDV automatiquement
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>0 RDV perdu</strong> - Disponible meme la nuit et le dimanche
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Compta automatique</strong> - Factures, relances, rapports generes
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>500 posts/mois IA</strong> - Marketing automatise avec images DALL-E
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Dashboard temps reel</strong> - KPI, predictions, alertes intelligentes
                  </span>
                </li>
              </ul>

              <div className="mt-6 p-4 bg-green-100 rounded-lg">
                <p className="text-green-800 font-medium">
                  Gain estime : <strong>+18 000 EUR/mois</strong> de CA supplementaire
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* COMMENT CA MARCHE */}
      {/* ═══════════════════════════════════════════════════ */}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple comme brancher Internet
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              NEXUS s'installe en <strong>30 minutes</strong> et fonctionne immediatement.
              Comme un operateur telecom, mais pour votre business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Etape 1 */}
            <div className="relative">
              <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-lg">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4">Inscription 5 min</h3>
              <p className="text-gray-600 mb-6">
                Creez votre compte, choisissez votre secteur d'activite (salon, restaurant, garage...),
                et laissez NEXUS se configurer automatiquement.
              </p>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="text-sm text-indigo-900 font-medium">
                  Aucune installation<br/>
                  Aucune competence technique<br/>
                  14 jours gratuits
                </p>
              </div>

              {/* Fleche */}
              <div className="hidden md:block absolute top-8 -right-4 text-indigo-200">
                <ChevronRight className="w-8 h-8" />
              </div>
            </div>

            {/* Etape 2 */}
            <div className="relative">
              <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4">Branchement 10 min</h3>
              <p className="text-gray-600 mb-6">
                Connectez vos canaux : WhatsApp, telephone, site web.
                Importez vos services, tarifs, et horaires. NEXUS fait le reste.
              </p>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="text-sm text-indigo-900 font-medium">
                  Assistant de configuration<br/>
                  Import automatique<br/>
                  Templates pre-configures
                </p>
              </div>

              {/* Fleche */}
              <div className="hidden md:block absolute top-8 -right-4 text-indigo-200">
                <ChevronRight className="w-8 h-8" />
              </div>
            </div>

            {/* Etape 3 */}
            <div className="relative">
              <div className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-lg">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">C'est parti !</h3>
              <p className="text-gray-600 mb-6">
                NEXUS est operationnel 24/7. Votre agent IA repond aux clients,
                votre compta se fait automatiquement, votre marketing tourne seul.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-900 font-medium">
                  Actif immediatement<br/>
                  Support 24/7<br/>
                  Mises a jour automatiques
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/demo">
              <span className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-lg font-medium text-lg hover:bg-indigo-700 transition shadow-xl cursor-pointer">
                Voir une demo en direct
                <Rocket className="ml-2 w-5 h-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* FONCTIONNALITES CLES */}
      {/* ═══════════════════════════════════════════════════ */}

      <section className="py-20 bg-gradient-to-br from-gray-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Une plateforme complete
            </h2>
            <p className="text-xl text-indigo-200">
              Tout ce dont vous avez besoin pour gerer et developper votre activite
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: 'Agent IA 24/7',
                desc: 'Repond aux clients par WhatsApp, telephone, chat web. Prend les RDV automatiquement.',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: TrendingUp,
                title: 'Comptabilite Auto',
                desc: 'Factures, devis, relances, rapports fiscaux. Tout se genere automatiquement.',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: Sparkles,
                title: 'Marketing IA',
                desc: '500 posts/mois avec images DALL-E. Facebook, Instagram, LinkedIn, TikTok.',
                color: 'from-yellow-500 to-orange-500'
              },
              {
                icon: Users,
                title: 'CRM Intelligent',
                desc: 'Segmentation clients, scoring VIP, relances automatiques, predictions IA.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Clock,
                title: 'Reservations',
                desc: 'Widget site web, agent IA, calendrier intelligent, rappels automatiques.',
                color: 'from-indigo-500 to-purple-500'
              },
              {
                icon: Globe,
                title: 'Multi-canal',
                desc: 'WhatsApp, telephone, chat, email, reseaux sociaux. Tout centralise.',
                color: 'from-pink-500 to-rose-500'
              },
              {
                icon: Shield,
                title: 'SENTINEL',
                desc: 'Surveillance business 24/7. Alertes, predictions, auto-optimisations.',
                color: 'from-red-500 to-orange-500'
              },
              {
                icon: Zap,
                title: 'Analytics',
                desc: 'Dashboard temps reel, 25+ KPI, previsions IA, benchmark concurrence.',
                color: 'from-cyan-500 to-blue-500'
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white/5 backdrop-blur rounded-xl p-6 hover:bg-white/10 transition">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* CHIFFRES CLES */}
      {/* ═══════════════════════════════════════════════════ */}

      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">30 min</div>
              <p className="text-indigo-200">Installation complete</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <p className="text-indigo-200">Disponibilite agent IA</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">+40%</div>
              <p className="text-indigo-200">CA moyen apres 6 mois</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15h</div>
              <p className="text-indigo-200">Economisees par semaine</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* POUR QUI ? */}
      {/* ═══════════════════════════════════════════════════ */}

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              NEXUS s'adapte a votre secteur
            </h2>
            <p className="text-xl text-gray-600">
              Salons, restaurants, garages, e-commerce, consultants...
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Salons de coiffure',
                items: ['Reservations 24/7', 'Gestion stock produits', 'Marketing Instagram/TikTok', 'Planning equipe']
              },
              {
                title: 'Restaurants',
                items: ['Reservations tables', 'Commandes en ligne', 'Menu digital', 'Gestion stock cuisine']
              },
              {
                title: 'Garages auto',
                items: ['Prise RDV revision', 'Devis automatiques', 'Suivi interventions', 'Stock pieces']
              },
              {
                title: 'E-commerce',
                items: ['Boutique en ligne', 'Gestion commandes', 'Stock temps reel', 'Marketing produits']
              },
              {
                title: 'Consultants',
                items: ['Agenda intelligent', 'Propositions auto', 'Facturation', 'Suivi projets']
              },
              {
                title: 'Agences',
                items: ['Gestion projets', 'Planning equipe', 'Tickets clients', 'Rapports auto']
              }
            ].map((sector, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
                <h3 className="text-xl font-bold mb-4 text-indigo-900">{sector.title}</h3>
                <ul className="space-y-2">
                  {sector.items.map((item, j) => (
                    <li key={j} className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Votre secteur n'est pas liste ?</p>
            <Link href="/contact">
              <span className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition cursor-pointer">
                Contactez-nous
                <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* TECHNOLOGIE */}
      {/* ═══════════════════════════════════════════════════ */}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Technologie de pointe
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                NEXUS utilise les dernieres avancees en intelligence artificielle
                pour automatiser votre business avec une efficacite inegalee.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Brain className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Claude AI (Anthropic)</h3>
                    <p className="text-gray-600">
                      L'IA conversationnelle la plus avancee pour comprendre et repondre a vos clients naturellement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">DALL-E 3 (OpenAI)</h3>
                    <p className="text-gray-600">
                      Generation automatique d'images professionnelles pour vos posts reseaux sociaux.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Cloud className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Infrastructure Cloud</h3>
                    <p className="text-gray-600">
                      Hebergement ultra-performant avec 99.9% d'uptime garanti.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Lock className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Securite bancaire</h3>
                    <p className="text-gray-600">
                      Chiffrement AES-256, isolation multi-tenant, backups quotidiens, conformite RGPD.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
              <div className="bg-white rounded-xl shadow-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-400">nexus.app</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Code className="w-4 h-4 text-indigo-600 mr-2" />
                    <span className="text-gray-600">Architecture multi-tenant</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-yellow-600 mr-2" />
                    <span className="text-gray-600">API temps reel sub-seconde</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Shield className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-gray-600">Isolation donnees garantie</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Globe className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-gray-600">CDN global ultra-rapide</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center text-green-800 font-medium">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Systeme operationnel
                  </div>
                  <p className="text-sm text-green-600 mt-1">
                    Tous les services sont actifs - Latence: 0.34s
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* VISION & MISSION */}
      {/* ═══════════════════════════════════════════════════ */}

      <section className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 text-pink-400" />

          <h2 className="text-4xl font-bold mb-6">
            Notre mission
          </h2>

          <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
            Rendre l'intelligence artificielle accessible a <strong>toutes les entreprises</strong>,
            pas seulement aux geants de la tech.
          </p>

          <p className="text-lg text-indigo-200 leading-relaxed mb-8">
            Chez NEXUS, nous croyons que chaque entrepreneur merite d'avoir acces
            aux memes outils d'automatisation que les grandes entreprises.
            C'est pourquoi nous avons cree une plateforme qui se configure en 30 minutes
            et fonctionne immediatement, sans necessiter d'equipe technique.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-4xl mb-2">🎯</div>
              <h3 className="font-bold mb-2">Simplicite</h3>
              <p className="text-indigo-200 text-sm">
                Installation en 30 min, aucune competence technique requise
              </p>
            </div>
            <div>
              <div className="text-4xl mb-2">⚡</div>
              <h3 className="font-bold mb-2">Performance</h3>
              <p className="text-indigo-200 text-sm">
                Technologies de pointe pour des resultats mesurables
              </p>
            </div>
            <div>
              <div className="text-4xl mb-2">💙</div>
              <h3 className="font-bold mb-2">Transparence</h3>
              <p className="text-indigo-200 text-sm">
                Prix clairs, pas de frais caches, support reactif
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* CTA FINAL */}
      {/* ═══════════════════════════════════════════════════ */}

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-16 h-16 mx-auto mb-6 text-yellow-500" />

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Pret a automatiser votre business ?
          </h2>

          <p className="text-xl text-gray-600 mb-8">
            Rejoignez les entrepreneurs qui ont deja fait le choix de l'efficacite.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/demo">
              <span className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-lg font-medium text-lg hover:bg-indigo-700 transition shadow-xl cursor-pointer">
                Essayer gratuitement 14 jours
                <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </Link>
            <Link href="/contact">
              <span className="inline-flex items-center px-8 py-4 bg-gray-100 text-gray-900 rounded-lg font-medium text-lg hover:bg-gray-200 transition cursor-pointer">
                Voir une demo
                <Rocket className="ml-2 w-5 h-5" />
              </span>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
              Sans engagement
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
              Support 24/7
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
              Donnees securisees
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
