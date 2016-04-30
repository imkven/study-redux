const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    case 'FAKE_DATA_FETCHING':
      // Insert fake message
      return [
        ...state,
        todo(undefined, {
          type: 'ADD_TODO',
          id: state.length + 1,
          text: 'Fetching fake data'
        })
      ]
      case 'FAKE_DATA_SUCCESS':
        return [
          ...state,
          todo(undefined, {
            type: 'ADD_TODO',
            id: state.length + 1,
            text: 'Data success load: ' + action.data.length
          })
        ]
    default:
      return state
  }
}

export default todos
