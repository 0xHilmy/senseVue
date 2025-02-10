'use client'

import { useState } from 'react'
import GridLayout from 'react-grid-layout'
import { Box, Paper } from '@mui/material'
import WidgetToolbox from '../components/WidgetToolbox'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

export default function EditDashboard() {
  const [layout, setLayout] = useState([])
  const [widgets, setWidgets] = useState([])

  const handleAddWidget = (widgetType) => {
    const newWidget = {
      id: `widget-${widgets.length}`,
      type: widgetType,
      x: 0,
      y: 0,
      w: 6,
      h: 4,
    }

    setWidgets([...widgets, newWidget])
  }

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <WidgetToolbox onAddWidget={handleAddWidget} />
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={30}
          width={1200}
          onLayoutChange={(newLayout) => setLayout(newLayout)}
        >
          {widgets.map((widget) => (
            <Paper key={widget.id} sx={{ p: 2 }}>
              {widget.type === 'chart' && <div>Chart Widget</div>}
              {widget.type === 'gauge' && <div>Gauge Widget</div>}
              {widget.type === 'label' && <div>Label Widget</div>}
            </Paper>
          ))}
        </GridLayout>
      </Box>
    </Box>
  )
} 