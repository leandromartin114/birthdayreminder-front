import { Balloon, Balloons } from './Icons'
import Link from 'next/link'

export const BalloonLink = ({ text, href }) => {
    return (
        <Link href={href}>
            <Balloon text={text} />
        </Link>
    )
}

export const BalloonsLink = ({ text, href }) => {
    return (
        <Link href={href}>
            <Balloons text={text} />
        </Link>
    )
}

export const MobileLink = ({ children, href, onClick }) => {
    return (
        <Link
            className='text-lg font-semibold text-cyan-600'
            onClick={onClick}
            href={href}
        >
            {children}
        </Link>
    )
}
