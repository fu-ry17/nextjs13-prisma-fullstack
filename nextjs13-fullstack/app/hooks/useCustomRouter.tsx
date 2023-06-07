import { useRouter, useSearchParams } from 'next/navigation'

const useCustomRouter = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const query: Record<string, any> = {}
  
  const search = searchParams.get('search') as string
  const sort = searchParams.get('sort') as string
  const page = searchParams.get('page') as string

  if(search) { query.search = search }
  if(sort) { query.sort = sort }
  if(page) { query.page = page }

  const pushQuery = ({ search, sort, page }: { search?: string, sort?: string, page?: number }) => {
    if(search !== undefined){
        search === '' ? delete query.search : query.search = search
    }

    if(sort !== undefined){
        sort === 'desc' ? delete query.sort : query.sort = sort
    }

    if(page !== undefined){
        page === 1 ? delete query.page : query.page = page
    }

    const newQuery = new URLSearchParams(query).toString()
    router.push(`?${newQuery}`)
  }
  
  return { query, pushQuery }
}

export default useCustomRouter