'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Toaster, toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { DotPulse } from '@uiball/loaders'
import { sendCodeLogin, getToken, getMe } from '@/lib/api'

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()
    const router = useRouter()
    const [loader, setLoader] = useState(false)
    const [email, setEmail] = useState('')

    // Sending the code to the user email
    const handleSendCode = async (data) => {
        setLoader(true)
        // dispatch(setUserEmail(data.email))
        const res = await sendCodeLogin(data.email)
        if (res.status === 400) {
            setTimeout(() => {
                toast.error('Usuario no encontrado', {
                    description: `El usuario no existe, debes registrarte`,
                })
            }, 2000)
            router.push('/signup')
        } else {
            setTimeout(() => {
                toast.message('Código enviado', {
                    description: `Enviamos tu código a: ${data.email}`,
                })
            }, 2000)
            setLoader(false)
            setEmail(data.email)
        }
        reset()
    }
    // Sign in the user and getting data from server
    const handleLogin = async (data) => {
        setLoader(true)
        try {
            const token = await getToken(email, data.code)
            if (token) {
                toast.success('Logueado con éxito', {
                    description: `Bienvenido`,
                })
                const dataFromServer = await getMe()
                // dispatch(setUserData(dataFromServer))
            }
            setTimeout(() => {
                router.push('/')
            }, 3000)
        } catch (error) {
            setLoader(false)
            toast.error('Hubo un error', {
                description: `Inténtalo nuevamente por favor`,
            })
            return error
        }
        reset()
    }

    return (
        <>
            {!email ? (
                <form
                    className='grid content-center gap-6 border border-purple-400 rounded-lg p-4'
                    onSubmit={handleSubmit(handleSendCode)}
                >
                    <label className='flex flex-col gap-1'>
                        <span className='text-sm lg:text-base text-purple-500 dark:text-purple-400'>
                            email
                        </span>
                        <input
                            className='text-lg bg-purple-50 rounded-lg p-2 w-full'
                            type='email'
                            {...register('email', { required: true })}
                        />
                        {errors.email && <span>This field is required</span>}
                    </label>
                    <button
                        className='rounded-full bg-purple-500 text-white text-base font-semibold px-1 py-2 w-full hover:bg-purple-400'
                        type='submit'
                    >
                        {loader ? (
                            <DotPulse size={40} speed={1.3} color='black' />
                        ) : (
                            'Enviar'
                        )}
                    </button>
                </form>
            ) : (
                <form
                    className='grid content-center gap-4'
                    onSubmit={handleSubmit(handleLogin)}
                >
                    <label className='flex flex-col gap-1'>
                        <span className='text-sm lg:text-base text-purple-500 dark:text-purple-400'>
                            código
                        </span>
                        <input
                            className='text-lg bg-purple-100 rounded-lg p-2 w-full'
                            type='number'
                            {...register('code', { required: true })}
                        />
                        {errors.email && <span>This field is required</span>}
                    </label>
                    <button type='submit'>
                        {loader ? (
                            <DotPulse size={40} speed={1.3} color='black' />
                        ) : (
                            'Ingresar'
                        )}
                    </button>
                </form>
            )}
            <Toaster richColors />
        </>
    )
}
