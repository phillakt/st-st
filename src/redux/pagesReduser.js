import { GET_MANUAL_DESKTOP } from "./typePages";

const initState = {
  manualDesktop: "",
};

export const pages = (state = initState, action) => {
  switch (action.type) {
    case GET_MANUAL_DESKTOP:
      return {
        ...state,
        manualDesktop: action.manualDesktop,
      };
    default:
      return state;
  }
};
