import * as React from "react";
import * as ReactDOM from "react-dom";

import("./App").then(({ default: App }) => {
  ReactDOM.render(<App />, document.getElementById("root")!);
});
