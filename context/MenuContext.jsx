'use client'
import { createContext, useState } from 'react'
import { removeToken } from '@/lib/api'

export const MenuContext = createContext()

const MenuContextProvider = ({ children }) => {
    const [open, setOpen] = useState(false)

    const logout = () => {
        removeToken()
    }

    const handleToggle = () => {
        setOpen(!open)
    }

    const value = {
        open,
        handleToggle,
        logout,
    }

    return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}
export default MenuContextProvider
