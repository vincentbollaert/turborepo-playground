import {
  Feature,
  GetFeaturesResponse,
  DeleteFeaturesByIdResponses,
  PostFeaturesResponse,
  GetFeaturesData,
  PostFeaturesData,
  DeleteFeaturesByIdData,
} from './apiClient'

export type Models = {
  Feature: Feature
}

export type Endpoints = {
  Features: {
    GetFeatures: {
      PathParams: GetFeaturesData['path']
      QueryParams: GetFeaturesData['query']
      Response: GetFeaturesResponse
    }
    AddFeature: {
      RequestBody: PostFeaturesData['body']
      Response: PostFeaturesResponse
    }
    RemoveFeature: {
      PathParams: DeleteFeaturesByIdData['path']
      QueryParams: DeleteFeaturesByIdData['query']
      Response: DeleteFeaturesByIdResponses['200']
    }
  }
}
