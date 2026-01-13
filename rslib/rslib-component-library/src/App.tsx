import { useState } from 'react'
import reactLogo from './assets/react.svg'
import rslibLogo from './assets/rslib.svg'
import './App.css'
import Button from './components/Button.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://rslib.rs/" target="_blank">
          <img src={rslibLogo} className="logo" alt="RSLib logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Rslib + React</h1>
      <Button type={"primary"} className="app-button" />
      <Button type={"secondary"} className="app-button" />
      <Button type={"tertiary"} className="app-button" />
      <Button type={"destructive"} className="app-button" />
    </>
  )
}

export default App
