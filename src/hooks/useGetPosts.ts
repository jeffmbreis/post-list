'use client'

import { Posts } from "@/types/post"
import { useEffect, useState } from "react"

export const  useGetPosts = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [postsData, setPostsData] = useState<Posts | null>(null)

    const loadPosts = async () => {
        setIsLoading(true)
        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .finally(() => {
                setIsLoading(false)
            })

            console.log(data)

            setPostsData(data)
        } catch (e: unknown) {
            console.log(e)
        }
        
    }

    useEffect(() => {
        loadPosts()
    }, [])

    return {
        data: postsData,
        isLoading

    }
}