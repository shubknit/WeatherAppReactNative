const forecastReducerState = [];


export default (state = forecastReducerState, action) => {
    switch (action.type) {
        case 'SET_FORECAST_DATA':
            return action.foreCastData
        default : 
            return state;    

    }
}