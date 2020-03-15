import * as React from "/web_modules/react.js";
import Title from "./Title.js";

export default function App() {
  const [active, setActive] = React.useState(false);
  const toggle = () => setActive(v => !v);

  return (
    <div onClick={toggle}>
      <Title label="Babel + React" active={active} />
    </div>
  );
}
