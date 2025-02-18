import { components, paths } from '../../schema/generated/schema'

export type Models = {
  Feature: components['schemas']['Feature']
}

export type Endpoints = {
  Features: {
    GetFeatures: {
      PathParams: paths['/features']['get']['parameters']['path']
      QueryParams: paths['/features']['get']['parameters']['query']
      Response: paths['/features']['get']['responses']['200']['content']['application/json']
    }
    AddFeature: {
      RequestBody: paths['/features']['post']['requestBody']['content']['application/json']
      Response: paths['/features']['post']['responses']['201']['content']['application/json']
    }
    RemoveFeature: {
      PathParams: paths['/features/{id}']['delete']['parameters']['path']
      QueryParams: paths['/features/{id}']['delete']['parameters']['query']
      Response: paths['/features/{id}']['delete']['responses']['200']['content']
    }
  }
}
