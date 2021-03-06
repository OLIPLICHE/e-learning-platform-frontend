import { SET_ITEM_SIZE, SET_SLIDER_INDEX } from './actions/sliderActions';
import {
  TOGGLE_MODAL, SET_ACTIVE_LINK, SET_DASHBOARD_CHILD_LINK, IS_MOBILE,
} from './actions/navActions';

const initialState = {
  navBar: {
    mobile: false,
    expandMobile: false,
    activeLink: '/',
    activeDashboardLink: 'Courses',
  },
  slider: {
    slideIndex: 0,
    itemsSize: 3,
  },
};

const utilReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEM_SIZE: {
      return {
        ...state,
        slider: {
          ...state.slider,
          itemsSize: action.payload,
        },
      };
    }
    case SET_SLIDER_INDEX: {
      return {
        ...state,
        slider: {
          ...state.slider,
          slideIndex: action.payload,
        },
      };
    }
    case IS_MOBILE: {
      return {
        ...state,
        navBar: {
          ...state.navBar,
          mobile: action.payload,
        },
      };
    }
    case TOGGLE_MODAL: {
      return {
        ...state,
        navBar: {
          ...state.navBar,
          expandMobile: action.payload,
        },
      };
    }
    case SET_ACTIVE_LINK: {
      return {
        ...state,
        navBar: {
          ...state.navBar,
          activeLink: action.payload,
        },
      };
    }
    case SET_DASHBOARD_CHILD_LINK: {
      return {
        ...state,
        navBar: {
          ...state.navBar,
          activeDashboardLink: action.payload,
        },
      };
    }
    default:
      return state;
  }
};

export default utilReducer;
