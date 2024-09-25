import MarkdownViewer from "@/componenets/MarkdownViewer";
import { getPostData } from "@/service/docs/cplusplus/posts";
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

                <h1 className="text-2xl font-bold my-8">
                    {post.title}
                </h1>
                <p className="text-xl font-bold my-3">{post.description}</p>
                <div className="flex items-center self-end gap-2 text-sm text-zinc-500">
                    <LuCalendarClock />
                    <p>{post.date.toString()}</p>
                </div>

                <div className="w-45 border-2 border-zinc-600 mt-4 mb-8"/>
                <MarkdownViewer content={post.content}  />
            </section>
        </article>
    )
}