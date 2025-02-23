import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../../lib/utils'
import styles from './button.module.scss'

const buttonVariants = cva('btn', {
  variants: {
    variant: {
      default: cn(styles.btn, styles.btnDefault),
      ghost: cn(styles.btn, styles.btnGhost),
      link: cn(styles.btn, styles.btnLink),
    },
    size: {
      default: cn(styles.btn, styles.btnSizeDefault),
      large: cn(styles.btn, styles.btnSizeLarge),
      icon: cn(styles.btn, styles.btnSizeIcon),
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

export { Button, buttonVariants }
