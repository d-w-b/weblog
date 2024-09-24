import { getAllPosts } from "@/service/docs/cplusplus/posts";
import { LuClock3 } from "react-icons/lu";
import Link from 'next/link'


export default async function Page() {
  const posts = await getAllPosts();
  return (
      <ul className="my-10 grow">
        { posts.map( (post, index) => (
          <li className='shadow-md w-1/4 h-1/4 flex flex-col' key={post.path}>
            <Link  className="w-full h-full flex py-7 flex-col items-center justify-center " href={`/docs/cplusplus/${post.path}`}>
              <div className="">
                {/*<span className="text-xs font-bold text-zinc-700">{index+1}</span> */}
                <h1 className="text-xl font-bold">{post.title}</h1>
                {/*<p className="text-zinc-700">{post.description}</p>*/}
              </div>
              {/* <p className="flex items-center gap-1 self-end text-xs font-medium text-zinc-400"><LuClock3 />{post.date.toString()}</p> */}
            </Link>
          </li>
        ))}
      </ul>
  )
}
