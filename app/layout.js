import './globals.css'
import style from './layout.module.css'
// eslint-disable-next-line camelcase
import Provider from './providers'
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
                <Provider>
                    <main
                        className={
                            'bg-pink-100 dark:bg-black ' + style.background
                        }
                    >
                        <Header />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <div className='flex items-center justify-center px-8'>
                            {children}
                        </div>
                    </main>
                </Provider>
            </body>
        </html>
    )
}
