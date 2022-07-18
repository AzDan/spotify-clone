import React from 'react'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCurrentAlbumData } from '../../redux/actions/actionCreators';
import { useNavigate } from 'react-router-dom';

type Props = {
  newReleases: NewWeekReleases
  accessToken: string
}

const NewReleases = (props: Props) => {

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const setCurrentAlbum = (id: string) => {
    axios.get('/album', {
      params: {
        id: id,
        accessToken: props.accessToken
      }
    })
    .then((res: any) => {
      console.log(res.data)
      dispatch(setCurrentAlbumData(res.data))
      return navigate('/album')
    })
  }

  const renderNewReleases = (): JSX.Element[] => {
    return props.newReleases.albums.items.slice(0,5).map((item, index) => {
      return (
        <div key={item.id} className='container__card' onClick={() => setCurrentAlbum(item.id)}>
          <div className='container__card__wrapper'>
            <div className='container__card__wrapper--image'>
              <img src={item.images[0].url} alt="album art" width='100px' height='100px'/>
            </div>
            <div className='container__card--album-name'>{item.name}</div>
            <div className='container__card--album-artist'>{item.artists.map((el, i) => {
              return (<span key={el.id}>{el.name}</span>)
            })}</div>
          </div>
        </div>
      )
    })
  }

  return (
    <div>
      <h2>New Releases</h2>
      <div className='container'>
        {renderNewReleases()}
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  newReleases: state.newReleases,
  accessToken: state.tokens.accessToken
})

export default connect(mapStateToProps)(NewReleases)