
import { Post } from "@/types/post"

type ListItemProps = {
    post: Post
}

export const ListItem = ({ post }: ListItemProps) => {
    return <div className="flex flex-col">
        <h4 className="font-bold text-lg">{post.title}</h4>
        <p className="overflow-hidden text-ellipsis line-clamp-2">{post.body}</p>
    </div>
}