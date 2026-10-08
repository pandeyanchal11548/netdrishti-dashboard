interface HeaderProps {
  menuOpen: boolean
  onMenuToggle: () => void
  apiError?: boolean
}

const dateFormat = new Intl.DateTimeFormat('en-GB', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

export function Header({ menuOpen, onMenuToggle, apiError = false }: HeaderProps) {
  return (
    <header className="header">
      <button
        type="button"
        className="btn menu-button"
        aria-label="Menu"
        aria-expanded={menuOpen}
        aria-controls="sidebar"
        title="Menu"
        onClick={onMenuToggle}
      >
        ☰
      </button>
      <div className={`header__status${apiError ? ' header__status--error' : ''}`} role="status">
        <div className="header__status-title">
          {apiError ? 'API Attention Required' : 'Network Status Operational'}
        </div>
        <div className="header__date">{dateFormat.format(new Date())}</div>
      </div>
      <div className="user-chip">
        <span className="user-chip__avatar" aria-hidden="true">
          NK
        </span>
        <span className="user-chip__name">NOC Admin</span>
      </div>
    </header>
  )
}