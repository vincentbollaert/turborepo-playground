export type MockVariantTypes = "default" | "empty" | "error";
export type MockVariantsByEndpoint = {
  features: MockVariantTypes;
};

export const mockVariantsByEndpoint: MockVariantsByEndpoint = { features: "default" };
export const handleSetMockVariants = ({
  endpointId,
  mockVariantType,
}: {
  endpointId: keyof MockVariantsByEndpoint;
  mockVariantType: MockVariantTypes;
}) => {
  mockVariantsByEndpoint[endpointId] = mockVariantType;
};
