import { GET_FEEDBACK } from "./typeForms";

const initState = {
    feedback: ""
}

export const forms = (state = initState, action) => {
    switch (action.type) {
        case GET_FEEDBACK:
            console.log('feedback redux: ', action);
            return {
                ...state,
                feedback: action.feedback,
              };
    
        default:
            return state;
    }
}