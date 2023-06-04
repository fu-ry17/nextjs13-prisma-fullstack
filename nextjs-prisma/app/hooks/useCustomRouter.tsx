import { useRouter, useSearchParams } from 'next/navigation'

const useCustomRouter = () => {
 const router = useRouter()
 const searchParams = useSearchParams()
 const query: Record<string, any> = {}

 let search = searchParams.get('search')
 let sort = searchParams.get('sort')
 let page = searchParams.get('page')
 

 if(search){  query.search = search  }
 if(sort){  query.sort = sort  }
 if(page){  query.page = page  }

 const pushQuery = ({ search, sort, page }: { search?: string, sort?: string, page?: number }) => {
    if(search !== undefined){
      search === '' ? delete query.search : query.search = search
    }

    if(sort !== undefined){
      sort === 'ASC' ? delete query.sort : query.sort = sort
    }

    if(page !== undefined){
      page === 1 ? delete query.page : query.page = page
    }

    let newQuery = new URLSearchParams(query).toString()
    router.push(`?${newQuery}`)
  }

  return { pushQuery, query }
}

export default useCustomRouter