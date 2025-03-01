import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '@repo/vitest-config/testUtils'
import { Layout } from '../../layout'
import { serverWorker } from '@repo/api/serverWorker'
import { getFeaturesHandlers } from '@repo/api/handlers'

describe('Features component', () => {
  it('renders the features section', async () => {
    serverWorker.use(getFeaturesHandlers.defaultHandler)
    renderWithProviders(<Layout />)

    // Check if the component renders with the expected title
    const titleElement = await screen.findByText('Modern frontend applications')
    expect(titleElement).toBeInTheDocument()
  })
})
