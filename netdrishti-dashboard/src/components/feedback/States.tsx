// Shared feedback states with the exact visible text from requirements section 4.
export function LoadingState() {
  return (
    <div className="panel state" role="status" aria-live="polite">
      <span className="state__title">Loading dashboard data</span>
      <div className="skeleton" style={{ width: '100%' }} />
      <div className="skeleton" style={{ width: '70%' }} />
    </div>
  )
}

export function EmptyState() {
  return (
    <div className="panel state">
      <p>No data found for the selected filters</p>
    </div>
  )
}

export function ErrorState({ onRetry, message }: { onRetry: () => void; message?: string }) {
  return (
    <div className="panel state state--error" role="alert">
      <span className="state__title">Unable to load data</span>
      {message && <p>{message}</p>}
      <button type="button" className="btn" onClick={onRetry}>
        Retry
      </button>
    </div>
  )
}

export function StaleNotice() {
  return <p className="panel">Showing the last successful update</p>
}
