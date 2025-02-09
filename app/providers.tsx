'use client'

import { CssBaseline } from '@mui/material'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CssBaseline />
      {children}
    </>
  )
} 