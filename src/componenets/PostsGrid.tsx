import { Post } from '@/service/posts' ;
import Link  from 'next/link'

type Props = { posts : Post[] }

export default function PostsGrid({posts} : Props)
{
    return(
        <>
            <h2>Posts</h2>
            <ul>
                {
                    posts.map( post => { 
                        return(
                            <li key={post.title}><Link href={`/${post.path}`}>{post.title}</Link></li>
                        ) 
                    })
                }
            </ul>
        </>
    )
}