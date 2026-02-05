import { API_BASE } from '../../../lib/api';
import { useState } from 'react';

interface Explanation {
  id: string;
  topic: string;
  question: string;
  answer: string;
  sources?: string[];
  timestamp: string;
}

const QUICK_QUESTIONS = [
  { id: 'costs', label: 'Couts IA', question: 'Pourquoi mes couts IA ont augmente ce mois-ci ?' },
  { id: 'errors', label: 'Erreurs', question: 'Quelles sont les erreurs les plus frequentes et comment les corriger ?' },
  { id: 'performance', label: 'Performance', question: 'Comment ameliorer la performance de ma plateforme ?' },
  { id: 'security', label: 'Securite', question: 'Y a-t-il des problemes de securite a resoudre ?' },
  { id: 'health', label: 'Sante', question: 'Quel est l\'etat de sante global de ma plateforme ?' },
  { id: 'optimize', label: 'Optimisation', question: 'Quelles optimisations me recommandes-tu ?' },
];

export default function SentinelExplainer() {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [explanations, setExplanations] = useState<Explanation[]>([]);
  const [error, setError] = useState<string | null>(null);

  const askQuestion = async (q: string) => {
    if (!q.trim()) return;

    setLoading(true);
    setError(null);
    setQuestion('');

    try {
      const token = localStorage.getItem('admin_token');
      const res = await fetch(API_BASE + '/api/nexus/sentinel/explainer/ask', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: q }),
      });

      if (res.ok) {
        const json = await res.json();
        const explanation: Explanation = {
          id: Date.now().toString(),
          topic: json.topic || 'general',
          question: q,
          answer: json.answer || json.explanation || json.data?.answer || 'Analyse en cours...',
          sources: json.sources || [],
          timestamp: new Date().toISOString(),
        };
        setExplanations(prev => [explanation, ...prev]);
      } else {
        // Generate local explanation if API not available
        const localExplanation = generateLocalExplanation(q);
        setExplanations(prev => [localExplanation, ...prev]);
      }
    } catch {
      // Generate local explanation on error
      const localExplanation = generateLocalExplanation(q);
      setExplanations(prev => [localExplanation, ...prev]);
    } finally {
      setLoading(false);
    }
  };

  const generateLocalExplanation = (q: string): Explanation => {
    const lowerQ = q.toLowerCase();
    let answer = '';
    let topic = 'general';

    if (lowerQ.includes('cout') || lowerQ.includes('cost') || lowerQ.includes('prix')) {
      topic = 'costs';
      answer = `**Analyse des couts IA**

Les couts IA dependent de plusieurs facteurs :

1. **Volume de requetes** - Chaque appel a l'API Anthropic/OpenAI est facture
2. **Longueur des conversations** - Plus le contexte est long, plus c'est cher
3. **Modele utilise** - Claude Opus > Sonnet > Haiku en termes de cout

**Recommandations :**
- Utiliser le cache de reponses pour les questions frequentes
- Limiter la longueur du contexte envoye
- Basculer vers Haiku pour les taches simples
- Activer l'Autopilot pour optimiser automatiquement`;
    } else if (lowerQ.includes('erreur') || lowerQ.includes('error')) {
      topic = 'errors';
      answer = `**Analyse des erreurs**

Les erreurs les plus courantes sont :

1. **Timeout API** - Les requetes IA prennent trop de temps
   → Solution : Augmenter le timeout ou optimiser les prompts

2. **Rate limiting** - Trop de requetes simultanees
   → Solution : Implementer une file d'attente

3. **Erreurs 500** - Problemes serveur internes
   → Solution : Verifier les logs et la memoire disponible

**Actions immediates :**
- Consulter l'onglet Securite pour les details
- Verifier les logs dans la Console`;
    } else if (lowerQ.includes('performance') || lowerQ.includes('lent') || lowerQ.includes('rapide')) {
      topic = 'performance';
      answer = `**Analyse de performance**

Facteurs affectant la performance :

1. **Latence API** - Temps de reponse des services externes
2. **Charge serveur** - CPU et memoire utilises
3. **Base de donnees** - Requetes lentes ou non optimisees

**Optimisations recommandees :**
- Activer le cache Redis pour les donnees frequentes
- Indexer les colonnes de recherche en BDD
- Utiliser la compression gzip
- Mettre en place un CDN pour les assets statiques`;
    } else if (lowerQ.includes('securite') || lowerQ.includes('security') || lowerQ.includes('attaque')) {
      topic = 'security';
      answer = `**Analyse de securite**

Le bouclier Sentinel surveille :

1. **Injections SQL/XSS** - Tentatives de code malveillant
2. **Brute force** - Tentatives de connexion repetees
3. **DDoS** - Pics de trafic anormaux
4. **Rate limiting** - Abus d'API

**Etat actuel :**
- Protection active 24/7
- Auto-ban apres 10 violations
- Limite : 20 req/min, 200/heure

Consultez l'onglet Securite pour les evenements recents.`;
    } else if (lowerQ.includes('sante') || lowerQ.includes('health') || lowerQ.includes('etat')) {
      topic = 'health';
      answer = `**Score de sante plateforme**

Le score est calcule sur 5 criteres :

| Critere | Poids |
|---------|-------|
| Uptime services | 35% |
| Latence | 20% |
| Securite | 20% |
| Performance | 15% |
| Stabilite | 10% |

**Interpretation :**
- 80-100 : Excellent
- 60-79 : Bon
- 40-59 : Attention requise
- 0-39 : Critique

Consultez l'onglet Overview pour le score actuel.`;
    } else {
      answer = `**Analyse generale**

Je peux vous aider a comprendre :

- **Couts** - Pourquoi vos depenses IA varient
- **Erreurs** - Les problemes et leurs solutions
- **Performance** - Comment accelerer votre plateforme
- **Securite** - Les menaces detectees et bloquees
- **Sante** - L'etat global de vos services

Posez une question specifique ou cliquez sur un bouton rapide ci-dessus.`;
    }

    return {
      id: Date.now().toString(),
      topic,
      question: q,
      answer,
      timestamp: new Date().toISOString(),
    };
  };

  const formatTime = (ts: string) => {
    try {
      return new Date(ts).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    } catch { return ''; }
  };

  return (
    <div className="space-y-4">
      {/* Quick questions */}
      <div className="flex flex-wrap gap-2">
        {QUICK_QUESTIONS.map(q => (
          <button
            key={q.id}
            onClick={() => askQuestion(q.question)}
            disabled={loading}
            className="px-3 py-1.5 text-xs bg-slate-800/50 text-slate-400 border border-slate-700 rounded-lg hover:bg-slate-800 hover:text-white transition disabled:opacity-50"
          >
            {q.label}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && askQuestion(question)}
          placeholder="Posez une question sur votre plateforme..."
          disabled={loading}
          className="flex-1 px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-600 disabled:opacity-50"
        />
        <button
          onClick={() => askQuestion(question)}
          disabled={loading || !question.trim()}
          className="px-4 py-2 bg-cyan-900/50 text-cyan-400 border border-cyan-700 rounded-lg text-sm hover:bg-cyan-900 transition disabled:opacity-50"
        >
          {loading ? '...' : 'Analyser'}
        </button>
      </div>

      {error && (
        <div className="p-3 bg-red-950/30 border border-red-800 rounded-lg text-sm text-red-400">
          {error}
        </div>
      )}

      {/* Explanations */}
      <div className="space-y-3">
        {explanations.length === 0 ? (
          <div className="bg-slate-900 rounded-lg border border-slate-800 p-8 text-center">
            <div className="text-slate-400 text-sm">Posez une question</div>
            <div className="text-[10px] text-slate-600 mt-1">
              L'IA analysera vos donnees et expliquera en langage simple
            </div>
          </div>
        ) : (
          explanations.map(exp => (
            <div key={exp.id} className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden">
              {/* Question */}
              <div className="px-4 py-2 bg-slate-800/50 border-b border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">Q:</span>
                  <span className="text-sm text-white">{exp.question}</span>
                </div>
                <span className="text-[10px] text-slate-600">{formatTime(exp.timestamp)}</span>
              </div>
              {/* Answer */}
              <div className="px-4 py-3">
                <div className="text-sm text-slate-300 whitespace-pre-wrap leading-relaxed prose prose-invert prose-sm max-w-none">
                  {exp.answer.split('\n').map((line, i) => {
                    if (line.startsWith('**') && line.endsWith('**')) {
                      return <div key={i} className="font-bold text-white mt-2 mb-1">{line.replace(/\*\*/g, '')}</div>;
                    }
                    if (line.startsWith('- ') || line.startsWith('* ')) {
                      return <div key={i} className="ml-4 text-slate-400">{line}</div>;
                    }
                    if (line.match(/^\d+\./)) {
                      return <div key={i} className="ml-2 text-slate-300">{line}</div>;
                    }
                    if (line.includes('|')) {
                      return <div key={i} className="font-mono text-[11px] text-slate-500">{line}</div>;
                    }
                    return <div key={i}>{line}</div>;
                  })}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Info */}
      <div className="bg-slate-800/30 rounded-lg border border-slate-700/50 p-3 flex items-start gap-2">
        <span className="w-2 h-2 mt-1 bg-purple-500 rounded-full flex-shrink-0" />
        <div className="text-[11px] text-slate-500">
          <strong className="text-slate-400">Explainer :</strong> Posez des questions en francais sur vos couts, erreurs, performance ou securite. L'IA analyse vos donnees et repond en langage simple.
        </div>
      </div>
    </div>
  );
}
