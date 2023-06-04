'use client'
import React from 'react'
import SubmitButton from '../SubmitButton'
import useCustomRouter from '@/app/hooks/useCustomRouter'

const SearchForm = () => {
  const { query, pushQuery } = useCustomRouter()
  
  const handleSearch = (formData: FormData) => {
    const search = formData.get('search') as string
    pushQuery({ search, page: 1 })
  }

  return (
    <form action={handleSearch}>
       <input type="text" name='search' defaultValue={query.search ?? ''} placeholder='Search...' />
       <SubmitButton value='Search' />
    </form>
  )
}

export default SearchForm