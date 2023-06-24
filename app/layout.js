import './globals.css'
// eslint-disable-next-line camelcase
import MenuContextProvider from '@/context/MenuContext'
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
                <MenuContextProvider>
                    <Provider>
                        <LayoutBackground>
                            <div className='flex items-center justify-center'>
                                {children}
                            </div>
                        </LayoutBackground>
                    </Provider>
                </MenuContextProvider>
            </body>
        </html>
    )
}
