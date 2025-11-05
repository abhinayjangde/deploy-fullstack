
import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/api/msg")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message)
      })
      .catch((err) => {
        console.error("Error fetching data:", err)
      })
  }, [])


  return (
    <>
      <div>
        <p>{message}</p>
      </div>
    </>
  )
}

export default App
