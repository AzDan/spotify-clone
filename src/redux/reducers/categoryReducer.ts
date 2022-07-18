import { AnyAction } from "redux";
import { SET_BROWSE_CATEGORIES } from "../actions/actionTypes";

const initialState = {
  
} as BrowseCategories

export const categoryReducer = (state: BrowseCategories = initialState, action: AnyAction) => {
  switch(action.type) {
    case SET_BROWSE_CATEGORIES:
      return action.payload

    default: return state;
  }
}