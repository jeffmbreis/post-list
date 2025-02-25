import { Posts } from "@/types/post"
import { ListItem } from "./ListItem"

type ListProps = {
    posts: Posts
}

export const List = ({posts}: ListProps) => {
    return <div className="flex flex-col gap-6">
        {posts.map(post => {
            return <ListItem key={post.id} post={post} />
        })}
    </div>
}