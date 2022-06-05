import { CHANGE_MOBILE_VIEW } from "./typesHeader";

const initState = {
  menuDesktop: {
    view: true,
  },
  menuMobile: {
    view: false,
  },
  searchBox: {},
  logIn: {},
};

export const header = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_MOBILE_VIEW:
      return {
        ...state,
        menuMobile: {
          view: action.menuMobile,
        },
      };

    default:
      return {
        ...state,
      };
  }
};
