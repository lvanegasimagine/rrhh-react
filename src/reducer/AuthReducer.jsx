import { AUTH_IS_READY, LOGIN, LOGOUT } from '../types/Types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.payload };
    case LOGOUT:
      return { ...state, user: null };
    case AUTH_IS_READY:
      return { ...state, user: action.payload, authIsReady: true };
    default:
      return state;
  }
};
