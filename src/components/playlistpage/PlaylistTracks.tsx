import React from 'react'
import { getDay, getMonth, getYear } from '../../helper/date'

type Props = {
  playlist: Playlist
}

const PlaylistTracks = (props: Props) => {

  const renderTracks = (): JSX.Element[] => {
    return props.playlist.tracks.items.map((el, idx) => {
      return (
        <li className='playlist-track'>
          <div className='number'>{idx+1}</div>
          <div className='track-data'>
            <img src={el.track.album.images[0].url} alt="album art"/>
            <div>
              <div className='track-data__name'>{el.track.name}</div>
              <div className='track-data__artists'>{el.track.artists.map((item, index) => {
                  return <span>{item.name}</span>
                })}
              </div>
            </div>
          </div>
          <div className='track-data__album'>{el.track.album.name}</div>
          <div className='track-data__date'>{getMonth(el.added_at)} {getDay(el.added_at)}, {getYear(el.added_at)}</div>
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

export default PlaylistTracks