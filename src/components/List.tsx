import React from 'react'
import UsersData from '../data/useUsers'

const List: React.FC = () => {
  const { data, error } = UsersData()
  if (error !== undefined) console.log(error)
  if (data === undefined) return <h1>Loading</h1>
  return (
    <ul>
      {data.map((user: { id: string, name: string }) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

export default List
