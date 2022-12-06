import React from 'react'
import useUsersData from '../data/useFaqs'

interface Props {
  keyword: string
}

const List: React.FC<Props> = (props) => {
  const { data, error } = useUsersData()
  console.log(props.keyword)
  console.log(data)
  if (error !== undefined) return <p>error</p>
  if (data === undefined) return <p>Loading</p>
  console.log(data)

  const hitPageIds = data.keywords.map((keyword:any) => {
    if(keyword.original === props.keyword){
      return keyword.pageIds;
    }
  })

  return (
    <ul>
      {/* {data.map((user: { id: string, name: string }) => (
        <li key={user.id}>{user.name}</li>
      ))} */}
      {data.faqs.map((faq: any) => (
        <li key={faq.pageId}>{faq.title}</li>
      ))}
      <p>{props.keyword}</p>
    </ul>
  )
}

export default List
