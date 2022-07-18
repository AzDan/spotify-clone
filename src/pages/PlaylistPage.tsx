import Sidebar from '../components/global/Sidebar'
import React from 'react'
import { connect } from 'react-redux'
import '../assets/styles/home.scss'
import '../assets/styles/albumpage.scss'
import { RootState } from '../redux/store'
import PlaylistInfo from '../components/playlistpage/PlaylistInfo'
import PlaylistTracks from '../components/playlistpage/PlaylistTracks'
import Topbar from '../components/global/Topbar'

type Props = {
  playlist: Playlist
}

const PlaylistPage = (props: Props) => {
  return (
    <div className='wrapper'>
      <Sidebar/>
      <div className='main-area-container'>
        <Topbar />
        <div className='main-area'>
          <PlaylistInfo playlist={props.playlist}/>
          <hr></hr>
          <PlaylistTracks playlist={props.playlist}/>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  playlist: state.currentPlaylist
})

export default connect(mapStateToProps)(PlaylistPage)