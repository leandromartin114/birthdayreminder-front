import { Header } from './Header'
import style from '../styles/layout.module.css'

export const LayoutBackground = ({ children }) => {
    return (
        <main className={'bg-pink-100 dark:bg-black ' + style.background}>
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
    )
}
