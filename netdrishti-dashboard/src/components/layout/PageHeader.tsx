import type { ReactNode } from 'react'

interface PageHeaderProps {
  title: string
  purpose: string
  actions?: ReactNode
}

// Page layout order: title, one-sentence description, optional actions, then filters/content.
export function PageHeader({ title, purpose, actions }: PageHeaderProps) {
  return (
    <div className="page__header">
      <h1 className="page__title">{title}</h1>
      <p className="page__purpose">{purpose}</p>
      {actions}
    </div>
  )
}
