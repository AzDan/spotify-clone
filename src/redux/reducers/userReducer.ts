import { AnyAction } from "redux";
import { SET_CURRENT_USER } from "../actions/actionTypes";

const initialState = {
  
} as User

export const userReducer = (state: User = initialState, action: AnyAction) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      return action.payload

    default: return state;
  }
}