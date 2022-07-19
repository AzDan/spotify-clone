import React from 'react'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store'

type Props = {
  categories: BrowseCategories
}

const BrowseGenres = (props: Props) => {

  const getRandomColor = () => {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#"+randomColor;
  }

  const renderBrowseCategories = (): JSX.Element[] => {
    return props.categories.categories.items.map((el, index) => {
      return (
        <div key={el.id} className="container__browse-card" style={{backgroundColor: getRandomColor()}}>
          <img src={el.icons[0].url} alt='album art'/>
          <div className='container__browse-card--title'>{el.name}</div>
        </div>
      )
    })
  }

  return (
    <div>
      <h2>Browse</h2>
      {(Object.keys(props.categories).length>0) &&
        <div className='container'>
          {renderBrowseCategories()}
        </div>
      }
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  categories: state.categories
})

export default connect(mapStateToProps)(BrowseGenres)