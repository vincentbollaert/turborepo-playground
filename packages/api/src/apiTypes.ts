import { Feature, GetFeaturesData, GetFeaturesResponse } from "./apiClient";

export type Models = {
  Feature: Feature;
};

// NOTE: exporting your own type gives greater control over naming, and less reliance on rest methods
// addTransation versus postTransation, completeTransaction versus patchTransation
export type Endpoints = {
  Features: {
    GetFeatures: {
      PathParams: GetFeaturesData["path"];
      QueryParams: GetFeaturesData["query"];
      Response: GetFeaturesResponse;
    };
  };
};
