'use client'

import { useState, useEffect } from 'react'
import { 
  Close as CloseIcon 
} from '@mui/icons-material'
import { ProtocolConfig, ProtocolType, Widget } from '@/app/types/widget'

interface ProtocolSettingsProps {
  widget: Widget
  onUpdate: (widgetId: string, protocol: ProtocolConfig) => void
  isOpen: boolean
  onClose: () => void
}

export default function ProtocolSettings({ 
  widget, 
  onUpdate, 
  isOpen, 
  onClose 
}: ProtocolSettingsProps) {
  const [protocol, setProtocol] = useState<ProtocolConfig>(
    widget.protocol || { type: 'mqtt' }
  )

  // Reset protocol state when modal opens
  useEffect(() => {
    if (isOpen) {
      setProtocol(widget.protocol || { type: 'mqtt' })
    }
  }, [isOpen, widget.protocol])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onUpdate(widget.id, protocol)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-slate-800 rounded-xl border border-slate-700 w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-white">Protocol Settings</h3>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-slate-700/50 rounded-lg transition-colors"
          >
            <CloseIcon className="w-5 h-5 text-slate-400 hover:text-violet-400" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Protocol Type
            </label>
            <select
              value={protocol.type}
              onChange={(e) => setProtocol({ ...protocol, type: e.target.value as ProtocolType })}
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-white"
            >
              <option value="mqtt">MQTT</option>
              <option value="http">HTTP REST API</option>
              <option value="websocket">WebSocket</option>
            </select>
          </div>

          {protocol.type === 'mqtt' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Broker URL
                </label>
                <input
                  type="text"
                  value={protocol.mqtt?.broker || ''}
                  onChange={(e) => setProtocol({
                    ...protocol,
                    mqtt: { ...protocol.mqtt, broker: e.target.value }
                  })}
                  placeholder="mqtt://broker.example.com"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Topic
                </label>
                <input
                  type="text"
                  value={protocol.mqtt?.topic || ''}
                  onChange={(e) => setProtocol({
                    ...protocol,
                    mqtt: { ...protocol.mqtt, topic: e.target.value }
                  })}
                  placeholder="sensors/temperature"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-white"
                />
              </div>
            </div>
          )}

          {protocol.type === 'http' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Endpoint URL
                </label>
                <input
                  type="text"
                  value={protocol.http?.endpoint || ''}
                  onChange={(e) => setProtocol({
                    ...protocol,
                    http: { ...protocol.http, endpoint: e.target.value }
                  })}
                  placeholder="https://api.example.com/sensors"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Polling Interval (ms)
                </label>
                <input
                  type="number"
                  value={protocol.http?.interval || 1000}
                  onChange={(e) => setProtocol({
                    ...protocol,
                    http: { ...protocol.http, interval: parseInt(e.target.value) }
                  })}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-white"
                />
              </div>
            </div>
          )}

          {protocol.type === 'websocket' && (
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                WebSocket URL
              </label>
              <input
                type="text"
                value={protocol.websocket?.url || ''}
                onChange={(e) => setProtocol({
                  ...protocol,
                  websocket: { ...protocol.websocket, url: e.target.value }
                })}
                placeholder="ws://example.com/sensors"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-white"
              />
            </div>
          )}

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm bg-violet-500 hover:bg-violet-600 text-white rounded-lg transition-colors"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 