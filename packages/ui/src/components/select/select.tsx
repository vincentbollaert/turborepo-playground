import * as React from 'react'
import * as RadixSelect from '@radix-ui/react-select'

import styles from './select.module.scss'
import { cn, computeDrawnBorderClass } from '../../lib/utils'

export type SelectProps = React.ComponentProps<typeof RadixSelect.Root>
export type SelectItemProps = React.ComponentProps<typeof RadixSelect.Item>

export const Select = ({ children, ...props }: SelectProps) => (
  <RadixSelect.Root {...props}>
    <RadixSelect.Trigger className={styles.Trigger} aria-label="Food">
      <RadixSelect.Value placeholder="RadixSelect a fruit…" />
      <RadixSelect.Icon className={styles.Icon}>CLick</RadixSelect.Icon>
    </RadixSelect.Trigger>
    <RadixSelect.Portal>
      <RadixSelect.Content className={styles.Content}>
        <RadixSelect.Viewport className={styles.Viewport}>{children}</RadixSelect.Viewport>
      </RadixSelect.Content>
    </RadixSelect.Portal>
  </RadixSelect.Root>
)

export const SelectItem = ({ children, className, ...props }: SelectItemProps) => {
  return (
    <RadixSelect.Item className={cn(styles.Item, className)} {...props}>
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      <RadixSelect.ItemIndicator className={styles.ItemIndicator}>ACTIVE</RadixSelect.ItemIndicator>
    </RadixSelect.Item>
  )
}
