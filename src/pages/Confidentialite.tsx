import { Link } from 'wouter';

export default function Confidentialite() {
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
        <h1 className="text-3xl font-bold mb-8">Politique de Confidentialite</h1>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">1. Responsable du traitement</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-gray-300 space-y-2">
            <p><strong className="text-white">Identite :</strong> Nexus.AI — Issouf Toure, Entrepreneur individuel</p>
            <p><strong className="text-white">SIRET :</strong> 947 570 362 00022</p>
            <p><strong className="text-white">Adresse :</strong> 8 rue des Monts Rouges, 95130 Franconville, France</p>
            <p><strong className="text-white">Email :</strong> issouftoure58@gmail.com</p>
            <p><strong className="text-white">Telephone :</strong> +33 7 60 53 76 94</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">2. Donnees collectees</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-gray-300 space-y-3">
            <p>Dans le cadre de l'utilisation de la plateforme NEXUS, nous collectons les donnees suivantes :</p>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li><strong className="text-white">Donnees d'identification :</strong> nom, prenom, adresse email, numero de telephone</li>
              <li><strong className="text-white">Donnees professionnelles :</strong> nom de l'entreprise, secteur d'activite, adresse</li>
              <li><strong className="text-white">Donnees de facturation :</strong> informations de paiement (traitees par Stripe, nous ne stockons pas les numeros de carte)</li>
              <li><strong className="text-white">Donnees d'utilisation :</strong> logs de connexion, actions effectuees sur la plateforme</li>
              <li><strong className="text-white">Donnees des clients finaux :</strong> informations saisies par le Client dans le cadre de son utilisation de la plateforme (reservations, fiches clients, factures)</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">3. Finalites du traitement</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-gray-300 space-y-3">
            <p>Les donnees personnelles sont collectees pour les finalites suivantes :</p>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>Fourniture et gestion du service SaaS NEXUS</li>
              <li>Gestion des comptes utilisateurs et authentification</li>
              <li>Facturation et gestion des abonnements</li>
              <li>Support client et assistance technique</li>
              <li>Amelioration du service et de l'experience utilisateur</li>
              <li>Communications relatives au service (mises a jour, incidents, nouvelles fonctionnalites)</li>
              <li>Communications commerciales (uniquement avec votre consentement prealable)</li>
              <li>Respect des obligations legales et reglementaires</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">4. Base legale du traitement</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-gray-300 space-y-3">
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li><strong className="text-white">Execution du contrat :</strong> traitement necessaire a la fourniture du service (art. 6.1.b RGPD)</li>
              <li><strong className="text-white">Obligation legale :</strong> conservation des donnees de facturation (art. 6.1.c RGPD)</li>
              <li><strong className="text-white">Interet legitime :</strong> amelioration du service, securite (art. 6.1.f RGPD)</li>
              <li><strong className="text-white">Consentement :</strong> communications commerciales (art. 6.1.a RGPD)</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">5. Duree de conservation</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-gray-300 space-y-3">
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li><strong className="text-white">Donnees du compte :</strong> pendant la duree de la relation contractuelle + 3 ans apres la resiliation</li>
              <li><strong className="text-white">Donnees de facturation :</strong> 10 ans (obligation legale comptable)</li>
              <li><strong className="text-white">Logs de connexion :</strong> 12 mois</li>
              <li><strong className="text-white">Donnees de prospection :</strong> 3 ans a compter du dernier contact</li>
            </ul>
            <p>
              En cas de resiliation, le Client dispose de 30 jours pour exporter ses donnees avant suppression.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">6. Destinataires des donnees</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-gray-300 space-y-3">
            <p>Les donnees peuvent etre transmises aux destinataires suivants :</p>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li><strong className="text-white">Stripe :</strong> traitement des paiements (certifie PCI-DSS)</li>
              <li><strong className="text-white">Supabase :</strong> hebergement de la base de donnees</li>
              <li><strong className="text-white">Render :</strong> hebergement de l'application</li>
              <li><strong className="text-white">OpenAI / Anthropic :</strong> traitement IA pour l'assistant et les agents (donnees anonymisees)</li>
              <li><strong className="text-white">Twilio / WhatsApp Business :</strong> communications automatisees</li>
            </ul>
            <p>
              Aucune donnee n'est vendue a des tiers. Les sous-traitants sont selectionnes pour leur conformite
              au RGPD et font l'objet de clauses contractuelles appropriees.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">7. Transferts hors UE</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-gray-300 space-y-3">
            <p>
              Certains sous-traitants (Stripe, Supabase, Render, OpenAI) sont situes aux Etats-Unis.
              Ces transferts sont encadres par les clauses contractuelles types (SCC) de la Commission europeenne
              et/ou le Data Privacy Framework EU-US, conformement aux exigences du RGPD.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">8. Cookies</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-gray-300 space-y-3">
            <p>
              La plateforme NEXUS utilise uniquement des cookies strictement necessaires au fonctionnement du service :
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li><strong className="text-white">Cookies de session :</strong> maintien de la connexion utilisateur</li>
              <li><strong className="text-white">Cookies de preferences :</strong> langue, theme, parametres d'affichage</li>
            </ul>
            <p>
              Aucun cookie publicitaire, de tracking ou de profilage n'est utilise.
              Ces cookies etant strictement necessaires, ils ne requierent pas de consentement prealable
              (art. 82 de la loi Informatique et Libertes).
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">9. Securite des donnees</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-gray-300 space-y-3">
            <p>Nous mettons en oeuvre les mesures techniques et organisationnelles suivantes :</p>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>Chiffrement des donnees en transit (HTTPS/TLS) et au repos</li>
              <li>Authentification securisee avec hachage des mots de passe (bcrypt)</li>
              <li>Isolation des donnees par tenant (architecture multi-tenant Row-Level Security)</li>
              <li>Sauvegardes automatiques quotidiennes</li>
              <li>Acces restreint aux donnees selon le principe du moindre privilege</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">10. Vos droits</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-gray-300 space-y-3">
            <p>
              Conformement au RGPD et a la loi Informatique et Libertes, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li><strong className="text-white">Droit d'acces :</strong> obtenir une copie de vos donnees personnelles</li>
              <li><strong className="text-white">Droit de rectification :</strong> corriger des donnees inexactes ou incompletes</li>
              <li><strong className="text-white">Droit d'effacement :</strong> demander la suppression de vos donnees</li>
              <li><strong className="text-white">Droit de portabilite :</strong> recevoir vos donnees dans un format structure et lisible</li>
              <li><strong className="text-white">Droit d'opposition :</strong> vous opposer au traitement de vos donnees</li>
              <li><strong className="text-white">Droit a la limitation :</strong> demander la limitation du traitement</li>
              <li><strong className="text-white">Retrait du consentement :</strong> retirer votre consentement a tout moment pour les communications commerciales</li>
            </ul>
            <p className="mt-3">
              Pour exercer vos droits, contactez-nous a : <span className="text-cyan-400">issouftoure58@gmail.com</span>
            </p>
            <p>
              Nous nous engageons a repondre dans un delai de 30 jours. En cas de litige non resolu,
              vous pouvez saisir la CNIL : <span className="text-cyan-400">www.cnil.fr</span>
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
