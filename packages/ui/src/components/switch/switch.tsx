'use client'

import * as SwitchPrimitive from '@radix-ui/react-switch'
import * as React from 'react'

import { cn, computeDrawnRadiusStyle } from '../../lib/utils'
import styles from './switch.module.scss'

function Switch({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(styles.root, className)}
      {...props}
      style={computeDrawnRadiusStyle()}
    >
      <SwitchPrimitive.Thumb data-slot="switch-thumb" className={styles.thumb} style={computeDrawnRadiusStyle()} />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
