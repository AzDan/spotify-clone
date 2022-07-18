import { AnyAction } from "redux";
import { SET_CURRENT_PLAYLIST } from "../actions/actionTypes";

const initialState = {
  
} as Playlist

export const cplaylistReducer = (state: Playlist = initialState, action: AnyAction) => {
  switch(action.type) {
    case SET_CURRENT_PLAYLIST:
      return action.payload

    default: return state;
  }
}