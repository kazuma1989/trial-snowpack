import * as React from "/web_modules/react.js";
import * as ReactDOM from "/web_modules/react-dom.js";

import("./App.js").then(({ default: App }) => {
  ReactDOM.render(<App />, document.getElementById("root")!);
});
