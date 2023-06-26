'use client'
import { useContext } from 'react'
import { MenuContext } from '@/context/MenuContext'
import { Menu, CloseWindow } from '@/ui/Icons'
import { MobileLink } from '@/ui/Anchors'

export const MobileNav = () => {
    const { open, handleToggle, logout } = useContext(MenuContext)

    return (
        <nav className='relative md:hidden'>
            <button
                className='relative z-10 flex items-center'
                onClick={handleToggle}
            >
                {open ? <CloseWindow /> : <Menu />}
            </button>
            <button
                tabIndex={-1}
                onClick={handleToggle}
                className={`fixed inset-0 bg-black opacity-20 dark:bg-gray-600 dark:opacity-70 cursor-default ${
                    open ? 'visible' : 'invisible'
                }`}
            />
            <ul
                className={`fixed inset-0 w-full m-auto gap-4 flex flex-col items-center justify-center py-2 bg-purple-100 dark:bg-cyan-950 rounded-full shadow-xl transition-all duration-400 ease-linear overflow-hidden z-20 ${
                    open ? 'max-h-[600px]' : 'max-h-0 invisible'
                }`}
            >
                <li>
                    <MobileLink onClick={handleToggle} href='#'>
                        guardar cumple
                    </MobileLink>
                </li>
                <li>
                    <MobileLink onClick={handleToggle} href='#'>
                        mi perfil
                    </MobileLink>
                </li>
                <li>
                    <MobileLink onClick={handleToggle} href='#'>
                        ingresar
                    </MobileLink>
                </li>
                <li>
                    <MobileLink onClick={handleToggle} href='#'>
                        registrarse
                    </MobileLink>
                </li>
            </ul>
        </nav>
    )
}
