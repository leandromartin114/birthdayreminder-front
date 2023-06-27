import { DesktopLink, DesktopLinkSpecial } from '@/ui/Anchors'

export const DesktopNav = () => {
    return (
        <nav className='hidden lg:flex p-2 gap-8'>
            <ul className='flex justify-around items-center gap-8'>
                <li>
                    <DesktopLink href='#'>guardar cumple</DesktopLink>
                </li>
                <li>
                    <DesktopLink href='#'>mi perfil</DesktopLink>
                </li>
                <li>
                    <DesktopLink href='#'>ingresar</DesktopLink>
                </li>
                <li>
                    <DesktopLinkSpecial href='#'>
                        registrarse
                    </DesktopLinkSpecial>
                </li>
            </ul>
        </nav>
    )
}
