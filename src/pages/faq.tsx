import React, {useState} from 'react'
import Navi from '../components/Navi'
import List from '../components/List'

// type ListProps = React.ComponentProps<typeof List>;

const Faq: React.FC = () => {
  const [inputKeyword, setInputKeyword] = useState('') 

  const setKeyword = (e:any) => {
    setInputKeyword(e.target.value)
  }

  return (
    <div>
      <Navi />
      <h1>FAQ</h1>
      <div>
        <input type="text" onKeyDown={e=>setKeyword(e)} placeholder='キーワード検索' />
      </div>
      <List keyword={inputKeyword} />
    </div>
  )
}

export default Faq
