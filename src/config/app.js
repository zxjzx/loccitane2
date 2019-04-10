import Request from '../config/http'

const App = {
  logEvent (opts) {
    let data = {
      type: opts.type,
      name: opts.name,
      time: opts.time,
      params: opts.params || {}
    }

    Request.methods.apiPost('/log/event', data).then(res => {
      console.log(res)
    })

  }
}
App.install = (Vue, options) => {
  Vue.prototype.$app = {
    // ...
    logEvent: App.logEvent
  }
}

export default App
