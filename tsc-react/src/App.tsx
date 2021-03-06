import React, { useState } from '/web_modules/react.js'
import Title from './Title.js'

export default function App() {
  const [active, setActive] = useState(false)
  const toggle = () => setActive(v => !v)

  return (
    <div onClick={toggle}>
      <Title label="tsc + React" active={active} />
    </div>
  )
}
