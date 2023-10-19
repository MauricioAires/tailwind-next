import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500',
    'active:opacity-80',
  ],
  variants: {
    variant: {
      primary: 'bg-violet-600 text-white hover:bg-violet-700',
      outline: 'border border-zinc-300 text-zinc-700 bg-zinc-50',
      ghost: 'rounded-md px-2 hover:bg-zinc-50 shadow-none',
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

/**
 *  Não precisa especificar o children porque ele já vai ser
 * repassado pelo props
 */
export function Button({ variant, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={button({
        variant,
      })}
    />
  )
}
