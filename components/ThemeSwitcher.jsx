'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@/ui/Icons'

export const ThemeSwitcher = () => {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    const handleTheme = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    }

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null
    return (
        <button className='flex items-center' onClick={handleTheme}>
            {resolvedTheme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
    )
}
