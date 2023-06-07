"use client"
import * as React from "react"
 
import { Select, SelectContent, SelectGroup,
  SelectItem, SelectLabel, SelectTrigger,  SelectValue,
} from "@/components/ui/select"
import useCustomRouter from "@/app/hooks/useCustomRouter"
 
export function Sort() {
  const { pushQuery, query } = useCustomRouter()
  return (
    <Select defaultValue={query.sort || ""} onValueChange={value => pushQuery({ sort: value })}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort Post" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="">Sort Posts</SelectItem>
          <SelectItem value="desc">Latest</SelectItem>
          <SelectItem value="asc">Oldest</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}