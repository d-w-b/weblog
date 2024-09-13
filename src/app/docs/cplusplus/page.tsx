import { getAllPosts } from "@/service/docs/cplusplus/posts";
import { LuClock3 } from "react-icons/lu";
import Link from 'next/link'


export default async function Page() {
  const posts = await getAllPosts();
  return (
    <div className="my-4">
      <ul className="flex flex-col gap-2">
        { posts.map( (post, index) => (
          <li className='shadow-md' key={post.path}>
            <Link  className="flex justify-between px-8 py-2" href={`/docs/cplusplus/${post.path}`}>
              <div className="grow flex items-center gap-4">
                {/* <span className="text-xs font-bold text-zinc-700">{index+1}</span> */}
                <h1 className="text-xl font-bold">{post.title}</h1>
                {/* <p className="text-zinc-700">{post.description}</p> */}
              </div>
              <p className="flex items-center gap-1 self-end text-xs font-medium text-zinc-400"><LuClock3 />{post.date.toString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
