"use server"
import prisma from "@/prisma/client"
import { revalidatePath } from "next/cache"

interface Idata {
    title: string
    content: string
    userId: string
}

interface IUpdate extends Idata{
    id: string
}

export const createPost = async(data: Idata) => {
    const { title, content } = data

    try {
        if(!title || !content) return
        
        const post = await prisma.post.create({ data: { ...data, title: title.toLowerCase() }})
        revalidatePath("/")
        return post

    } catch (error) {
        if(error instanceof Error){
            throw new Error(error.message || "Failed to create a post")
        }
    }
}

export const updatePost = async(data: IUpdate) => {
    const { title, content } = data

    try {
        if(!title || !content) return
        
        const post = await prisma.post.update({ where: { id: data.id }, data: { title: title.toLowerCase(), content }})
        revalidatePath("/")
        return post

    } catch (error) {
        if(error instanceof Error){
            throw new Error(error.message || "Failed to update post")
        }
    }
}

export const getPosts = async(searchParams: any) => {
    const search = searchParams.search || ''
    const sort = searchParams.sort || 'desc'

    //pagination
    const limit = searchParams.limit * 1 || 3
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

        const totalPages = Math.ceil(count / limit)

        return { posts, totalPages }

    } catch (error) {
        if(error instanceof Error){
            throw new Error(error.message)
        }
    }
}

export const deletePost = async(id: string) => {
    try {
       const post = await prisma.post.delete({ where: { id} }) 
       revalidatePath("/")
       return post
    } catch (error) {
        if(error instanceof Error){
            throw new Error(error.message || "Failed to create a post")
        }   
    }
}

export const getPost = async(id: string) => {
    try {
       const post = await prisma.post.findFirst({ where: { id}, include: { 
          user: { select: { image: true, name: true, id: true }} } 
       }) 
       
       return post
    } catch (error) {
        if(error instanceof Error){
            throw new Error(error.message || "Failed to create a post")
        }   
    }
}