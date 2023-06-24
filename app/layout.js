import './globals.css'
// eslint-disable-next-line camelcase
import Provider from './providers'
import { Poppins } from 'next/font/google'
import { LayoutBackground } from '@/components/LayoutBackground'

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
                    <LayoutBackground>
                        <div className='flex items-center justify-center px-8'>
                            {children}
                        </div>
                    </LayoutBackground>
                </Provider>
            </body>
        </html>
    )
}
