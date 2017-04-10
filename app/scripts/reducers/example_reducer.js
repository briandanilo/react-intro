import { createStore } from 'redux';

export default function rootReducer() {

    const initialState = { items: [], }

    const storeDispatchProcessor = function (state,action) {

      if (state === undefined)
        state = initialState;

      switch (action.type){
        case "TEST":
          console.log("TESTING!",state,action)
          return state
        default:
          return state
      }
    }

    const store = createStore(storeDispatchProcessor);

}
