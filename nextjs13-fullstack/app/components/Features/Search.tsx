'use client'
import React from 'react'
import InputField from '../customs/InputField'
import SubmitButton from '../customs/SubmitButton'
import useCustomRouter from '@/app/hooks/useCustomRouter'

const Search = () => {
  const { pushQuery, query } = useCustomRouter()

  const handleSearch = (formData: FormData) => {
      const search = formData.get('search') as string
      pushQuery({ search: search.toLowerCase(), page: 1 })
  }

  return (
    <form action={handleSearch}
    className='flex w-full gap-x-2'>
        <InputField name='search' placeholder='Search Post...' defaultValue={query.search || ''} className='w-full'/>
        <SubmitButton value='Search' />
    </form>
  )
}

export default Search