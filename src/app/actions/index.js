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

export const getFakeData = () => {
  return {
    type: 'GET_FAKE_DATA'
  }
}

export const getFakeDataSuccess = () => {
  return {
    type: 'GET_FAKE_DATA_SUCCESS'
  }
}

export const getFakeDataError = () => {
  return {
    type: 'GET_FAKE_DATA_ERROR'
  }
}
