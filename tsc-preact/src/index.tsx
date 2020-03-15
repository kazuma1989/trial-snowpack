import * as preact from "/web_modules/preact.js";

import("./App.js").then(({ default: App }) => {
  preact.render(<App />, document.getElementById("root")!);
});
