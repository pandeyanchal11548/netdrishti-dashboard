import { createPlaceholderPage } from './createPage'

export const OverviewPage = createPlaceholderPage(
  'Overview',
  'Summary of network records and performance.',
)
export const LiveLogsPage = createPlaceholderPage('Live Logs', 'Latest application telemetry.')
export const CoverageMapPage = createPlaceholderPage(
  'Coverage Map',
  'Geographic network and signal coverage.',
)
export const CoverageGapsPage = createPlaceholderPage(
  'Coverage Gaps',
  'Weak-signal and no-service problem areas.',
)
export const TrendsPage = createPlaceholderPage('Trends', 'Network performance over time.')
export const OperatorsPage = createPlaceholderPage('Operators', 'Operator performance comparison.')
export const DevicesPage = createPlaceholderPage('Devices', 'Field device activity.')
export const AiInsightsPage = createPlaceholderPage(
  'AI Insights',
  'Generated network findings and actions.',
)
