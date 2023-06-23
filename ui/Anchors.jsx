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
