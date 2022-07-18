import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCurrentPlaylistData } from '../../redux/actions/actionCreators'
import { RootState } from '../../redux/store'

type Props = {
  featuredList: FeaturedPlaylists
  accessToken: string
}

const FeaturedPlaylist = (props: Props) => {

  const dispatch = useDispatch()
  let navigate = useNavigate()

  const setCurrentPlaylist = (id: string) => {
    axios.get('/playlist', {
      params: {
        id: id,
        accessToken: props.accessToken
      }
    })
    .then((res: any) => {
      dispatch(setCurrentPlaylistData(res.data))
      return navigate('/playlist')
    })
  }

  const renderFeaturedPlaylist = (): JSX.Element[] => {
    return props.featuredList.playlists.items.slice(0,5).map((el, index) => {
      return (
        <div key={el.id} className="container__card" onClick={() => setCurrentPlaylist(el.id)}>
          <div className='container__card__wrapper'>
            <div className='container__card__wrapper--image'>
              <img src={el.images[0].url} alt="album art" width='100px' height='100px'/>
            </div>
            <div className='container__card--album-name'>{el.name}</div>
          </div>
        </div>
      )
    })
  }

  return (
    <div>
      <h2>Featured Playlist</h2>
      <div className='container'>
        {renderFeaturedPlaylist()}
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  featuredList: state.featuredPlaylist,
  accessToken: state.tokens.accessToken
})

export default connect(mapStateToProps)(FeaturedPlaylist)