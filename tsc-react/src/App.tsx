import * as React from "react";
import Title from "./Title";

export default function App() {
  const [active, setActive] = React.useState(false);
  const toggle = () => setActive(v => !v);

  return (
    <div onClick={toggle}>
      <Title label="Babel + React" active={active} />
    </div>
  );
}
