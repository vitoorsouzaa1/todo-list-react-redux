import React from 'react'
import { useSelector } from 'react-redux'
import { AnimatePresence, motion } from 'framer-motion'

// Components
import { TodoItem } from '../todo-item/todo-item.component'

// Styles
import './content-component.scss'

const containerVariant = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const childVariant = {
  hidden: { y: 20, opactiy: 0 },
  visible: {
    y: 0,
    opactiy: 1,
  },
}

export const ContentComponent = () => {
  const todoList = useSelector((state) => state.todo.todoList)

  const filterStatus = useSelector((state) => state.todo.filterStatus)

  const sortedTodos = [...todoList]
  sortedTodos.sort((a, b) => new Date(b.time) - new Date(a.time))

  const filteredTodoList = sortedTodos.filter((item) => {
    if (filterStatus === 'all') {
      return true
    }

    return item.status === filterStatus
  })

  return (
    <motion.div
      className='content__wrapper'
      variants={containerVariant}
      initial='hidden'
      animate='visible'
    >
      <AnimatePresence>
        {filteredTodoList && filteredTodoList.length > 0 ? (
          filteredTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        ) : (
          <motion.p className='empty-text' variants={childVariant}>
            No Todo found
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
