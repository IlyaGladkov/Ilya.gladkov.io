import { useEffect, useState } from "react"

const DarkSwitch = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme'))

    useEffect(() => {
        if (theme === 'Dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const changeTheme = () => {
        setTheme(theme === 'Dark' ? 'Light' : 'Dark')
        localStorage.setItem('theme', theme === 'Dark' ? 'Light' : 'Dark')
    }

    return(
        <div className='flex sm:justify-center justify-end w-full h-8 pt-3 px-5'>
            <button 
                onClick={changeTheme} 
                className='w-24 h-7 border rounded-full border-gray-300 bg-transparent dark:text-slate-300'
            >
                {theme === 'Dark' ? 'Light': 'Dark'}
            </button>
        </div>
    )
}

export default DarkSwitch