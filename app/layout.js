import './globals.css'
// eslint-disable-next-line camelcase
import { Poppins } from 'next/font/google'
import { Header } from '@/components/Header'

const poppins = Poppins({ weight: ['400', '600'], subsets: ['latin'] })

export const metadata = {
    title: 'Birthday Reminder',
    description: 'Now you will remember that birhtday',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={poppins.className}>
                <Header />
                <main className='bg-pink-200 min-h-[calc(100vh-64px)] flex items-center justify-center px-8'>
                    <div className='relative w-full max-w-lg'>
                        <div className='absolute top-0 -left-4 w-40 h-40 md:w-72 md:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob' />
                        <div className='absolute top-0 right-6 w-40 h-40 md:w-72 md:h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000' />
                        <div className='absolute bottom-4 left-20 w-40 h-40 md:w-72 md:h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000' />
                        {children}
                    </div>
                </main>
            </body>
        </html>
    )
}
