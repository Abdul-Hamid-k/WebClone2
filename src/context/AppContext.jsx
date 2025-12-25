import { createContext, useState } from "react"

export const MainContext = createContext()

const AppContext = ({ children }) => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false)

  const values = {
    isMobileNavVisible,
    setIsMobileNavVisible
  }
  return (
    <MainContext.Provider value={values}>{children}</MainContext.Provider>
  )
}

export default AppContext