import { Navigate, type RouteObject } from 'react-router-dom'
import { AppShell } from '../components/layout/AppShell'
import {
  AiInsightsPage,
  CoverageGapsPage,
  CoverageMapPage,
  DevicesPage,
  LiveLogsPage,
  OperatorsPage,
  OverviewPage,
  TrendsPage,
} from '../pages'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppShell />,
    children: [
      { index: true, element: <Navigate to="/overview" replace /> },
      { path: 'overview', element: <OverviewPage /> },
      { path: 'live-logs', element: <LiveLogsPage /> },
      { path: 'coverage-map', element: <CoverageMapPage /> },
      { path: 'coverage-gaps', element: <CoverageGapsPage /> },
      { path: 'trends', element: <TrendsPage /> },
      { path: 'operators', element: <OperatorsPage /> },
      { path: 'devices', element: <DevicesPage /> },
      { path: 'ai-insights', element: <AiInsightsPage /> },
      { path: '*', element: <Navigate to="/overview" replace /> },
    ],
  },
]
