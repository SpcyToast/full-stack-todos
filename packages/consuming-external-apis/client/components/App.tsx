import { useState, useEffect } from 'react'
import { useLoaderData} from 'react-router-dom'
import { getWelcome } from '../apiClient'

function App() {
  const welcome = useLoaderData()

  return <h1>{welcome}</h1>
}

export default App
