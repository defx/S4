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

  /**
   * Returns a copy of the current state
   */
  function getState(): SerialisableObject

  function subscribe(
    /**
     * The subscription callback will be invoked with the current state whenever the state has changed
     */
    fn: SubscriptionCallback
  )

  type Middleware = {
    (type: string, payload: SerialisableObject, { getState, dispatch }): void
  }

  function configure(
    /**
     * The reducer function will handle each action that is dispatched and return the new state
     */
    fn: Reducer,
    /**
     * (optional) An array of middleware functions that will be invoked immediately after an action is dispatched and before it is passed to the reducer.
     * Unlike redux, the current design does not pass any continuation function (i.e., "next()"), the functions are all simply invoked with no way to delay or cancel the current action, however, by use of the provided getState and dispatch methods they may dispatch their own actions at a later time, such as after the completion of some asynchronous work
     */
    middleware?: Middleware[]
  ): void
}
