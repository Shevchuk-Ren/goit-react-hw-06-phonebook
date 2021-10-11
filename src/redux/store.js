import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import phoneReducer from './phoneBook/phonebook-reducer';

// const initialState = {};

// const reducer = (initialState, composeWithDevTools(applyMiddleware([])))
// // => {
// //     console.log(`reducer and action`)
// //     return initialState;
// // };

// const phoneInitialState = {
//     phoneBook: {
//         value: [],
//         step: 1,
//     }
// };
// const valueReducer = (state = [], { type, payload }) => {
//         switch (type) {
//         case 'phone/PUPS':
//             return state + payload

//         default:
//             return state;
//     }
// }
// const phoneReducer = (state = phoneInitialState, { type, payload }) => {
//     switch (type) {
//         case 'phone/PUPS':
//             return {
//                 ...state,
//                 value: payload
//             }

//         default:
//             return state;
//     }
// }
// const stepReducer = (state = 1, action) => state

// const phoneReducer = combineReducers({
//   value: valueReducer,
//         step: stepReducer,
// })

const rootReducer = combineReducers({
  phoneBook: phoneReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
