const redux = require("redux")
const createStore =redux.createStore;

const INCREMENT_COUNTER ="INCREMENT_COUNTER";
const DECREMENT_COUNTER ="DECREMENT_COUNTER";
const RESET_COUNTER ="RESET_COUNTER";
const SET ="SET";

const initState = {
    counter:0
};


// const payload ={
//     value :10
// };


const incrementCounter =(payload={}) => ({
    type:INCREMENT_COUNTER,
    //incrementBy:payload.incrementBy===undefined?1 :payload.incrementBy
    incrementBy:typeof (payload.incrementBy)==='number'?payload.incrementBy:1
})

const decrementCounter =({decrementBy=1}={}) =>({
    type:DECREMENT_COUNTER,
    decrementBy
})


const setCounter = ({count=1} ={}) => ({
    type:SET,
    count
})

const resetCounter =({setCount=0}={}) => ({
    type:RESET_COUNTER,
    setCount

})

const a =undefined

const test =typeof(a)==='number'?a:1
console.log(test);

//console.log ('payload.incrementBy:',payload.incrementBy);

const counterReducer = (state =initState,action) => {
    
    switch (action.type) {        
        case INCREMENT_COUNTER:
            //console.log ('[action.incrementBy]',action.incrementBy)
            //const incrementBy = typeof (action.incrementBy) ==='number' ?action.incrementBy:1;
            console.log ('incrementBy:',action.incrementBy);
            return {
                ...state,
                counter:state.counter+action.incrementBy
            };
        case DECREMENT_COUNTER:
            //const decrementBy = typeof(action.decrementBy)==='number' ?action.decrementBy:-1;
            return {
                ...state,
                counter :state.counter-action.decrementBy
            };
        case RESET_COUNTER:
            return {
                ...state,
                counter:action.setCount
            } 
        case SET:
            return {
                ...state,
                counter:action.count
            }       
        default :
            return state
            
    }        
}

const store =createStore(counterReducer);
const unSubscribe =store.subscribe(()=> {
    console.log ("[subscription]", store.getState());
})


console.log(store.getState());


store.dispatch (incrementCounter({incrementBy:98}));
// to unsubscribe
//unSubscribe();
store.dispatch (incrementCounter());

store.dispatch(decrementCounter());
store.dispatch(decrementCounter({decrementBy:25}));

// store.dispatch({
//     type:INCREMENT_COUNTER
// });

// store.dispatch({
//     type:RESET_COUNTER
// });

// store.dispatch ({
//     type :DECREMENT_COUNTER
// });

// // store.dispatch ({
// //     type :DECREMENT_COUNTER,
// //     decrementBy:10
// // });

// store.dispatch (incrementCounter({incrementBy:10}))

// store.dispatch({
//     type :SET,
//     count:100
// })
//console.log(store.getState());

store.dispatch(setCounter({count:7}))
store.dispatch(resetCounter({setCount:0}))






