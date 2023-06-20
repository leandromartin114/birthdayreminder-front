import './globals.css'
// eslint-disable-next-line camelcase
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ['400', '600'], subsets: ['latin'] })

export const metadata = {
    title: 'Birthday Reminder',
    description: 'Now you will remember that birhtday',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={poppins.className}>{children}</body>
        </html>
    )
}
