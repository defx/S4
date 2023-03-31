import { configure, subscribe, dispatch, getState } from "../src/index.js"

describe("s4", () => {
  it("works", async () => {
    let value

    const reducer = (state, type, payload) => {
      return payload
    }

    configure(reducer)

    subscribe((state) => (value = state))

    const payload = { foo: "bar" }

    dispatch("any", payload)

    assert.equal(value, undefined)

    await nextFrame()

    assert.deepEqual(getState(), payload)
    assert.deepEqual(value, payload)
  })
})
