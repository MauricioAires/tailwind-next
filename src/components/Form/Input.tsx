import { ComponentProps } from 'react'

/**
 *
 *  Composition Pattern
 *
 * É quando quebra um componente maior em componentes
 * menores sendo possível agrupar esse componentes
 * menores adiciona propriedades ao componente principal
 */

/**
 * InputPrefix
 */
type InputPrefixProps = ComponentProps<'div'>

export function Prefix(props: InputPrefixProps) {
  return <div {...props} />
}

/**
 * InputControl
 */

type InputControlProps = ComponentProps<'input'>

export function Control(props: InputControlProps) {
  return (
    <input
      className="flex-1  border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none focus:ring-0"
      {...props}
    />
  )
}

/**
 * InputControl
 */

type InputRootProps = ComponentProps<'div'>

export function Root(props: InputRootProps) {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus-within:ring-2 focus-within:ring-violet-500 focus-within:ring-offset-2"
      {...props}
    >
      {props.children}
    </div>
  )
}
