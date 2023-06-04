'use client'
import useCustomRouter from '@/app/hooks/useCustomRouter'
import React from 'react'

const Sort = () => {
  const { pushQuery, query } = useCustomRouter()

  return (
    <div>
        Sort: { `   `}
        <select value={query.sort || ''} onChange={e => pushQuery({ sort: e.target.value })}>
            <option value={'asc'}> A - Z </option>
            <option value={'desc'}> Z - A </option>
        </select>
    </div>
  )
}

export default Sort