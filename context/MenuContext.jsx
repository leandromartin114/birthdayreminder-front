import { createContext, useState } from 'react'

export const MenuContext = createContext()

const MenuContextProvider = ({ children }) => {
    const [open, setOpen] = useState(false)

    const logout = () => {
        // removeToken()
    }

    const handleToggle = () => {
        setOpen(!open)
    }

    const value = {
        handleToggle,
        open,
        logout,
    }

    return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}
export default MenuContextProvider
