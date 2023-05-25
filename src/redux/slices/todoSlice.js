import { createSlice } from '@reduxjs/toolkit'

const getInitialTodo = () => {
  const localTodoList = window.localStorage.getItem('todoList')

  if (localTodoList) {
    return JSON.parse(localTodoList)
  }

  window.localStorage.setItem('todoList', JSON.stringify([]))
  return []
}

const initialValue = {
  todoList: getInitialTodo(),
}

export const TodoSlice = createSlice({
  name: 'todo',
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload)
      const todoList = window.localStorage.getItem('todoList')

      if (todoList) {
        const todoListArr = JSON.parse(todoList)
        todoListArr.push({
          ...action.payload,
        })
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr))
      } else {
        window.localStorage.setItem(
          'todoList',
          JSON.stringify([{ ...action.payload }])
        )
      }
    },
    deleteTodo: (state, action) => {
      const todoList = window.localStorage.getItem('todoList')
      if (todoList) {
        const todoListArr = JSON.parse(todoList)
        todoListArr.forEach((item, index) => {
          if (item.id === action.payload) {
            todoListArr.splice(index, 1)
          }
        })
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr))
        state.todoList = todoListArr
      }
    },
    updateTodo: (state, action) => {
      const todoList = window.localStorage.getItem('todoList')

      if (todoList) {
        const todoListArr = JSON.parse(todoList)
        todoListArr.forEach((item, index) => {
          if (item.id === action.payload.id) {
            item.status = action.payload.status
            item.title = action.payload.title
          }
        })
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr))
        state.todoList = todoListArr
      }
    },
  },
})

export const { addTodo, deleteTodo, updateTodo } = TodoSlice.actions
export default TodoSlice.reducer
