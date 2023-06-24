import { Logo, Menu } from '@/ui/Icons'
import { ThemeSwitcher } from './ThemeSwitcher'

export const Header = () => {
    return (
        <header className='h-16 w-full bg-cyan-300 dark:bg-cyan-950 flex items-center justify-between px-4 md:px-8 py-5 absolute z-20'>
            <Logo />
            <div className='flex items-center justify-between gap-5 md:gap-7 lg:gap-9'>
                <ThemeSwitcher />
                <Menu />
            </div>
        </header>
    )
}
