import { createSlice } from '@reduxjs/toolkit'

const getInitialTodo = () => {
  const localTodoList = window.localStorage.getItem('todoList')

  if (localTodoList) {
    return JSON.parse(localTodoList)
  }

  window.localStorage.setItem('todoList', JSON.stringify([]))
  return []
}

const initialState = {
  todoList: getInitialTodo(),
}

const TodoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload)
      const todoList = window.localStorage.getItem('todoList')

      if (todoList) {
        const todoListArr = JSON.parse(todoList)
        todoListArr.push({
          ...action.payload,
        })
        window.localStorage.getItem('todoList', JSON.stringify(todoListArr))
      } else {
        window.localStorage.setItem(
          'todoList',
          JSON.stringify([{ ...action.payload }])
        )
      }
    },
  },
})

export const { addTodo } = TodoSlice.actions
export default TodoSlice.reducer
