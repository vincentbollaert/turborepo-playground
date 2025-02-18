import { http } from 'msw'
import { allFeatures } from '../../mocks/features'

const getFeatures = () => http.get('/api/v1/features', async () => Response.json(allFeatures, { status: 200 }))

export const getFeaturesHandlers = {
  defaultHandler: getFeatures(),
}
