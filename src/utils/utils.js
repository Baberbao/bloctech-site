import React, { createContext, useState } from "react"

export const AppContext = createContext()
export const AppContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [terms, setTerms] = useState("block")

  return (
    <AppContext.Provider value={{ open, setOpen, terms, setTerms }}>
      {children}
    </AppContext.Provider>
  )
}
