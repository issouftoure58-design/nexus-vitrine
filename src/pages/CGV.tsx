import { Link } from 'wouter';

export default function CGV() {
  return (
    <div className="min-h-screen bg-dark-950 text-white">
      <header className="border-b border-white/10 py-4 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/">
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer">
              NEXUS
            </span>
          </Link>
          <Link href="/">
            <span className="text-sm text-gray-400 hover:text-white transition cursor-pointer">
              &larr; Retour au site
            </span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Conditions Generales de Vente</h1>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">Article 1 — Objet</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-gray-300 space-y-3">
            <p>
              Les presentes Conditions Generales de Vente (CGV) regissent les relations contractuelles entre
              Nexus.AI, entreprise individuelle exploitee par Issouf Toure (SIRET 947 570 362 00022),
              ci-apres "l'Editeur", et toute personne physique ou morale souscrivant a la plateforme NEXUS,
              ci-apres "le Client".
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">Article 2 — Services proposes</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-gray-300 space-y-3">
            <p>
              NEXUS est une plateforme SaaS (Software as a Service) de gestion d'entreprise proposant :
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>Gestion de reservations et agenda en ligne</li>
              <li>Facturation et paiements en ligne (Stripe)</li>
              <li>CRM et gestion de la relation client</li>
              <li>Assistant IA pour la gestion administrative</li>
              <li>Agents IA de reservation (web, WhatsApp, telephone)</li>
              <li>Marketing automation, comptabilite, stock, RH selon le plan choisi</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">Article 3 — Tarifs et plans</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-gray-300 space-y-3">
            <p>Les plans tarifaires sont les suivants :</p>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li><strong className="text-white">Starter :</strong> 99 EUR/mois — 7 modules essentiels</li>
              <li><strong className="text-white">Pro :</strong> 249 EUR/mois — 14 modules (Starter + 7 modules avances)</li>
              <li><strong className="text-white">Business :</strong> 499 EUR/mois — 20 modules (Pro + 6 modules premium)</li>
            </ul>
            <p className="mt-3">
              TVA non applicable, article 293 B du Code general des impots. Les prix affiches sont nets.
            </p>
            <p>
              Les tarifs peuvent etre revises. Toute modification sera communiquee au Client 30 jours avant
              son entree en vigueur.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">Article 4 — Essai gratuit et abonnement</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-gray-300 space-y-3">
            <p>
              Chaque nouveau Client beneficie d'un essai gratuit de 14 jours, sans engagement et sans carte bancaire.
            </p>
            <p>
              A l'issue de la periode d'essai, le Client peut souscrire a un abonnement mensuel ou annuel.
              L'abonnement annuel beneficie d'une remise de 17%.
            </p>
            <p>
              L'abonnement est reconduit tacitement chaque mois ou chaque annee selon la periodicite choisie.
              Le Client peut resilier a tout moment depuis son espace d'administration, avec effet a la fin de
              la periode en cours.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">Article 5 — Paiement</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-gray-300 space-y-3">
            <p>
              Le paiement s'effectue par carte bancaire via la plateforme securisee Stripe. Le prelevement
              est automatique a chaque echeance.
            </p>
            <p>
              En cas d'echec de paiement, le Client sera notifie par email. Un delai de 7 jours est accorde
              pour regulariser la situation. Passe ce delai, l'acces au service peut etre suspendu.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">Article 6 — Responsabilite</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-gray-300 space-y-3">
            <p>
              L'Editeur s'engage a fournir un service de qualite avec une disponibilite cible de 99%.
              Toutefois, l'Editeur ne saurait etre tenu responsable des interruptions liees a la maintenance,
              aux mises a jour, ou a des evenements de force majeure.
            </p>
            <p>
              Le Client est seul responsable de l'utilisation qu'il fait de la plateforme et des donnees qu'il y saisit.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">Article 7 — Donnees et propriete</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-gray-300 space-y-3">
            <p>
              Le Client reste proprietaire de l'ensemble de ses donnees saisies sur la plateforme.
              En cas de resiliation, le Client peut exporter ses donnees pendant 30 jours suivant la fin
              de l'abonnement.
            </p>
            <p>
              L'Editeur s'engage a ne pas utiliser les donnees du Client a des fins commerciales et a respecter
              les obligations du RGPD en tant que sous-traitant des donnees.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">Article 8 — Litiges</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-gray-300 space-y-3">
            <p>
              Les presentes CGV sont soumises au droit francais. En cas de litige, les parties s'engagent
              a rechercher une solution amiable. A defaut, le litige sera porte devant les tribunaux competents
              de Pontoise (95).
            </p>
            <p>
              Mediateur de la consommation : CM2C — 14 rue Saint Jean, 75017 Paris — www.cm2c.net
            </p>
          </div>
        </section>

        <div className="text-center text-gray-500 text-sm mt-12">
          <p>Derniere mise a jour : 1er mars 2026</p>
          <p className="mt-1">Nexus.AI — SIRET 947 570 362 00022</p>
        </div>
      </main>
    </div>
  );
}
