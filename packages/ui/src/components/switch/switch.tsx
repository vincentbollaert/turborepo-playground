import * as SwitchPrimitive from '@radix-ui/react-switch'
import * as React from 'react'

import { cn, computeDrawnBorderClass } from '../../lib/utils'
import styles from './switch.module.scss'

type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root>
function Switch({ className, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(styles.root, computeDrawnBorderClass(), className)}
      {...props}
    >
      <SwitchPrimitive.Thumb data-slot="switch-thumb" className={cn(styles.thumb, computeDrawnBorderClass())} />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
