import { useEffect, useState } from 'react'
import './App.css'
import langColors from './assets/lang-color.json'
import GitBoard from './GitBoard/GitBoard'
import Header from './Header/Header'
import axios from 'axios'
import DarkSwitch from './DarkMode/DarkSwitch'

function App() {
  const [gitRepos, setGitRepos] = useState()

  useEffect(() => {
    getRepo()
  }, [])

  async function getRepo() {
    await axios.get('https://api.github.com/users/ilyagladkov/repos')
      .then(res => setGitRepos(res.data))
  }

  return (
    <div className='h-full'>
      <DarkSwitch />
      <Header />
      <GitBoard data={gitRepos} langColors={langColors}/>
    </div>
  )
}

export default App
