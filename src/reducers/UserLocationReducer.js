const userLocationReducerState = [];


export default (state = userLocationReducerState, action) => {
    switch (action.type) {
        case 'SET_LOCATION_DATA':
            return action.data
        default : 
            return state;    

    }
}