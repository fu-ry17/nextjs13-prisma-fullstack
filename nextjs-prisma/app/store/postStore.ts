import { Post } from "@prisma/client";
import { create } from "zustand";


type IPostState = {
    post: Post | null
    setPost: (data: Post | null) => void
}

export const postStore = create<IPostState>((set) => ({
    post: null,
    setPost: (t) => set((state) => ({ ...state, post: t })) 
}))