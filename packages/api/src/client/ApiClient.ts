import createFetchClient from 'openapi-fetch'

import { paths } from '../../schema/generated/schema'
import { Endpoints } from '../types/apiClient'

const baseClient = createFetchClient<paths>({
  baseUrl: 'localhost/api/v1',
})

export const httpApi = {
  features: {
    getFeatures: () => baseClient.GET('/features'),
    addFeature: (feature: Endpoints['Features']['AddFeature']['RequestBody']) =>
      baseClient.POST('/features', { body: feature }),
    removeFeature: (id: Endpoints['Features']['RemoveFeature']['PathParams']['id']) =>
      baseClient.DELETE('/features/{id}', { params: { path: { id } } }),
  },
}
