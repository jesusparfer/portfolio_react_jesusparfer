import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center items-center space-x-6">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-20 h-20" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-20 h-20" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold text-center mt-4">Vite + React</h1>
      <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
        <button 
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-700">
          Edit <code className="font-mono text-sm">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-center mt-6 text-sm text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
