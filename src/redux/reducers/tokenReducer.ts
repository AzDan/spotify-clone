import { AnyAction } from "redux";
import { SET_ACCESS_TOKEN, SET_AUTH_TOKEN, SET_REFRESH_TOKEN } from "../actions/actionTypes";

interface TokenState {
  authToken: string,
  accessToken: string,
  refreshToken: string
}

const initialState = {
  authToken: '',
  accessToken: '',
  refreshToken: ''
}

export const tokenReducer = (state: TokenState = initialState, action: AnyAction) => {
  switch(action.type) {
    case SET_AUTH_TOKEN:
      return {
        ...state,
        authToken: action.payload
      }

    case SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload
      }

    case SET_REFRESH_TOKEN:
      return {
        ...state,
        refreshToken: action.payload
      }

    default: return state;
  }
}