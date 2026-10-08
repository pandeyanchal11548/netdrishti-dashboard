import { NavLink } from 'react-router-dom'
import { NAV_ITEMS } from '../../app/navigation'

interface SidebarProps {
  open: boolean
  onNavigate: () => void
}

export function Sidebar({ open, onNavigate }: SidebarProps) {
  return (
    <aside id="sidebar" className={`sidebar${open ? ' sidebar--open' : ''}`}>
      <div className="brand">
        <div className="brand__logo" aria-hidden="true">
          ND
        </div>
        <div>
          <div className="brand__name">NetDrishti</div>
          <div className="brand__env">NOC Production Environment</div>
        </div>
      </div>
      <nav aria-label="Main navigation">
        <ul className="nav">
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className="nav__link"
                title={item.description}
                onClick={onNavigate}
              >
                <span className="nav__title">{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}