<div align="center">

# @defx/s4

## A Simple redux-like UI state container

</div>
<br />

@defx/s4 is a ~350b JavaScript library consisting of...

```js
import { configure, dispatch, subscribe, getState } from "@defx/s4"
```

### Install via NPM

```sh
npm install @defx/s4
```

### Import via CDN

```js
import {
  configure,
  dispatch,
  subscribe,
  getState,
} from "https://www.unpkg.com/@defx/s4"
```

## API

### configure

```ts
function configure(
  /**
   * The reducer function will handle each action that is dispatched and return the new state
   */
  fn: Reducer,
  /**
   * (optional) An array of middleware functions that will be invoked immediately after an action is dispatched and before it is passed to the reducer.
   */
  middleware?: Middleware[]
): void
```

### dispatch

```ts
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
```

### subscribe

```ts
function subscribe(
  /**
   * The subscription callback will be invoked with the current state whenever the state has changed
   */
  fn: SubscriptionCallback
)
```

...

### getState

```ts
/**
 * Returns a copy of the current state
 */
function getState(): SerialisableObject
```

### ready

```ts
/**
 * A Promise that will resolve once the store is configured
 */
ready: Promise<void>
```
