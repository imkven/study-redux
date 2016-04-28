import React from 'react'
import { connect } from 'react-redux'
import { getFakeData } from '../actions'

let GetFakeData = ({ dispatch }) => {
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch(getFakeData())
      }}>
        <button type="submit">
          Get fake data
        </button>
      </form>
    </div>
  )
}
GetFakeData = connect()(GetFakeData)

export default GetFakeData
