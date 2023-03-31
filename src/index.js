const subscribers = new Set()

let state = {}
let reducer = (state, type, payload) => payload

export function getState() {
  return { ...state }
}

const debounce = (callback) => {
  let timeoutId = null
  return (...args) => {
    window.cancelAnimationFrame(timeoutId)
    timeoutId = window.requestAnimationFrame(() => {
      callback.apply(null, args)
    })
  }
}

export function dispatch(type, payload) {
  state = reducer(getState(), type, payload)
  update()
}

export function subscribe(fn) {
  subscribers.add(fn)
}

export function configure(fn) {
  reducer = fn
}

const update = debounce(function publish() {
  for (const fn of subscribers.values()) {
    fn(getState())
  }
})
