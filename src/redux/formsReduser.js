import { GET_FEEDBACK, SET_FEEDBACK_SUCCESS } from "./typeForms";

const initState = {
  feedback: {
    fields: {},
    statusText: "",
    status: 0,
    success: false,
  },
};

export const forms = (state = initState, action) => {
  switch (action.type) {
    case GET_FEEDBACK:
      return {
        ...state,
        feedback: action.feedback,
      };
    case SET_FEEDBACK_SUCCESS:
      return {
        ...state,
        feedback: {
            ...state,
            success: action.success
        },
      };
    default:
      return state;
  }
};
