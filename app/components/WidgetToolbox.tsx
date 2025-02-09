'use client'

import { Paper, List, ListItem, ListItemButton, ListItemText } from '@mui/material'

interface WidgetToolboxProps {
  onAddWidget: (widgetType: string) => void
}

export default function WidgetToolbox({ onAddWidget }: WidgetToolboxProps) {
  const widgets = [
    { type: 'chart', label: 'Line Chart' },
    { type: 'gauge', label: 'Gauge' },
    { type: 'label', label: 'Label' },
  ]

  return (
    <Paper sx={{ width: 240, height: '100%', overflow: 'auto' }}>
      <List>
        {widgets.map((widget) => (
          <ListItem key={widget.type} disablePadding>
            <ListItemButton onClick={() => onAddWidget(widget.type)}>
              <ListItemText primary={widget.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  )
} 