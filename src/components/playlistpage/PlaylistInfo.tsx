import React from 'react'

type Props = {
  playlist: Playlist
}

const PlaylistInfo = (props: Props) => {
  return (
    <div className='album-info-container'>
      <img src={props.playlist.images[0].url} alt="album art"/>
      <div className='album-info-container__info'>
        <h5>{props.playlist.type}</h5>
        <h1>{props.playlist.name}</h1>
        <div>
          <span>{props.playlist.owner.display_name}<span className='dot'></span></span>
          <span>{props.playlist.followers.total} followers<span className='dot'></span></span>
          <span>{props.playlist.tracks.items.length} tracks</span>
        </div>
      </div>
    </div>
  )
}

export default PlaylistInfo