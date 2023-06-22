import { Logo, Menu } from '@/ui/Icons'

export const Header = () => {
    return (
        <header className='h-16 w-full bg-cyan-300 p-2 flex items-center justify-between'>
            <Logo />
            <Menu />
        </header>
    )
}
