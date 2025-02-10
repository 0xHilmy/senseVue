'use client'

import { useState } from 'react'
import { 
  Timeline,
  Speed,
  TableChart,
  GridOn,
  BarChart,
  PieChart,
  TextFields,
  Notifications,
  List,
  TrendingUp,
  KeyboardArrowDown,
  KeyboardArrowRight
} from '@mui/icons-material'
import { Widget, WidgetType } from '@/app/types/widget'

const WIDGET_CATEGORIES = [
  {
    name: 'Time Series',
    icon: <Timeline className="w-5 h-5" />,
    widgets: [
      {
        type: 'timeseries',
        title: 'Time Series',
        icon: <Timeline />,
        description: 'Visualize time series data'
      },
      {
        type: 'gauge',
        title: 'Gauge',
        icon: <Speed />,
        description: 'Display current values as gauge'
      },
      {
        type: 'stat',
        title: 'Stat',
        icon: <TrendingUp />,
        description: 'Show single stat with sparkline'
      }
    ]
  },
  {
    name: 'Other Visualizations',
    icon: <BarChart className="w-5 h-5" />,
    widgets: [
      {
        type: 'table',
        title: 'Table',
        icon: <TableChart />,
        description: 'Display data in table format'
      },
      {
        type: 'heatmap',
        title: 'Heat Map',
        icon: <GridOn />,
        description: 'Show patterns in sensor data'
      },
      {
        type: 'barchart',
        title: 'Bar Chart',
        icon: <BarChart />,
        description: 'Compare values with bars'
      },
      {
        type: 'piechart',
        title: 'Pie Chart',
        icon: <PieChart />,
        description: 'Show data distribution'
      }
    ]
  },
  {
    name: 'Monitoring',
    icon: <Notifications className="w-5 h-5" />,
    widgets: [
      {
        type: 'alert',
        title: 'Alert List',
        icon: <Notifications />,
        description: 'Show alert history and status'
      },
      {
        type: 'logs',
        title: 'Logs',
        icon: <List />,
        description: 'Display sensor logs'
      }
    ]
  }
]

interface SidebarProps {
  onWidgetAdd: (widget: Widget) => void
}

export default function Sidebar({ onWidgetAdd }: SidebarProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const handleDragStart = (e: React.DragEvent, widgetType: WidgetType) => {
    e.dataTransfer.setData('widgetType', widgetType)
    e.dataTransfer.effectAllowed = 'copy'
  }

  const handleWidgetClick = (type: WidgetType) => {
    const newWidget: Widget = {
      id: `widget-${Date.now()}`,
      type,
      title: 'New Widget',
      config: {}
    }
    onWidgetAdd(newWidget)
  }

  const toggleCategory = (categoryName: string) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName)
  }

  const filteredCategories = WIDGET_CATEGORIES.map(category => ({
    ...category,
    widgets: category.widgets.filter(widget => 
      widget.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      widget.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.widgets.length > 0)

  return (
    <div className="w-80 h-screen bg-slate-900 border-r border-slate-800 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-slate-800">
        <h2 className="text-lg font-semibold text-white mb-4">Add Widget</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search widgets..."
            className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-2 text-sm 
            text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Categories List */}
      <div className="flex-1 overflow-y-auto">
        {filteredCategories.map((category) => (
          <div key={category.name} className="border-b border-slate-800/50">
            {/* Category Header */}
            <button
              onClick={() => toggleCategory(category.name)}
              className="w-full px-4 py-3 flex items-center justify-between hover:bg-slate-800/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="text-violet-400">
                  {category.icon}
                </div>
                <span className="text-sm font-medium text-white">
                  {category.name}
                </span>
              </div>
              {expandedCategory === category.name ? (
                <KeyboardArrowDown className="text-slate-400 w-5 h-5" />
              ) : (
                <KeyboardArrowRight className="text-slate-400 w-5 h-5" />
              )}
            </button>

            {/* Widgets in Category */}
            {expandedCategory === category.name && (
              <div className="pb-2">
                {category.widgets.map((widget) => (
                  <div
                    key={widget.type}
                    draggable
                    onDragStart={(e) => handleDragStart(e, widget.type)}
                    onClick={() => handleWidgetClick(widget.type)}
                    className="flex items-start gap-3 mx-4 mt-2 p-3 rounded-lg bg-slate-800/50 
                    hover:bg-slate-700/50 cursor-move border border-slate-700/50 transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-slate-700/50 text-violet-400 
                    group-hover:bg-violet-500/20">
                      {widget.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-white text-sm">
                        {widget.title}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {widget.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

     
    </div>
  )
} 