'use client'

import * as SwitchPrimitive from '@radix-ui/react-switch'
import * as React from 'react'

import { cn, computeDrawnBorderClass } from '../../lib/utils'
import styles from './switch.module.scss'

function Switch({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>) {
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
