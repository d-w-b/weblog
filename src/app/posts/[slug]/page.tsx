import MarkdownViewer from "@/componenets/MarkdownViewer";

import { getPostData } from "@/service/posts";
import { LuCalendarClock } from "react-icons/lu";



type Props = {
    params : {
        slug : string;
    }
}

export default async function Page( {params} : Props)
{
    const slug = params.slug;
    const post = await getPostData(slug);
    return(
        <article className="">
            <section className="flex flex-col">
                <h1 className="text-4xl font-bold">
                    {post.title}
                </h1>
                <p className="text-xl font-bold my-3">{post.description}</p>
                <div className="flex items-center self-end gap-2 text-sm text-zinc-500">
                    <LuCalendarClock />
                    <p>{post.date.toString()}</p>
                </div>
                <div className="w-40 border-2 border-sky-600 mt-4 mb-8"/>
                <MarkdownViewer content={post.content}  />
            </section>
            
        </article>
    )
}