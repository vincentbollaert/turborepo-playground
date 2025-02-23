import { setupWorker } from 'msw/browser'
import { getFeaturesHandlers } from './handlers/features/getFeatures.js'

export const browserWorker = setupWorker(getFeaturesHandlers.defaultHandler)
