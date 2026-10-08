import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { NAV_ITEMS } from './navigation'
import { routes } from './routes'

const renderAt = (path: string) =>
  render(<RouterProvider router={createMemoryRouter(routes, { initialEntries: [path] })} />)

describe('AppShell and routes', () => {
  it('redirects / to the Overview page', () => {
    renderAt('/')
    expect(screen.getByRole('heading', { level: 1, name: 'Overview' })).toBeInTheDocument()
  })

  it('shows the brand and header status text', () => {
    renderAt('/overview')
    expect(screen.getByText('NOC Production Environment')).toBeInTheDocument()
    expect(screen.getByText('Network Status Operational')).toBeInTheDocument()
  })

  it.each(NAV_ITEMS)('opens $title directly at $path', ({ title, path }) => {
    renderAt(path)
    expect(screen.getByRole('heading', { level: 1, name: title })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: new RegExp(`^${title}`) })).toHaveAttribute(
      'aria-current',
      'page',
    )
  })

  it('navigates between pages from the sidebar', async () => {
    renderAt('/overview')
    await userEvent.click(screen.getByRole('link', { name: /^Devices/ }))
    expect(screen.getByRole('heading', { level: 1, name: 'Devices' })).toBeInTheDocument()
  })

  it('toggles the mobile menu button', async () => {
    renderAt('/overview')
    const button = screen.getByRole('button', { name: 'Menu' })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    await userEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })
})
