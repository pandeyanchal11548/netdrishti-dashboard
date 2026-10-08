export interface NavItem {
  title: string
  description: string
  path: string
}

// Exact display titles and routes from the requirements (sections 2 and 4).
export const NAV_ITEMS: NavItem[] = [
  {
    title: 'Overview',
    description: 'Summary of network records and performance',
    path: '/overview',
  },
  { title: 'Live Logs', description: 'Latest application telemetry', path: '/live-logs' },
  {
    title: 'Coverage Map',
    description: 'Geographic network and signal coverage',
    path: '/coverage-map',
  },
  {
    title: 'Coverage Gaps',
    description: 'Weak-signal and no-service problem areas',
    path: '/coverage-gaps',
  },
  { title: 'Trends', description: 'Network performance over time', path: '/trends' },
  { title: 'Operators', description: 'Operator performance comparison', path: '/operators' },
  { title: 'Devices', description: 'Field device activity', path: '/devices' },
  {
    title: 'AI Insights',
    description: 'Generated network findings and actions',
    path: '/ai-insights',
  },
]
