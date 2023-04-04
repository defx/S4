export as namespace S4

declare namespace S4 {
  type Primitive = string | boolean | number | null

  type SerialisableObject = Record<string, Primitive | SerialisableObject>

  type Reducer = {
    /**
     * The type argument identifies the action that was dispatched. The return value will define the next state.
     */
    (state: SerialisableObject, type: string, payload: SerialisableObject)
  }

  type SubscriptionCallback = {
    /**
     * The subscription callback is a function that will be invoked with the current state whenever the state has changed
     */
    (state: SerialisableObject): void
  }

  function dispatch(
    /**
     * The name of the action
     */
    type: string,
    /**
     * An object containing any values required to update state
     */
    payload: SerialisableObject
  )

  function getState(): SerialisableObject

  function subscribe(fn: SubscriptionCallback)

  type Middleware = {
    (type: string, payload: SerialisableObject, { getState, dispatch }): void
  }

  function configure(
    /**
     * The reducer function will handle each action that is dispatched and return the new state
     */
    fn: Reducer,
    /**
     * (optional) An array of middleware functions
     */
    middleware?: Middleware[]
  ): void
}
