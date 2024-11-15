import { getAllPosts } from "@/service/posts";
import PostsGrid from "./PostsGrid";

export default async function FeaturedPost()
{
    const posts = await getAllPosts();

    return(
        <section>
            <h2>Featured Posts</h2>
            <PostsGrid posts={posts}/>
        </section>
    )
}