import React from 'react'

type Props = {
  album: Album
}

const AlbumTracks = (props: Props) => {

  const renderTracks = (): JSX.Element[] => {
    return props.album.tracks.items.map((el, idx) => {
      return (
        <li className='album-track'>
          <div className='number'>{idx+1}</div>
          <div className='details'>
            <div className='details__name'>{el.name}</div>
            <div className='details__artists'>{el.artists.map((item, index) => {
              return <span>{item.name}</span>
            })}</div>
          </div>
        </li>
      )
    })
  }

  return (
    <div className='album-tracks-container'>
      <ol>
        {renderTracks()}
      </ol>
    </div>
  )
}

export default AlbumTracks