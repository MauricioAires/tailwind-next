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
  onFilesSelected: (files: File[], multiple: boolean) => void
}

const FileInputContext = createContext({} as FileInputContextType)

export function Root(props: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files])

      return
    }

    setFiles(files)
  }

  return (
    <FileInputContext.Provider
      value={{
        id,
        files,
        onFilesSelected,
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
