export type WidgetType = 
  | 'timeseries'    // Time series graph
  | 'gauge'         // Gauge/meter visualization
  | 'stat'          // Single stat/value display
  | 'table'         // Data table
  | 'heatmap'       // Heat map visualization
  | 'barchart'      // Bar chart
  | 'piechart'      // Pie chart
  | 'alert'         // Alert list/status
  | 'logs'          // Log viewer
  | 'text'          // Text/markdown panel

export type ProtocolType = 'mqtt' | 'http' | 'websocket'

export interface ProtocolConfig {
  type: ProtocolType
  mqtt?: {
    topic: string
    broker: string
    port: number
    clientId?: string
    username?: string
    password?: string
  }
  http?: {
    endpoint: string
    method: 'GET' | 'POST'
    headers?: Record<string, string>
    interval: number // polling interval in ms
  }
  websocket?: {
    url: string
    messageType?: string
  }
}

export interface DataConfig {
  // MQTT Config
  mqttPath?: string // JSON path untuk mengambil nilai dari MQTT message
  
  // HTTP Config
  jsonPath?: string // JSON path untuk data dari HTTP response
  headers?: Record<string, string>
  
  // WebSocket Config
  eventName?: string
  dataPath?: string
  
  // Common Config
  dataType: 'number' | 'string' | 'boolean' | 'array'
  label?: string
  unit?: string
  aggregation?: 'sum' | 'avg' | 'min' | 'max' | 'count' | 'none'
  transformation?: 'raw' | 'rate' | 'delta'
}

export interface Widget {
  id: string
  type: WidgetType
  title: string
  protocol?: ProtocolConfig
  dataConfig?: DataConfig
  config: Record<string, unknown>
} 