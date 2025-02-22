import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../../lib/utils'
import styles from './button.module.scss'

const buttonVariants = cva('btn', {
  variants: {
    variant: {
      default: styles.btnDefault,
      ghost: styles.btnGhost,
      link: styles.btnLink,
    },
    size: {
      default: styles.btnSizeDefault,
      large: styles.btnSizeLarge,
      icon: styles.btnSizeIcon,
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
