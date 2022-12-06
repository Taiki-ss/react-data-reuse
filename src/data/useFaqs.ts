import useSWR, { SWRResponse } from 'swr'
import axios from 'axios'

const fetcher: (url: string) => Promise<any> = async (url: string) => await axios.get(url).then((res) => res.data)

const useUsersData: () => SWRResponse<any, Error> = () => {
  // return useSWR<User[], Error>('https://jsonplaceholder.typicode.com/users', fetcher)
  return useSWR<any, Error>('http://localhost:3000/api/data.json', fetcher)
}

export default useUsersData
