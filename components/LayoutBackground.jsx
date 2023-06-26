import { Header } from './Header'
import { Footer } from './Footer'
import style from '../styles/layout.module.css'

export const LayoutBackground = ({ children }) => {
    return (
        <main>
            <Header />
            <div className={'bg-pink-100 dark:bg-black ' + style.background}>
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
            </div>
            <div className='flex flex-col items-center justify-center px-8'>
                {children}
            </div>
            <Footer />
        </main>
    )
}
