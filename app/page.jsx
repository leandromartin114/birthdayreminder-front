import { Title } from '@/ui/Typography'
import { Cake } from '@/ui/Icons'
import { BalloonLink, BalloonsLink } from '@/ui/Anchors'

export default function Home() {
    return (
        <section className='relative w-full max-w-lg h-[calc(100vh-64px)] flex flex-col items-center justify-between pt-20'>
            <Title>No te vas a volver a olvidar de ese cumpleaños</Title>
            <Cake />
            <div className='flex items-end'>
                <BalloonsLink href='#' text='Registrarse' />
                <BalloonLink href='#' text='Ingresar' />
            </div>
        </section>
    )
}
