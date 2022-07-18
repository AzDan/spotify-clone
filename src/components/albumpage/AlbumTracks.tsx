import React from 'react'

type Props = {
  album: Album
}

const AlbumTracks = (props: Props) => {

  const renderTracks = (): JSX.Element[] => {
    return props.album.tracks.items.map((el, idx) => {
      return (<li className='track'>{el.name}</li>)
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