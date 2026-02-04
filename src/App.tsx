import { Switch, Route, Link, useLocation } from 'wouter';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Features from './pages/Features';
import Contact from './pages/Contact';

function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: '/', label: 'Accueil' },
    { href: '/features', label: 'Fonctionnalites' },
    { href: '/pricing', label: 'Tarifs' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/">
          <span className="text-xl font-bold tracking-tight">NEXUS</span>
        </Link>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`text-sm font-medium transition ${
                  location === link.href
                    ? 'text-gray-900'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <a
            href="https://app.nexus.app"
            className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition"
          >
            Connexion
          </a>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">NEXUS</h3>
            <p className="text-sm">
              La plateforme SaaS universelle pour propulser votre business.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Produit</h4>
            <div className="space-y-2 text-sm">
              <Link href="/features"><span className="hover:text-white transition block">Fonctionnalites</span></Link>
              <Link href="/pricing"><span className="hover:text-white transition block">Tarifs</span></Link>
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
          &copy; {new Date().getFullYear()} NEXUS. Tous droits reserves.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
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
  );
}
