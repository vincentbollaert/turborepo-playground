import { http, HttpResponse } from 'msw'
import { defaultFeatures, emptyFeatures } from '../../mocks/features.js'
import { mockVariantsByEndpoint } from '../../utils/mockSelector.js'

const getFeatures = () => {
  return http.get('/api/v1/features', async () => {
    switch (mockVariantsByEndpoint.features) {
      case 'empty': {
        return Response.json(emptyFeatures, { status: 200 })
      }
      case 'error': {
        return new HttpResponse('General error', { status: 500 })
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
