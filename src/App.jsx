import React from 'react'
import MarkList from './MarkList'
import AddMarks from './AddMarks'

export default function App() {
  return (
      <div className="app-container">
        <h1>Welcome to KL University Marks Portal</h1>
        <AddMarks />
        <MarkList />
      </div>
  )
}
