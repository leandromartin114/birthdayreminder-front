import { Title } from '@/ui/Typography'
import { LoginForm } from '@/components/LoginForm'

export default function LoginPage() {
    return (
        <section className='relative w-full max-w-lg h-[calc(100vh-64px)] flex flex-col items-center justify-center gap-20'>
            <Title>Iniciar sesión</Title>
            <LoginForm />
        </section>
    )
}
