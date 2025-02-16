'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import GridLayout, { Layout } from 'react-grid-layout'
import { 
  Edit as EditIcon,
  DeleteOutline as DeleteIcon,
  Undo as UndoIcon,
  Settings as SettingsIcon
} from '@mui/icons-material'
import Sidebar from '../components/edit/Sidebar'
import { Widget, ProtocolConfig, DataConfig } from '../types/widget'
import ProtocolSettings from '../components/widget/ProtocolSettings'
import DataSourceConfig from '../components/widget/DataSourceConfig'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

interface DashboardConfig {
  protocol: ProtocolConfig
}

interface HistoryState {
  widgets: Widget[]
  layout: Layout[]
}

export default function EditDashboard() {
  const [widgets, setWidgets] = useState<Widget[]>([])
  const [layout, setLayout] = useState<Layout[]>([])
  const [editingTitle, setEditingTitle] = useState<string | null>(null)
  const [isDraggable, setIsDraggable] = useState(true)
  const [containerWidth, setContainerWidth] = useState(1200)
  const [history, setHistory] = useState<HistoryState[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [dashboardConfig, setDashboardConfig] = useState<DashboardConfig>({
    protocol: { type: 'mqtt' }
  })
  const [isProtocolSettingsOpen, setIsProtocolSettingsOpen] = useState(false)
  const [dataConfigWidget, setDataConfigWidget] = useState<string | null>(null)
  
  const containerRef = useRef<HTMLDivElement>(null)

  // Menangani keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
        e.preventDefault()
        undo()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [history, historyIndex])

  // Fungsi untuk menambah state ke history
  const addToHistory = useCallback(() => {
    const newHistory = history.slice(0, historyIndex + 1)
    newHistory.push({ widgets, layout })
    setHistory(newHistory)
    setHistoryIndex(newHistory.length - 1)
  }, [history, historyIndex, widgets, layout])

  // Fungsi untuk undo
  const undo = useCallback(() => {
    if (historyIndex > 0) {
      const previousState = history[historyIndex - 1]
      setWidgets(previousState.widgets)
      setLayout(previousState.layout)
      setHistoryIndex(historyIndex - 1)
    }
  }, [history, historyIndex])

  // Fungsi untuk mengupdate width container
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }

    // Update width awal
    updateWidth()

    // Update width saat window di-resize
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  // Fungsi untuk mendapatkan posisi Y yang tersedia
  const getAvailablePosition = useCallback((layouts: Layout[]): { x: number; y: number } => {
    if (layouts.length === 0) return { x: 0, y: 0 }

    // Mencari posisi Y tertinggi yang sudah terisi
    const maxY = Math.max(...layouts.map(l => l.y + l.h))
    
    // Mencoba mencari ruang kosong di setiap baris
    for (let y = 0; y <= maxY; y++) {
      for (let x = 0; x <= 6; x++) { // Maksimal 12 kolom, coba setengah lebar
        const isTaken = layouts.some(l => 
          x < (l.x + l.w) && 
          x + 6 > l.x && 
          y < (l.y + l.h) && 
          y + 4 > l.y
        )
        if (!isTaken) return { x, y }
      }
    }

    // Jika tidak ada ruang kosong, tambahkan di bawah
    return { x: 0, y: maxY }
  }, [])

  const handleWidgetAdd = useCallback((widget: Widget) => {
    const position = getAvailablePosition(layout)
    
    const newLayout: Layout = {
      i: widget.id,
      x: position.x,
      y: position.y,
      w: 6,
      h: 4,
      minW: 3, // Minimal width
      minH: 2, // Minimal height
      maxW: 12, // Maksimal width (full width)
      maxH: 8, // Maksimal height
    }

    setWidgets(prev => [...prev, widget])
    setLayout(prev => [...prev, newLayout])
  }, [layout, getAvailablePosition])

  const handleTitleChange = (widgetId: string, newTitle: string) => {
    setWidgets(prev => 
      prev.map(w => 
        w.id === widgetId 
          ? { ...w, title: newTitle }
          : w
      )
    )
    setEditingTitle(null)
  }

  const handleLayoutChange = useCallback((newLayout: Layout[]) => {
    setLayout(newLayout)
  }, [])

  const handleProtocolUpdate = (protocol: ProtocolConfig) => {
    addToHistory()
    setDashboardConfig(prev => ({ ...prev, protocol }))
    // Update semua widget yang ada dengan protokol baru
    setWidgets(prev => prev.map(w => ({ ...w, protocol })))
  }

  const handleDeleteWidget = (widgetId: string) => {
    addToHistory()
    setWidgets(prev => prev.filter(w => w.id !== widgetId))
    setLayout(prev => prev.filter(l => l.i !== widgetId))
  }

  const handleDataConfigUpdate = (widgetId: string, dataConfig: DataConfig) => {
    addToHistory()
    setWidgets(prev => prev.map(w => 
      w.id === widgetId 
        ? { ...w, dataConfig }
        : w
    ))
  }

  return (
    <div className="flex h-screen bg-slate-900">
      <Sidebar onWidgetAdd={handleWidgetAdd} />
      
      <div className="flex flex-col flex-1">
        <div 
          ref={containerRef} 
          className="flex-1 p-6 overflow-auto"
        >
          <GridLayout
            className="layout"
            layout={layout}
            cols={12}
            rowHeight={30}
            width={containerWidth - 48}
            containerPadding={[0, 0]}
            margin={[16, 16]}
            onLayoutChange={handleLayoutChange}
            isDraggable={isDraggable}
            isResizable={true}
            compactType="vertical"
            preventCollision={false}
            useCSSTransforms={true}
          >
            {widgets.map((widget) => (
              <div 
                key={widget.id} 
                className="group/widget bg-slate-800/50 backdrop-blur-md rounded-lg border border-slate-700/50 p-4 
                hover:border-violet-500/50 transition-colors relative"
              >
                {/* Delete Button */}
                <button
                  className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-slate-700/50 
                  flex items-center justify-center opacity-0 group-hover/widget:opacity-100 
                  hover:bg-slate-600/50 transition-all duration-200 border border-slate-600/50
                  hover:border-violet-500/50"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleDeleteWidget(widget.id)
                  }}
                >
                  <DeleteIcon className="w-5 h-5 text-slate-400 hover:text-violet-400 transition-colors" />
                </button>

                {/* Title Section */}
                <div className="flex justify-between items-center mb-4 pr-8">
                  {editingTitle === widget.id ? (
                    <div 
                      onMouseEnter={() => setIsDraggable(false)}
                      onMouseLeave={() => setIsDraggable(true)}
                    >
                      <input
                        type="text"
                        className="bg-slate-700/50 text-white px-2 py-1 rounded outline-none 
                        focus:ring-2 focus:ring-violet-500/50 text-sm font-medium w-full max-w-[200px]"
                        defaultValue={widget.title}
                        autoFocus
                        onBlur={(e) => {
                          if (e.target.value.trim()) {
                            handleTitleChange(widget.id, e.target.value)
                          } else {
                            setEditingTitle(null)
                          }
                          setIsDraggable(true)
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                            handleTitleChange(widget.id, e.currentTarget.value)
                            setIsDraggable(true)
                          } else if (e.key === 'Escape') {
                            setEditingTitle(null)
                            setIsDraggable(true)
                          }
                        }}
                      />
                    </div>
                  ) : (
                    <div 
                      className="flex items-center gap-2"
                      onMouseEnter={() => setIsDraggable(false)}
                      onMouseLeave={() => setIsDraggable(true)}
                    >
                      <button 
                        className="group flex items-center gap-2 hover:bg-slate-700/30 px-2 py-1 rounded-md 
                        transition-colors cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation()
                          setEditingTitle(widget.id)
                        }}
                      >
                        <h3 className="text-white font-medium select-none">{widget.title}</h3>
                        <EditIcon className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 
                        transition-opacity" />
                      </button>
                      <button
                        className="p-1 hover:bg-slate-700/50 rounded-lg transition-colors"
                        onClick={(e) => {
                          e.stopPropagation()
                          setDataConfigWidget(widget.id)
                        }}
                      >
                        <SettingsIcon className="w-4 h-4 text-slate-400 hover:text-violet-400" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Widget Content */}
                <div className={`h-full ${isDraggable ? 'cursor-move' : ''}`}>
                  {widget.type === 'timeseries' && <div>Time Series Chart</div>}
                  {widget.type === 'gauge' && <div>Gauge Widget</div>}
                  {widget.type === 'stat' && <div>Stat Widget</div>}
                </div>
              </div>
            ))}
          </GridLayout>
        </div>

        {/* Bottom Bar with Protocol Settings */}
        <div className="border-t border-slate-800 bg-slate-900/90 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-slate-400 text-sm">Data Source:</span>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
                  <span className="text-sm text-white">
                    {dashboardConfig.protocol.type.toUpperCase()}
                  </span>
                  {dashboardConfig.protocol.type === 'mqtt' && (
                    <span className="text-sm text-slate-400">
                      {dashboardConfig.protocol.mqtt?.topic || 'No topic set'}
                    </span>
                  )}
                  {dashboardConfig.protocol.type === 'http' && (
                    <span className="text-sm text-slate-400">
                      {dashboardConfig.protocol.http?.endpoint || 'No endpoint set'}
                    </span>
                  )}
                  {dashboardConfig.protocol.type === 'websocket' && (
                    <span className="text-sm text-slate-400">
                      {dashboardConfig.protocol.websocket?.url || 'No URL set'}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setIsProtocolSettingsOpen(true)}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm text-slate-400 
                  hover:text-violet-400 hover:bg-slate-800/50 rounded-lg transition-colors"
                >
                  <SettingsIcon className="w-4 h-4" />
                  Configure
                </button>
              </div>

              {/* Connection Status */}
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                <span className="text-sm text-slate-400">Connected</span>
              </div>
            </div>
          </div>
        </div>

        {/* Protocol Settings Modal */}
        <ProtocolSettings
          widget={{ id: 'dashboard', type: 'dashboard', title: 'Dashboard', protocol: dashboardConfig.protocol }}
          onUpdate={(_, protocol) => handleProtocolUpdate(protocol)}
          isOpen={isProtocolSettingsOpen}
          onClose={() => setIsProtocolSettingsOpen(false)}
        />

        {/* Undo Button */}
        {historyIndex > 0 && (
          <button
            onClick={undo}
            className="fixed bottom-20 right-6 bg-slate-800/90 hover:bg-slate-700/90 
            text-slate-300 px-4 py-2 rounded-lg backdrop-blur-md border border-slate-700/50
            flex items-center gap-2 transition-colors"
          >
            <UndoIcon className="w-4 h-4" />
            <span className="text-sm">Undo</span>
          </button>
        )}

        {dataConfigWidget && (
          <DataSourceConfig
            widget={widgets.find(w => w.id === dataConfigWidget)!}
            onUpdate={handleDataConfigUpdate}
            isOpen={true}
            onClose={() => setDataConfigWidget(null)}
          />
        )}
      </div>
    </div>
  )
} 