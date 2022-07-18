import Sidebar from '../components/global/Sidebar'
import React from 'react'
import { connect } from 'react-redux'
import '../assets/styles/home.scss'
import '../assets/styles/albumpage.scss'
import { RootState } from '../redux/store'
import AlbumInfo from '../components/albumpage/AlbumInfo'
import AlbumTracks from '../components/albumpage/AlbumTracks'
import Topbar from '../components/global/Topbar'

type Props = {
  album_tracks: Album
}

const AlbumPage = (props: Props) => {
  return (
    <div className='wrapper'>
      <Sidebar />
      <div className='main-area-container'>
        <Topbar />
        <div className='main-area'>
          <AlbumInfo album={props.album_tracks} />
          <hr>
          </hr>
          <AlbumTracks album={props.album_tracks} />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  album_tracks: state.currentAlbum
})

export default connect(mapStateToProps)(AlbumPage)