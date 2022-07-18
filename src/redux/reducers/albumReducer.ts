import { AnyAction } from "redux";
import { SET_CURRENT_ALBUM } from "../actions/actionTypes";

const initialState = {
  
} as Album

export const albumReducer = (state: Album = initialState, action: AnyAction) => {
  switch(action.type) {
    case SET_CURRENT_ALBUM:
      return action.payload

    default: return state;
  }
}