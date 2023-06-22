import { Title } from '@/ui/Typography'
import { Balloons, Balloon, Cake } from '@/ui/Icons'

export default function Home() {
    return (
        <section className='relative w-full max-w-lg h-[calc(100vh-64px)] flex flex-col items-center justify-between pt-10'>
            <Title>No te vas a volver a olvidar de ese cumpleaños</Title>
            <Cake />
            <div className='flex items-end'>
                <Balloons />
                <Balloon />
            </div>
        </section>
    )
}
