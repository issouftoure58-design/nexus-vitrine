import { API_BASE } from '../../../lib/api';
import { useState, useEffect, useRef } from 'react';

interface LiveEvent {
  id: string;
  type: 'request' | 'error' | 'security' | 'system' | 'ai';
  severity: 'info' | 'warning' | 'error' | 'critical';
  message: string;
  details?: string;
  timestamp: string;
  source?: string;
  duration?: number;
}

const EVENT_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
  request: { bg: 'bg-blue-950/30', text: 'text-blue-400', dot: 'bg-blue-400' },
  error: { bg: 'bg-red-950/30', text: 'text-red-400', dot: 'bg-red-500' },
  security: { bg: 'bg-orange-950/30', text: 'text-orange-400', dot: 'bg-orange-500' },
  system: { bg: 'bg-slate-800/50', text: 'text-slate-400', dot: 'bg-slate-400' },
  ai: { bg: 'bg-purple-950/30', text: 'text-purple-400', dot: 'bg-purple-500' },
};

const SEVERITY_COLORS: Record<string, string> = {
  info: 'text-slate-400',
  warning: 'text-yellow-400',
  error: 'text-red-400',
  critical: 'text-red-500 font-bold',
};

export default function SentinelLivePulse() {
  const [events, setEvents] = useState<LiveEvent[]>([]);
  const [connected, setConnected] = useState(false);
  const [paused, setPaused] = useState(false);
  const [filter, setFilter] = useState<string>('all');
  const [stats, setStats] = useState({ total: 0, errors: 0, requests: 0, security: 0 });
  const eventsRef = useRef<HTMLDivElement>(null);
  const maxEvents = 100;

  // Fetch initial events and poll for new ones
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const token = localStorage.getItem('admin_token');
        const res = await fetch(API_BASE + '/api/nexus/sentinel/live/events', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (res.ok) {
          const json = await res.json();
          const data = json.data ?? json.events ?? json;
          if (Array.isArray(data)) {
            setEvents(prev => {
              const newEvents = [...data, ...prev].slice(0, maxEvents);
              return newEvents;
            });
          }
          setConnected(true);
        }
      } catch {
        setConnected(false);
      }
    };

    // Fetch stats
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('admin_token');
        const res = await fetch(API_BASE + '/api/nexus/sentinel/live/stats', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (res.ok) {
          const json = await res.json();
          setStats(json.data ?? json);
        }
      } catch {}
    };

    fetchEvents();
    fetchStats();

    // Poll every 3 seconds if not paused
    const interval = setInterval(() => {
      if (!paused) {
        fetchEvents();
        fetchStats();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [paused]);

  // Auto-scroll to top when new events arrive
  useEffect(() => {
    if (!paused && eventsRef.current) {
      eventsRef.current.scrollTop = 0;
    }
  }, [events, paused]);

  // Simulate events for demo if no real events
  useEffect(() => {
    if (events.length === 0 && connected) {
      const demoEvents: LiveEvent[] = [
        { id: '1', type: 'request', severity: 'info', message: 'GET /api/health', details: '200 OK', timestamp: new Date().toISOString(), duration: 45 },
        { id: '2', type: 'system', severity: 'info', message: 'Server started', details: 'Port 5000', timestamp: new Date(Date.now() - 60000).toISOString() },
        { id: '3', type: 'ai', severity: 'info', message: 'Halimah response generated', details: '1.2s latency', timestamp: new Date(Date.now() - 120000).toISOString() },
      ];
      setEvents(demoEvents);
    }
  }, [connected, events.length]);

  const filteredEvents = filter === 'all' ? events : events.filter(e => e.type === filter);

  const formatTime = (ts: string) => {
    try {
      const d = new Date(ts);
      return d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    } catch { return '---'; }
  };

  return (
    <div className="space-y-4">
      {/* Header with stats */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-2 h-2 rounded-full ${connected ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
          <span className="text-xs text-slate-400">{connected ? 'Connecte' : 'Deconnecte'}</span>
        </div>
        <div className="flex items-center gap-4 text-[10px] text-slate-500">
          <span>Total: <span className="text-white font-mono">{stats.total}</span></span>
          <span>Requetes: <span className="text-blue-400 font-mono">{stats.requests}</span></span>
          <span>Erreurs: <span className="text-red-400 font-mono">{stats.errors}</span></span>
          <span>Securite: <span className="text-orange-400 font-mono">{stats.security}</span></span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex gap-1">
          {['all', 'request', 'error', 'security', 'system', 'ai'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-2 py-1 text-[10px] rounded transition ${
                filter === f
                  ? 'bg-cyan-900/50 text-cyan-400 border border-cyan-700'
                  : 'bg-slate-800/50 text-slate-500 hover:text-slate-300'
              }`}
            >
              {f === 'all' ? 'Tout' : f}
            </button>
          ))}
        </div>
        <button
          onClick={() => setPaused(!paused)}
          className={`px-3 py-1 text-[10px] rounded transition ${
            paused
              ? 'bg-green-900/50 text-green-400 border border-green-700'
              : 'bg-slate-800/50 text-slate-400 hover:text-white'
          }`}
        >
          {paused ? '▶ Reprendre' : '⏸ Pause'}
        </button>
      </div>

      {/* Events stream */}
      <div
        ref={eventsRef}
        className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden"
      >
        <div className="px-3 py-2 border-b border-slate-800 flex items-center justify-between">
          <span className="text-xs font-medium text-white">Flux temps reel</span>
          <span className="text-[10px] text-slate-600">{filteredEvents.length} evenements</span>
        </div>

        <div className="max-h-[500px] overflow-y-auto">
          {filteredEvents.length === 0 ? (
            <div className="p-8 text-center">
              <div className="text-slate-500 text-sm">Aucun evenement</div>
              <div className="text-[10px] text-slate-600 mt-1">Les evenements apparaitront ici en temps reel</div>
            </div>
          ) : (
            filteredEvents.map((event, i) => {
              const colors = EVENT_COLORS[event.type] || EVENT_COLORS.system;
              return (
                <div
                  key={event.id || i}
                  className={`flex items-start gap-3 px-3 py-2 border-b border-slate-800/50 hover:bg-slate-800/30 transition ${
                    i === 0 && !paused ? 'animate-pulse' : ''
                  }`}
                >
                  <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${colors.dot}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] px-1.5 py-0.5 rounded ${colors.bg} ${colors.text}`}>
                        {event.type}
                      </span>
                      <span className={`text-[10px] ${SEVERITY_COLORS[event.severity]}`}>
                        {event.severity}
                      </span>
                      {event.duration && (
                        <span className="text-[10px] text-slate-600 font-mono">{event.duration}ms</span>
                      )}
                    </div>
                    <div className="text-xs text-white mt-0.5 truncate">{event.message}</div>
                    {event.details && (
                      <div className="text-[10px] text-slate-500 mt-0.5 truncate">{event.details}</div>
                    )}
                  </div>
                  <span className="text-[10px] text-slate-600 font-mono flex-shrink-0">
                    {formatTime(event.timestamp)}
                  </span>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Info */}
      <div className="bg-slate-800/30 rounded-lg border border-slate-700/50 p-3 flex items-start gap-2">
        <span className="w-2 h-2 mt-1 bg-cyan-500 rounded-full animate-pulse flex-shrink-0" />
        <div className="text-[11px] text-slate-500">
          <strong className="text-slate-400">Live Pulse :</strong> Affiche les evenements en temps reel - requetes API, erreurs, alertes securite, et activite IA. Rafraichissement automatique toutes les 3 secondes.
        </div>
      </div>
    </div>
  );
}
