import { handleSetMockVariants } from '@repo/api/utils'
import { useQueryClient } from '@tanstack/react-query'
import styles from './mockSelector.module.scss'
import { Select, SelectItem } from '@repo/ui/select'

// NOTE: this component should be more dumb
export const MockSelector = () => {
  const queryClient = useQueryClient()

  const handleMockChange = (newValue: string) => {
    handleSetMockVariants({ endpointId: 'features', mockVariantType: newValue as any })

    queryClient.invalidateQueries({ queryKey: ['get', '/features'] })
  }

  const mockOptions: { value: any; label: string }[] = [
    { value: 'default', label: 'all' },
    { value: 'empty', label: 'empty' },
    { value: 'error', label: 'error' },
  ]

  return (
    <div className={styles.mockSelector}>
      <label htmlFor="mockSelect" className={styles.label}>
        features GET
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
