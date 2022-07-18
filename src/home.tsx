import React, { useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { RootState } from './redux/store'
import { useDispatch } from 'react-redux'
import { setBrowseCategories, setFeaturedPlaylist, setNewReleases } from './redux/actions/actionCreators'
import NewReleases from './components/homepage/NewReleases'
import FeaturedPlaylist from './components/homepage/FeaturedPlaylist'
import BrowseGenres from './components/homepage/BrowseGenres'
import './assets/styles/home.scss'
import Sidebar from './components/global/Sidebar'

type Props = {
  access_token: string
}

const Home = (props: Props) => {

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("/new-releases", {
      params: {
        accessToken: props.access_token
      }
    })
    .then((res: any) => {
      console.log(res.data)
      dispatch(setNewReleases(res.data))
    })

    axios.get('/categories', {
      params: {
        accessToken: props.access_token
      }
    })
    .then((res: any) => {
      console.log(res.data)
      dispatch(setBrowseCategories(res.data))
    })

    axios.get("/featured-playlist", {
      params: {
        accessToken: props.access_token
      }
    })
    .then((res: any) => {
      console.log(res.data)
      dispatch(setFeaturedPlaylist(res.data))
    })
  })

  return (
    <div className='wrapper'>
      <Sidebar/>
      <div className='main-area'>
        <NewReleases/>
        <FeaturedPlaylist/>
        <BrowseGenres/>
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  access_token: state.tokens.accessToken
})

export default connect(mapStateToProps)(Home)