const subscribers = new Set()

let state = {}
let reducer = (state, type, payload) => payload
let middleware = []

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
  middleware.forEach((fn) => fn(type, payload, { getState, dispatch }))
  state = reducer(getState(), type, payload)
  update()
}

export function subscribe(fn) {
  subscribers.add(fn)
}

export function configure(r, m = []) {
  reducer = r
  middleware = m
}

const update = debounce(function publish() {
  for (const fn of subscribers.values()) {
    fn(getState())
  }
})
