import { AnyAction } from "redux";
import { SET_NEW_RELEASES } from "../actions/actionTypes";

const initialState = {
  
} as NewWeekReleases

export const newReleasesReducer = (state: NewWeekReleases = initialState, action: AnyAction) => {
  switch(action.type) {
    case SET_NEW_RELEASES:
      return action.payload

    default: return state;
  }
}