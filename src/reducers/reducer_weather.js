import { FETCH_WEATHER_DATA } from '../actions/action_fetch_weatherdata';

export default function(state = [], action){

    switch(action.type){
        case FETCH_WEATHER_DATA:
            return [ action.payload.data, ...state ];

    }

    return state;
}
