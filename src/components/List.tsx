import React from 'react'
import useUsersData from '../data/useUsers'

const List: React.FC = () => {
  const { data, error } = useUsersData()
  if (error !== undefined) return <p>error</p>
  if (data === undefined) return <p>Loading</p>
  return (
    <ul>
      {data.map((user: { id: string, name: string }) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

export default List
