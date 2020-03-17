import preact from '/web_modules/preact/compat.js'
import { useState } from '/web_modules/preact/hooks.js'
import Title from './Title.js'

export default function App() {
  const [active, setActive] = useState(false)
  const toggle = () => setActive(v => !v)

  return (
    <div onClick={toggle}>
      <Title label="tsc + Preact" active={active} />
    </div>
  )
}
