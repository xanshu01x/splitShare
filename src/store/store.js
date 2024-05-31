import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './reducers/counterSlice';

export const store = configureStore({
    reducer: counterSlice
    // reducer: {
    //     counter: {
    //         reducer: (state, action) => {
    //             switch (action.type) {
    //                 case 'increment':
    //                     return { value: state.value + 1 }
    //                 case 'decrement':
    //                     return { value: state.value - 1 }
    //                 default:
    //                     throw new Error()
    //             }
    //         },
    //         preloadedState: { value: 0 },
    //     },
    // },
});
