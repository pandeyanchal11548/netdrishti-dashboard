import {
  formatMbps,
  formatMs,
  formatPercent,
  formatSignal,
  formatText,
  formatWhole,
} from './format'

describe('format utilities', () => {
  it('formats values with the required units', () => {
    expect(formatWhole(1249672)).toBe('1,249,672')
    expect(formatSignal(-91.74)).toBe('-91.7 dBm')
    expect(formatPercent(1.836)).toBe('1.84 %')
    expect(formatMbps(48.62)).toBe('48.6 Mbps')
    expect(formatMs(42.84)).toBe('42.8 ms')
  })
  it('never shows 0 for missing values', () => {
    expect(formatWhole(null)).toBe('--')
    expect(formatSignal(undefined)).toBe('--')
    expect(formatText('')).toBe('Unknown')
  })
})
