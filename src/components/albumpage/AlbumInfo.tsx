import React from 'react'

type Props = {
  album: Album
}

const AlbumInfo = (props: Props) => {
  return (
    <div className='album-info-container'>
      <img src={props.album.images[0].url} alt="album art"/>
      <div className='album-info-container__info'>
        <h5>{props.album.album_type}</h5>
        <h1>{props.album.name}</h1>
        <div>
          <span>{props.album.artists[0].name}<span className='dot'></span></span>
          <span>{props.album.release_date.substring(0,4)}<span className='dot'></span></span>
          <span>{props.album.tracks.items.length} tracks</span>
        </div>
      </div>
    </div>
  )
}

export default AlbumInfo