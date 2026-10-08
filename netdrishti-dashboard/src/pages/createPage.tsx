import { PageHeader } from '../components/layout/PageHeader'
import { LoadingState } from '../components/feedback/States'

// Temporary placeholder factory. Each page is replaced by its real feature in later tasks.
export function createPlaceholderPage(title: string, purpose: string) {
  return function PlaceholderPage() {
    return (
      <section>
        <PageHeader title={title} purpose={purpose} />
        <LoadingState />
      </section>
    )
  }
}
