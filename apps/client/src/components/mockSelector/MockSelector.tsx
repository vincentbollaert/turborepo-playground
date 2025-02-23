import { handleSetMockVariants, mockVariantsByEndpoint } from '@repo/api/utils'
import { useQueryClient } from '@tanstack/react-query'
import styles from './mockSelector.module.scss'

export const MockSelector = () => {
  const queryClient = useQueryClient()

  const handleMockChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMockVariantType = event.target.value as any
    handleSetMockVariants({ endpointId: 'features', mockVariantType: selectedMockVariantType })

    queryClient.invalidateQueries({ queryKey: ['get', '/features'] })
  }

  const mockOptions: { value: any; label: string }[] = [
    { value: 'default', label: 'Default' },
    { value: 'empty', label: 'Empty' },
    { value: 'error', label: 'Error' },
  ]

  return (
    <div className={styles.mockSelector}>
      <label className={styles.label} htmlFor="mockSelect">
        Mock Data:
      </label>
      <select id="mockSelect" className={styles.select} onChange={handleMockChange} defaultValue="default">
        {mockOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
