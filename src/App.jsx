import { useEffect, useState } from 'react'
import './App.css'
import langColors from './assets/lang-color.json'
import GitBoard from './GitBoard/GitBoard'
import Header from './Header/Header'
import axios from 'axios'

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
    <>
      <Header />
      <h1 className='text-4xl text-center font-bold mt-5 mb-10'> GitHub repository</h1>
      <GitBoard data={gitRepos} langColors={langColors}/>
    </>
  )
}

export default App
