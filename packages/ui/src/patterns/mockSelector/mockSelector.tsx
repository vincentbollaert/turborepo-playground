import { handleSetMockVariants } from "@repo/api-mocks/manageMockSelection";
import { getFeaturesQueryKey } from "@repo/api/reactQueries";
import { reactQueryClient } from "@repo/api/reactQueryClient";
import { Select, SelectItem } from "@repo/ui/select";
import styles from "./mockSelector.module.scss";

// TODO: this component's mock oprions should inherit from a type, or better yet, each app should
// pass into it its own options
export const MockSelector = () => {
  const handleMockChange = (newValue: string) => {
    handleSetMockVariants({ endpointId: "features", mockVariantType: newValue as any });
    reactQueryClient.invalidateQueries({ queryKey: getFeaturesQueryKey() });
  };

  const mockOptions: { value: any; label: string }[] = [
    { value: "default", label: "all" },
    { value: "empty", label: "empty" },
    { value: "error", label: "error" },
  ];

  return (
    <div className={styles.mockSelector}>
      <label htmlFor="mockSelect" className={styles.label}>
        features GET
      </label>
      <Select onValueChange={handleMockChange} defaultValue="default">
        {mockOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};
