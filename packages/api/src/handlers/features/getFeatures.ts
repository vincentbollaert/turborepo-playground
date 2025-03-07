import { http, HttpResponse } from 'msw'
import { defaultFeatures, emptyFeatures } from '../../mocks/features'
import { mockVariantsByEndpoint } from '../../utils/mockSelector'

const URL = 'http://localhost:5173/api/v1/features'

const defaultResponse = () => HttpResponse.json(defaultFeatures, { status: 200 })
const emptyResponse = () => HttpResponse.json(emptyFeatures, { status: 200 })
const errorResponse = () => new HttpResponse('General error', { status: 500 })

const defaultHandler = () =>
  http.get(URL, async () => {
    switch (mockVariantsByEndpoint.features) {
      case 'empty': {
        return emptyResponse()
      }
      case 'error': {
        return errorResponse()
      }
      default: {
        return defaultResponse()
      }
    }
  })

const emptyHandler = () => http.get(URL, async () => emptyResponse())
const errorHandler = () => http.get(URL, async () => errorResponse())

export const getFeaturesHandlers = {
  defaultHandler,
  emptyHandler,
  errorHandler,
}
