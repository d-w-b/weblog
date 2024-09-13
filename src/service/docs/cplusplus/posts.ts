import path from 'path';
import { promises } from 'fs';

export type Post = {
    title : string;
    description : string;
    date : Date;
    category : string;
    path: string;
    featured : boolean;
}

export type PostData = Post & {content : string};

export async function getAllPosts() : Promise<Post []>
{
    const filePath = path.join(process.cwd(), "data/docs/cplusplus", "posts.json");
    return promises.readFile(filePath, 'utf-8')
    .then<Post[]>(JSON.parse)
    .then<Post[]>((posts : Post[]) => posts.sort((a,b) => (a.date > b.date ? -1 : 1)))
}

export async function getPostData(fileName : string) : Promise<PostData>
{
    const filePath = path.join(process.cwd(), 'data/docs/cplusplus','posts', `${fileName}.md`)
    const metadata = await getAllPosts()
    .then(posts => posts.find(post => post.path === fileName))

    if(!metadata)
        throw new Error(`${fileName} 에 해당하는 파일을 찾을 수 없습니다.`)

    const content = await promises.readFile(filePath, 'utf-8');
    return {...metadata, content}
}