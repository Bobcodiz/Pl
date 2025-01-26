/*
import Redux from 'redux'

function ReduxDemo() {
    const newBooking =(name,amount) =>{
        return {
            type:"NEW_BOOKING",
            payload :{
                name,amount,
            }
        }
    }

    const cancelBooking = (name,refundAmount) =>{
        return {
            type:"CANCEL_BOOKING",
            payload:{
                name,refundAmount,
            }
        }
    }

    const reservationHistory = (oldreservation = [], action) =>{

        if (action.type === "NEW_BOOKING") {
            return [...oldreservation,action.payload]
        }else if (action.type === "CANCEL_BOOKING") {
            return oldreservation.filter((record) =>{
                return record.name !== action.payload.name
            })

        }
        return oldreservation;

    }

    const cancellationBooking = (cacelledBookings = [], action) =>{
        if (action.type === "CANCEL_BOOKING") {
            return [...cacelledBookings,action.payload]
        }
        return cacelledBookings;
    }

    const accountBalances = (totals = 200,action) =>{
        if (action.type === "CANCEL_BOOKING") {
            return  totals - action.payload.refundAmount;
        }else if (action.type === "NEW_BOOKING") {
            return totals + action.payload.amount;
        }
        return totals;
    }

    console.log(accountBalances(newBooking));
    console.log(Redux)

    const {createStore, combineReducer} = Redux;
    const busStore = createStore(combineReducer({
        accountBalances: accountBalances,
        cancellationBooking: cancellationBooking,
        reservationHistory: reservationHistory,
    }));

    const store = createStore(busStore)
    cancelBooking("",0)
    store.dispatch(newBooking("Bob",50))
    console.log(store.getState())


}

export default ReduxDemo;*/
