import * as actionTypes from './actionTypes'

export const setAuthToken = (data: string) => {
  return {
    type: actionTypes.SET_AUTH_TOKEN,
    payload: data
  }
}

export const setAccessToken = (data: string) => {
  return {
    type: actionTypes.SET_ACCESS_TOKEN,
    payload: data
  }
}

export const setRefreshToken = (data: string) => {
  return {
    type: actionTypes.SET_REFRESH_TOKEN,
    payload: data
  }
}

export const setFeaturedPlaylist = (data: FeaturedPlaylists) => {
  return {
    type: actionTypes.SET_FEATURED_PLAYLIST,
    payload: data
  }
}

export const setBrowseCategories = (data: BrowseCategories) => {
  return {
    type: actionTypes.SET_BROWSE_CATEGORIES,
    payload: data
  }
}

export const setNewReleases = (data: NewWeekReleases) => {
  return {
    type: actionTypes.SET_NEW_RELEASES,
    payload: data
  }
}

export const setCurrentAlbumData = (data: Album) => {
  return {
    type: actionTypes.SET_CURRENT_ALBUM,
    payload: data
  }
}

export const setCurrentPlaylistData = (data: Playlist) => {
  return {
    type: actionTypes.SET_CURRENT_PLAYLIST,
    payload: data
  }
}