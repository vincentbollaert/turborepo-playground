import { http, HttpResponse } from 'msw'
import { defaultFeatures, emptyFeatures } from '../../mocks/features'
import { mockVariantsByEndpoint } from '../../utils/mockSelector'

const getFeatures = () => {
  return http.get('http://localhost:5173/api/v1/features', async () => {
    switch (mockVariantsByEndpoint.features) {
      case 'empty': {
        return HttpResponse.json(emptyFeatures, { status: 200 })
      }
      case 'error': {
        return new HttpResponse('General error', { status: 500 })
      }
      default: {
        return HttpResponse.json(defaultFeatures, { status: 200 })
      }
    }
  })
}

export const getFeaturesHandlers = {
  defaultHandler: getFeatures(),
}
