import createFetchClient from 'openapi-fetch'
import createReactQueryClient from 'openapi-react-query'

import { paths } from '../schema/generated/schema'
import { Endpoints } from './apiTypes'

const baseClient = createFetchClient<paths>({
  // baseUrl: 'http://localhost:1337/api/v1',
  // baseUrl: 'api/v1',
  baseUrl: 'http://localhost:5173/api/v1',
})

export const apiClient = {
  features: {
    getFeatures: () => baseClient.GET('/features'),
    addFeature: (feature: Endpoints['Features']['AddFeature']['RequestBody']) =>
      baseClient.POST('/features', { body: feature }),
    removeFeature: (id: Endpoints['Features']['RemoveFeature']['PathParams']['id']) =>
      baseClient.DELETE('/features/{id}', { params: { path: { id } } }),
  },
}

export const reactQueryClient = createReactQueryClient(baseClient)
