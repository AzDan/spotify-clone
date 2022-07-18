import { configureStore } from '@reduxjs/toolkit'
import { tokenReducer } from './reducers/tokenReducer';
import thunk from 'redux-thunk'
import { playlistReducer } from './reducers/playlistReducer';
import { categoryReducer } from './reducers/categoryReducer';
import { newReleasesReducer } from './reducers/newReleasesReducer';
import { albumReducer } from './reducers/albumReducer';
import { cplaylistReducer } from './reducers/cplaylistReducer';
import { userReducer } from './reducers/userReducer';

const loadFromLocalStorage = () => {
  try {
    const persistantStoreData = localStorage.getItem("reduxState")
    if(persistantStoreData === null)
      return undefined;
    return JSON.parse(persistantStoreData)
  } catch (error) {
    console.log(error)
  }
}

export const store = configureStore({
  reducer: {
    tokens: tokenReducer,
    featuredPlaylist: playlistReducer,
    categories: categoryReducer,
    newReleases: newReleasesReducer,
    currentAlbum: albumReducer,
    currentPlaylist: cplaylistReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: loadFromLocalStorage()
})

const saveToLocalStorage = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState)
  } catch (error) {
    console.log(error)
  }
}

store.subscribe(() => {
  saveToLocalStorage(store.getState());
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch