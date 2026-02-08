import { useState, useEffect } from 'react';
import { Switch, Route, Link, useLocation, Redirect } from 'wouter';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Features from './pages/Features';
import Contact from './pages/Contact';
import Demo from './pages/Demo';

// Scroll to top on route change
function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

// NEXUS Operator Dashboard pages
import NexusLogin from './pages/nexus/NexusLogin';
import NexusDashboard from './pages/nexus/NexusDashboard';
import NexusTenants from './pages/nexus/NexusTenants';
import NexusSentinel from './pages/nexus/NexusSentinel';
import NexusSettings from './pages/nexus/NexusSettings';
import NexusBilling from './pages/nexus/NexusBilling';

function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/about', label: 'A propos' },
    { href: '/features', label: 'Fonctionnalites' },
    { href: '/demo', label: 'Demo Live', highlight: true },
    { href: '/pricing', label: 'Tarifs' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/">
          <span className="text-xl font-bold tracking-tight">NEXUS</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}>
              {link.highlight ? (
                <span className={`inline-flex items-center gap-1.5 text-sm font-medium transition ${location === link.href ? 'text-cyan-600' : 'text-cyan-600 hover:text-cyan-700'}`}>
                  <span>🎬</span>
                  {link.label}
                  <span className="px-1.5 py-0.5 text-[10px] font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full">
                    NOUVEAU
                  </span>
                </span>
              ) : (
                <span className={`text-sm font-medium transition ${location === link.href ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}>
                  {link.label}
                </span>
              )}
            </Link>
          ))}
          <Link href="/nexus/login">
            <span className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition">
              Connexion
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href}>
                <span
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-base font-medium transition ${
                    location === link.href
                      ? link.highlight ? 'text-cyan-600' : 'text-gray-900'
                      : link.highlight ? 'text-cyan-600' : 'text-gray-500'
                  }`}
                >
                  {link.highlight && <span className="mr-2">🎬</span>}
                  {link.label}
                  {link.highlight && (
                    <span className="ml-2 px-1.5 py-0.5 text-[10px] font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full">
                      NOUVEAU
                    </span>
                  )}
                </span>
              </Link>
            ))}
            <Link href="/nexus/login">
              <span
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition mt-4"
              >
                Connexion
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* CTA Demo Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 border border-cyan-500/20">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Prêt à tester NEXUS ?</h3>
              <p className="text-gray-400">Explorez le dashboard interactif en 2 minutes, sans inscription</p>
            </div>
            <Link href="/demo">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                🎬 Lancer la démo interactive
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-3">NEXUS</h3>
              <p className="text-sm">
                La plateforme SaaS universelle pour propulser votre business.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Produit</h4>
              <div className="space-y-2 text-sm">
                <Link href="/features"><span className="hover:text-white transition block">Fonctionnalités</span></Link>
                <Link href="/demo"><span className="hover:text-white transition block text-cyan-400">🎬 Démo interactive</span></Link>
                <Link href="/pricing"><span className="hover:text-white transition block">Tarifs</span></Link>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Ressources</h4>
              <div className="space-y-2 text-sm">
                <Link href="/contact"><span className="hover:text-white transition block">Contact</span></Link>
                <Link href="/demo"><span className="hover:text-white transition block">Essayer gratuitement</span></Link>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Contact</h4>
              <div className="space-y-2 text-sm">
                <p>contact@nexus.app</p>
                <p>07 82 23 50 20</p>
                <p>Ile-de-France, France</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
            &copy; {new Date().getFullYear()} NEXUS. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
}

// Protected route for NEXUS operator dashboard
function NexusProtectedRoute({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem('admin_token');
  const user = localStorage.getItem('admin_user');

  if (!token || !user) {
    return <Redirect to="/nexus/login" />;
  }

  try {
    const userData = JSON.parse(user);
    if (userData.role !== 'super_admin') {
      return <Redirect to="/nexus/login" />;
    }
  } catch {
    return <Redirect to="/nexus/login" />;
  }

  return <>{children}</>;
}

export default function App() {
  const [location] = useLocation();

  // Demo page has its own layout
  if (location === '/demo') {
    return <Demo />;
  }

  // NEXUS dashboard pages have their own layout (dark theme)
  const isNexusRoute = location.startsWith('/nexus');

  if (isNexusRoute) {
    return (
      <>
      <ScrollToTop />
      <Switch>
        <Route path="/nexus/login" component={NexusLogin} />
        <Route path="/nexus/dashboard">
          <NexusProtectedRoute><NexusDashboard /></NexusProtectedRoute>
        </Route>
        <Route path="/nexus/tenants">
          <NexusProtectedRoute><NexusTenants /></NexusProtectedRoute>
        </Route>
        <Route path="/nexus/sentinel/:tab?">
          <NexusProtectedRoute><NexusSentinel /></NexusProtectedRoute>
        </Route>
        <Route path="/nexus/settings">
          <NexusProtectedRoute><NexusSettings /></NexusProtectedRoute>
        </Route>
        <Route path="/nexus/billing">
          <NexusProtectedRoute><NexusBilling /></NexusProtectedRoute>
        </Route>
        <Route path="/nexus">
          <Redirect to="/nexus/dashboard" />
        </Route>
      </Switch>
      </>
    );
  }

  // Public commercial pages with Navbar/Footer
  return (
    <>
    <ScrollToTop />
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/features" component={Features} />
          <Route path="/contact" component={Contact} />
          <Route>
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">404</h1>
                <p className="text-gray-600 mb-6">Page non trouvee</p>
                <Link href="/">
                  <span className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition">
                    Retour a l'accueil
                  </span>
                </Link>
              </div>
            </div>
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
    </>
  );
}
