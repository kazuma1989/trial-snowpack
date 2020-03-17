import preact from '/web_modules/preact/compat.js'

import('./App.js').then(({ default: App }) => {
  preact.render(<App />, document.getElementById('root')!)
})
