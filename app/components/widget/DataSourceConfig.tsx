'use client'

import { useState, useEffect } from 'react'
import { Close as CloseIcon } from '@mui/icons-material'
import { Widget, DataConfig, ProtocolConfig } from '@/app/types/widget'

interface DataSourceConfigProps {
  widget: Widget
  onUpdate: (widgetId: string, dataConfig: DataConfig) => void
  isOpen: boolean
  onClose: () => void
}

export default function DataSourceConfig({
  widget,
  onUpdate,
  isOpen,
  onClose
}: DataSourceConfigProps) {
  const [config, setConfig] = useState<DataConfig>(
    widget.dataConfig || {
      dataType: 'number'
    }
  )

  useEffect(() => {
    if (isOpen) {
      setConfig(widget.dataConfig || { dataType: 'number' })
    }
  }, [isOpen, widget.dataConfig])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onUpdate(widget.id, config)
    onClose()
  }

  if (!isOpen) return null

  const renderProtocolSpecificFields = () => {
    switch (widget.protocol?.type) {
      case 'mqtt':
        return (
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              MQTT Data Path
            </label>
            <input
              type="text"
              value={config.mqttPath || ''}
              onChange={(e) => setConfig({ ...config, mqttPath: e.target.value })}
              placeholder="data.sensors[0].value"
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-white"
            />
            <p className="mt-1 text-xs text-slate-400">
              JSON path to extract value from MQTT message
            </p>
          </div>
        )

      case 'http':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                JSON Path
              </label>
              <input
                type="text"
                value={config.jsonPath || ''}
                onChange={(e) => setConfig({ ...config, jsonPath: e.target.value })}
                placeholder="data.value"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Headers (JSON)
              </label>
              <textarea
                value={config.headers ? JSON.stringify(config.headers, null, 2) : ''}
                onChange={(e) => {
                  try {
                    const headers = JSON.parse(e.target.value)
                    setConfig({ ...config, headers })
                  } catch {} // Ignore invalid JSON
                }}
                placeholder={'{\n  "Authorization": "Bearer token"\n}'}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-white h-24"
              />
            </div>
          </div>
        )

      case 'websocket':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Event Name
              </label>
              <input
                type="text"
                value={config.eventName || ''}
                onChange={(e) => setConfig({ ...config, eventName: e.target.value })}
                placeholder="sensor.data"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Data Path
              </label>
              <input
                type="text"
                value={config.dataPath || ''}
                onChange={(e) => setConfig({ ...config, dataPath: e.target.value })}
                placeholder="value"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-white"
              />
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-slate-800 rounded-xl border border-slate-700 w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-white">Data Source Configuration</h3>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-slate-700/50 rounded-lg transition-colors"
          >
            <CloseIcon className="w-5 h-5 text-slate-400 hover:text-violet-400" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Protocol Specific Fields */}
          {renderProtocolSpecificFields()}

          {/* Common Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Data Type
              </label>
              <select
                value={config.dataType}
                onChange={(e) => setConfig({ ...config, dataType: e.target.value as any })}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-white"
              >
                <option value="number">Number</option>
                <option value="string">String</option>
                <option value="boolean">Boolean</option>
                <option value="array">Array</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Label
              </label>
              <input
                type="text"
                value={config.label || ''}
                onChange={(e) => setConfig({ ...config, label: e.target.value })}
                placeholder="Temperature"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Unit
              </label>
              <input
                type="text"
                value={config.unit || ''}
                onChange={(e) => setConfig({ ...config, unit: e.target.value })}
                placeholder="°C"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Aggregation
              </label>
              <select
                value={config.aggregation || 'none'}
                onChange={(e) => setConfig({ ...config, aggregation: e.target.value as any })}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-white"
              >
                <option value="none">None</option>
                <option value="sum">Sum</option>
                <option value="avg">Average</option>
                <option value="min">Minimum</option>
                <option value="max">Maximum</option>
                <option value="count">Count</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Transformation
              </label>
              <select
                value={config.transformation || 'raw'}
                onChange={(e) => setConfig({ ...config, transformation: e.target.value as any })}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-white"
              >
                <option value="raw">Raw Value</option>
                <option value="rate">Rate</option>
                <option value="delta">Delta</option>
              </select>
            </div>
          </div>

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