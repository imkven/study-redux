import * as axios from 'axios'

let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

//http://www.mocky.io/v2/5721d28712000084053e7504

export const fakeData = (status, data = {}) => {
  let type = ''

  switch (status) {
    case 'received':
      type = 'FAKE_DATA_RECEIVED'
      break

    case 'success':
      type = 'FAKE_DATA_SUCCESS'
      break

    case 'error':
      type = 'FAKE_DATA_ERROR'
      break
    default:
      type = 'FAKE_DATA_FETCHING'
  }

  return {
    type: type,
    status: status,
    data: data
  }
}

// export const getFakeDataStart = () => {
//   return {
//     type: 'GET_FAKE_DATA'
//   }
// }
//
// export const getFakeDataSuccess = (data) => {
//   return {
//     type: 'GET_FAKE_DATA_SUCCESS',
//     data: data
//   }
// }
//
// export const getFakeDataError = () => {
//   return {
//     type: 'GET_FAKE_DATA_ERROR'
//   }
// }
//
// export const getFakeDataFinal = () => {
//   return {
//     type: 'GET_FAKE_DATA_FINAL'
//   }
// }

export const getFakeData = () => {
  return dispatch => {
    dispatch(fakeData('fetching'))
    return axios.get('http://jsonplaceholder.typicode.com/todos')
      .then(response => dispatch(fakeData('success', response.data)))
  }
}

export const fetchFakeData = () => {
  return (dispatch, getState) => {
    return dispatch(getFakeData())
  }
}
