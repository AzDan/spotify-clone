import React from 'react'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store'

type Props = {
  user: User
}

const Topbar = (props: Props) => {
  return (
    <div className='topbar'>
      <span>{props.user.display_name}</span>
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  user: state.user
})

export default connect(mapStateToProps)(Topbar)