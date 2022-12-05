import useSWR, { SWRResponse } from 'swr'
import axios from 'axios'

interface User {
  id: string
  name: string
}

const fetcher: (url: string) => Promise<User[]> = async (url: string) => await axios.get(url).then((res) => res.data)

const UsersData: () => SWRResponse<User[], Error> = () => {
  return useSWR<User[], Error>('https://jsonplaceholder.typicode.com/users', fetcher)
}

export default UsersData
