'use client'
import { Small } from '@/ui/Typography'
import { LeanLogo, LeanLogoW } from '@/ui/Icons'
import { useTheme } from 'next-themes'

export const Footer = () => {
    const { resolvedTheme } = useTheme()
    return (
        <footer className='h-16 lg:h-20 w-full bg-cyan-300 dark:bg-cyan-950 flex items-center justify-center gap-4 px-4 md:px-8 py-5'>
            <Small>Made by </Small>
            {resolvedTheme === 'light' ? <LeanLogo /> : <LeanLogoW />}
        </footer>
    )
}
