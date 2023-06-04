"use server"

import prisma from "@/prisma/client"
import { revalidatePath } from "next/cache"

interface Idata {
   title: string
   content: string
}

interface IUpdate extends Idata{
    id: string
}

export const createPost = async(data: Idata) => {
    const { title, content} = data
    try {
        if(!title || !content) return
        
        const post = await prisma.post.create({ data: data })
        revalidatePath("/")
        return post

    } catch (error) {
        if(error instanceof Error){
            throw new Error(error.message || "Failed to create a post")
        }
    }
}

export const updatePost = async(data: IUpdate) => {
    const { title, content, id } = data
    try {
        if(!title || !content) return
        
        const post = await prisma.post.update({ where: { id }, data: { title, content }})
        revalidatePath("/")
        return post

    } catch (error) {
        if(error instanceof Error){
            throw new Error(error.message || "Failed to create a post")
        }
    }
}

export const getPosts = async(searchParams: any) => {
    const search = searchParams.search || ''
    const sort = searchParams.sort || 'asc'

    //pagination
    const limit = searchParams.limit * 1 || 2
    const page = searchParams.page * 1 || 1
    const skip = searchParams.skip * 1 || limit * (page - 1)

    try {
        const posts = await prisma.post.findMany({
           where: { title: {  contains: search }  },
           orderBy: { createdAt: sort  },
           take: limit,
           skip: skip
        })

        const count = await prisma.post.count({
            where: { title: { contains: search }}
        })

        const newData = posts.map(p => ({
             ...p, id: p.id.toString()
        }))

        const totalPages = Math.ceil(count / limit)

        return { posts: newData, totalPages }
    } catch (error) {
        if(error instanceof Error){
            throw new Error(error.message)
        }
    }
}

export const getPost = async(id: string) => {
    if(!id) return
    try {
        const post = await prisma.post.findFirst({ where: { id }})
        if(!post){
            throw new Error("no post was found!")
        }

        return post
    } catch (error) {
        if(error instanceof Error){
            throw new Error(error.message || "Failed to find a post")
        }
    }
}

export const deletePost = async(id: string) => {
    try {
        if(!id) return
        const post = await prisma.post.delete({where: { id }})
        revalidatePath("/")
        revalidatePath(`/${id}`)
        return post

    } catch (error) {
        if(error instanceof Error){
            throw new Error(error.message || "Failed to create a post")
        }
    }
}