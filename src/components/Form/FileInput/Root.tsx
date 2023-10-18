'use client'

import {
  useContext,
  ComponentProps,
  createContext,
  useId,
  useState,
} from 'react'

export type RootProps = ComponentProps<'div'>

type FileInputContextType = {
  id: string
  files: File[]
  onFilesSelected: (files: File[]) => void
}

const FileInputContext = createContext({} as FileInputContextType)

export function Root(props: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  return (
    <FileInputContext.Provider
      value={{
        id,
        files,
        onFilesSelected: setFiles,
      }}
    >
      <div {...props} />
    </FileInputContext.Provider>
  )
}

/**
 *  Use context FileInput
 */
export const useFileInput = () => useContext(FileInputContext)
