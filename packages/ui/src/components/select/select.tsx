import * as React from 'react'
import * as RadixSelect from '@radix-ui/react-select'

import styles from './select.module.scss'
import { ChevronDown } from 'lucide-react'
import clsx from 'clsx'

export type SelectProps = React.ComponentProps<typeof RadixSelect.Root>
export type SelectItemProps = React.ComponentProps<typeof RadixSelect.Item>

export const Select = ({ children, ...props }: SelectProps) => (
  <RadixSelect.Root {...props}>
    <RadixSelect.Trigger className={styles.trigger} aria-label="mock datasets">
      <RadixSelect.Value placeholder="Select" />
      <ChevronDown className={styles.chevronIcon} />
    </RadixSelect.Trigger>
    <RadixSelect.Portal>
      <RadixSelect.Content className={styles.content} position="popper">
        <RadixSelect.Viewport className={styles.viewport}>{children}</RadixSelect.Viewport>
      </RadixSelect.Content>
    </RadixSelect.Portal>
  </RadixSelect.Root>
)

export const SelectItem = ({ children, className, ...props }: SelectItemProps) => {
  return (
    <RadixSelect.Item className={clsx(styles.item, className)} {...props}>
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
    </RadixSelect.Item>
  )
}
