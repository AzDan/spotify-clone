import { AnyAction } from "redux";
import { SET_FEATURED_PLAYLIST } from "../actions/actionTypes";

const initialState = {
  
} as FeaturedPlaylists

export const playlistReducer = (state: FeaturedPlaylists = initialState, action: AnyAction) => {
  switch(action.type) {
    case SET_FEATURED_PLAYLIST:
      return action.payload

    default: return state;
  }
}