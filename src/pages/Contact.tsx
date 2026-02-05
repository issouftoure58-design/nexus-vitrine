import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Clock, MessageCircle } from 'lucide-react';

const BUSINESS_TYPES = [
  { value: '', label: 'Selectionnez votre activite...' },
  { value: 'coiffure', label: 'Coiffure / Barbier' },
  { value: 'beaute', label: 'Institut de beaute / Spa' },
  { value: 'restaurant', label: 'Restaurant / Cafe' },
  { value: 'hotel', label: 'Hotel / Hebergement' },
  { value: 'sante', label: 'Sante / Bien-etre' },
  { value: 'commerce', label: 'Commerce / Boutique' },
  { value: 'service', label: 'Service a domicile' },
  { value: 'autre', label: 'Autre' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulation envoi (TODO: connecter a l'API)
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form data:', formData);
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-24 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Message envoye !</h2>
          <p className="text-gray-600 mb-6">
            Nous vous recontactons sous 24h pour planifier votre demo personnalisee.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: '', email: '', phone: '', business: '', message: '' });
            }}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Envoyer un autre message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Parlons de votre projet
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Une question ? Besoin d'une demo ? Notre equipe vous repond sous 24h.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info - 2 colonnes */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos coordonnees</h2>
                <div className="space-y-4">
                  <a
                    href="mailto:contact@nexus-platform.fr"
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Email</div>
                      <div className="font-medium text-gray-900">contact@nexus-platform.fr</div>
                    </div>
                  </a>

                  <a
                    href="tel:+33782235020"
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Telephone</div>
                      <div className="font-medium text-gray-900">07 82 23 50 20</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Localisation</div>
                      <div className="font-medium text-gray-900">Paris, Ile-de-France</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info box */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl text-white">
                <h3 className="text-lg font-bold mb-4">Pourquoi nous contacter ?</h3>
                <ul className="space-y-3">
                  {[
                    { icon: MessageCircle, text: 'Demo personnalisee gratuite' },
                    { icon: Clock, text: 'Reponse sous 24h garantie' },
                    { icon: Check, text: 'Conseil adapte a votre activite' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form - 3 colonnes */}
            <div className="lg:col-span-3">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                        placeholder="jean@exemple.fr"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telephone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Type d'activite
                      </label>
                      <select
                        value={formData.business}
                        onChange={e => setFormData({ ...formData, business: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
                      >
                        {BUSINESS_TYPES.map(type => (
                          <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none outline-none transition"
                      placeholder="Decrivez votre projet ou posez vos questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer le message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    En envoyant ce formulaire, vous acceptez d'etre recontacte par notre equipe.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
