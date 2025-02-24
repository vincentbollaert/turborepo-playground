import { handleSetMockVariants, mockVariantsByEndpoint } from '@repo/api/utils'
import { useQueryClient } from '@tanstack/react-query'
import styles from './mockSelector.module.scss'
import { Select, SelectItem } from '@repo/ui/select'

export const MockSelector = () => {
  const queryClient = useQueryClient()

  const handleMockChange = (newValue: string) => {
    handleSetMockVariants({ endpointId: 'features', mockVariantType: newValue as any })

    queryClient.invalidateQueries({ queryKey: ['get', '/features'] })
  }

  const mockOptions: { value: any; label: string }[] = [
    { value: 'default', label: 'Default' },
    { value: 'empty', label: 'Empty' },
    { value: 'error', label: 'Error' },
  ]

  return (
    <div className={styles.mockSelector}>
      <label htmlFor="mockSelect" className={styles.label}>
        features get
      </label>
      <Select onValueChange={handleMockChange} defaultValue="default">
        {mockOptions.map(option => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  )
}
