import { Link } from 'wouter';

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-dark-950 text-white">
      {/* Header */}
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
        <h1 className="text-3xl font-bold mb-8">Mentions Legales</h1>

        {/* Editeur */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">1. Editeur du site</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2 text-gray-300">
            <p><strong className="text-white">Raison sociale :</strong> Nexus.AI</p>
            <p><strong className="text-white">Forme juridique :</strong> Entrepreneur individuel (Micro-entreprise)</p>
            <p><strong className="text-white">Dirigeant :</strong> Issouf Toure</p>
            <p><strong className="text-white">SIREN :</strong> 947 570 362</p>
            <p><strong className="text-white">SIRET :</strong> 947 570 362 00022</p>
            <p><strong className="text-white">Code APE :</strong> 5829C - Edition de logiciels</p>
            <p><strong className="text-white">Adresse :</strong> 8 rue des Monts Rouges, 95130 Franconville, France</p>
            <p><strong className="text-white">Telephone :</strong> +33 7 60 53 76 94</p>
            <p><strong className="text-white">Email :</strong> issouftoure58@gmail.com</p>
            <p><strong className="text-white">Date d'immatriculation :</strong> 20 fevrier 2026</p>
          </div>
        </section>

        {/* TVA */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">2. Regime fiscal</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2 text-gray-300">
            <p><strong className="text-white">Regime d'imposition :</strong> Micro-BIC</p>
            <p><strong className="text-white">TVA :</strong> TVA non applicable, article 293 B du Code general des impots (franchise en base)</p>
            <p><strong className="text-white">Versement microsocial :</strong> Mensuel</p>
          </div>
        </section>

        {/* Activite */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">3. Activite</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2 text-gray-300">
            <p>
              Edition et commercialisation de logiciels de gestion d'entreprise en mode SaaS (Software as a Service).
            </p>
            <p>
              NEXUS est une plateforme SaaS multi-tenant permettant aux PME et professionnels de gerer leur activite
              (reservations, facturation, CRM, marketing, comptabilite) avec assistance par intelligence artificielle.
            </p>
          </div>
        </section>

        {/* Hebergement */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">4. Hebergement</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2 text-gray-300">
            <p><strong className="text-white">Hebergeur :</strong> Render Services, Inc.</p>
            <p><strong className="text-white">Adresse :</strong> 525 Brannan Street, Suite 300, San Francisco, CA 94107, USA</p>
            <p><strong className="text-white">Site web :</strong> https://render.com</p>
            <p className="mt-2">
              <strong className="text-white">Base de donnees :</strong> Supabase, Inc. — https://supabase.com
            </p>
          </div>
        </section>

        {/* Propriete intellectuelle */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">5. Propriete intellectuelle</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-gray-300 space-y-3">
            <p>
              L'ensemble du contenu de ce site (textes, images, logos, logiciels, code source) est la propriete
              exclusive de Nexus.AI / Issouf Toure et est protege par les lois francaises et internationales relatives
              a la propriete intellectuelle.
            </p>
            <p>
              Toute reproduction, representation, modification ou exploitation non autorisee de tout ou partie du site
              est interdite et constituerait une contrefacon sanctionnee par les articles L.335-2 et suivants du Code
              de la Propriete Intellectuelle.
            </p>
          </div>
        </section>

        {/* Donnees personnelles */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">6. Donnees personnelles et RGPD</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-gray-300 space-y-3">
            <p>
              Conformement au Reglement General sur la Protection des Donnees (RGPD) et a la loi Informatique et
              Libertes, vous disposez d'un droit d'acces, de rectification, d'effacement, de portabilite et
              d'opposition concernant vos donnees personnelles.
            </p>
            <p>
              <strong className="text-white">Responsable du traitement :</strong> Issouf Toure — issouftoure58@gmail.com
            </p>
            <p>
              <strong className="text-white">Donnees collectees :</strong> Nom, prenom, email, telephone,
              donnees d'utilisation de la plateforme, donnees de facturation.
            </p>
            <p>
              <strong className="text-white">Finalites :</strong> Fourniture du service SaaS, facturation, support client,
              amelioration du service, communications commerciales (avec consentement).
            </p>
            <p>
              <strong className="text-white">Duree de conservation :</strong> Les donnees sont conservees pendant la duree
              de la relation contractuelle et jusqu'a 3 ans apres la fin du contrat. Les donnees comptables sont conservees
              10 ans conformement aux obligations legales.
            </p>
            <p>
              Pour exercer vos droits, contactez-nous a issouftoure58@gmail.com. En cas de litige, vous pouvez saisir
              la CNIL (www.cnil.fr).
            </p>
          </div>
        </section>

        {/* Cookies */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">7. Cookies</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-gray-300 space-y-3">
            <p>
              Ce site utilise des cookies strictement necessaires au fonctionnement du service (authentification, session).
              Aucun cookie publicitaire ou de tracking n'est utilise.
            </p>
          </div>
        </section>

        {/* Mediation */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">8. Mediation et litiges</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-gray-300 space-y-3">
            <p>
              Conformement aux articles L.616-1 et R.616-1 du Code de la consommation, en cas de litige non resolu
              a l'amiable, le consommateur peut recourir gratuitement au service de mediation :
            </p>
            <p className="text-cyan-400">
              CM2C — 14 rue Saint Jean, 75017 Paris — www.cm2c.net
            </p>
            <p>
              Les presentes mentions legales sont soumises au droit francais. En cas de litige, les tribunaux
              francais seront seuls competents.
            </p>
          </div>
        </section>

        {/* Date MAJ */}
        <div className="text-center text-gray-500 text-sm mt-12">
          <p>Derniere mise a jour : 1er mars 2026</p>
        </div>
      </main>
    </div>
  );
}
