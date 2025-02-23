import { http } from 'msw'
import { defaultFeatures, emptyFeatures, errorFeatures } from '../../mocks/features.js'
import { mockVariantsByEndpoint } from '../../utils/mockSelector.js'

const getFeatures = () => {
  return http.get('/api/v1/features', async () => {
    switch (mockVariantsByEndpoint.features) {
      case 'empty': {
        return Response.json(emptyFeatures, { status: 200 })
      }
      case 'error': {
        return errorFeatures
      }
      default: {
        return Response.json(defaultFeatures, { status: 200 })
      }
    }
  })
}

export const getFeaturesHandlers = {
  defaultHandler: getFeatures(),
}
