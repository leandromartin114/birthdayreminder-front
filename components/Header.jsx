import { Logo } from '@/ui/Icons'
import { ThemeSwitcher } from './ThemeSwitcher'
import { MobileNav } from './MobileNav'
import { DesktopNav } from './DesktopNav'

export const Header = () => {
    return (
        <header className='h-16 lg:h-20 w-full bg-cyan-300 dark:bg-cyan-950 flex items-center justify-between px-4 md:px-8 py-5'>
            <Logo />
            <div className='flex items-center justify-between gap-5 md:gap-7 lg:gap-9'>
                <ThemeSwitcher />
                <MobileNav />
                <DesktopNav />
            </div>
        </header>
    )
}
