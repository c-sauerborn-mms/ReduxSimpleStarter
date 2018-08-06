import { bindActionCreators } from "../../node_modules/redux";

// State argument is not app state, 
// its only the state the reducer is responsible for
export default function(state = null, action){

    switch(action.type){
        case "BOOK_SELECTED": return action.payload;
    }

    return state;
}