'use client'
import { ThemeProvider } from 'next-themes'
import { useState, useEffect } from 'react'
import MenuContextProvider from '@/context/MenuContext'

export default function Provider({ children }) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return <>{children}</>
    return (
        <ThemeProvider attribute='class'>
            <MenuContextProvider>{children}</MenuContextProvider>
        </ThemeProvider>
    )
}
