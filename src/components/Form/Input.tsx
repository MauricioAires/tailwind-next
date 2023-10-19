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
    <input className="flex-1 text-zinc-900 placeholder-zinc-600" {...props} />
  )
}

/**
 * InputControl
 */

type InputRootProps = ComponentProps<'div'>

export function Root(props: InputRootProps) {
  return (
    <div
      className=" flex w-full items-center gap-2 overflow-hidden rounded-lg border border-zinc-300 px-2 py-2 shadow-sm"
      {...props}
    >
      {props.children}
    </div>
  )
}
