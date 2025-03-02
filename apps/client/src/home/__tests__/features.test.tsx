import { describe, it, expect } from 'vitest'
import { screen, waitFor, within } from '@testing-library/react'
import { serverWorker } from '@repo/api/serverWorker'
import { getFeaturesHandlers } from '@repo/api/handlers'
import { renderApp } from '../../testSetup/testUtils.local'
import { defaultFeatures } from '@repo/api/mocks'
import userEvent from '@testing-library/user-event'

describe('<Features />', () => {
  const FEATURE_INDEX = 0
  const getFeature = async () => (await screen.findAllByTestId('feature'))[FEATURE_INDEX]!

  it('should render loading state', async () => {
    renderApp()

    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
  })

  it('should render empty state', async () => {
    serverWorker.use(getFeaturesHandlers.emptyHandler())
    renderApp()

    await expect(screen.findByText('No features found')).resolves.toBeInTheDocument()
  })

  it('should render error state', async () => {
    serverWorker.use(getFeaturesHandlers.errorHandler())
    renderApp()

    await expect(screen.findByText('An error has occurred: General error')).resolves.toBeInTheDocument()
  })

  it('should render features', async () => {
    renderApp()

    await expect(screen.findAllByTestId('feature')).resolves.toHaveLength(defaultFeatures.features!.length)
  })

  it('should render feature title', async () => {
    renderApp()

    const feature = await getFeature()
    expect(within(feature).getByText('Modern frontend applications')).toBeInTheDocument()
  })

  it('should render feature description', async () => {
    renderApp()

    const feature = await getFeature()
    // const description = within(feature).queryByText(defaultFeatures.features![FEATURE_INDEX]!.description)
    // TODO: enable this assertion
    // strange behaviour in vitest where display:none css style isn't inherited from parents
    // expect(description).not.toBeVisible()

    userEvent.click(within(feature).getByTestId('expand-btn'))

    await waitFor(() => expect(feature).toHaveAttribute('data-expanded', 'true'))
  })

  it('should toggle the feature', async () => {
    renderApp()

    const feature = await getFeature()
    const switchElement = within(feature).getByRole('switch')
    expect(switchElement).toBeChecked()

    userEvent.click(switchElement)
    await waitFor(() => expect(switchElement).not.toBeChecked())
  })
})
