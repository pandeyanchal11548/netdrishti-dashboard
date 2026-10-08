const NO_NUMBER = '--'
const NO_TEXT = 'Unknown'

const isMissing = (v: number | null | undefined): v is null | undefined =>
  v === null || v === undefined || Number.isNaN(v)

export const formatWhole = (v: number | null | undefined) =>
  isMissing(v) ? NO_NUMBER : Math.round(v).toLocaleString('en-US')

export const formatSignal = (v: number | null | undefined) =>
  isMissing(v) ? NO_NUMBER : `${v.toFixed(1)} dBm`

export const formatPercent = (v: number | null | undefined) =>
  isMissing(v) ? NO_NUMBER : `${v.toFixed(2)} %`

export const formatMbps = (v: number | null | undefined) =>
  isMissing(v) ? NO_NUMBER : `${v.toFixed(1)} Mbps`

export const formatMs = (v: number | null | undefined) =>
  isMissing(v) ? NO_NUMBER : `${v.toFixed(1)} ms`

export const formatText = (v: string | null | undefined) => (v && v.trim() ? v : NO_TEXT)

export const formatDateTime = (v: string | null | undefined) => {
  if (!v) return NO_NUMBER
  const d = new Date(v)
  return Number.isNaN(d.getTime()) ? NO_NUMBER : d.toLocaleString('en-GB')
}
