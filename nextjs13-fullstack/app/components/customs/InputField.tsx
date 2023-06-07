import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

import React from 'react'


interface IProps{
    className?: string
    label?: string
    textarea?: boolean
    name: string,
    type?: string
    placeholder?: string
    defaultValue?: string
}

const InputField = ({ className, label, textarea, name, type, placeholder, defaultValue }: IProps) => {
  return (
    <div className={className}>
        { label ? <Label htmlFor={name} className='mb-2'>{label}</Label> : null }
        {
          textarea ? <Textarea name={name} placeholder={placeholder} className='mb-2' defaultValue={defaultValue ? defaultValue : ''} autoComplete='off' />
          : <Input type={type} name={name} placeholder={placeholder} className='mb-2' defaultValue={defaultValue ? defaultValue : ''} autoComplete='off' />
        }

    </div>
  )
}

export default InputField