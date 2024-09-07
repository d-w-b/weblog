type Props = {
  params : {
    slug : string;
  };
}

export default function Page( { params } : Props) {
  return (
    <div>{params.slug}</div>
  )
}

export function generateStaticParams() {
  let posts = ['test1', 'test2']
 
  return posts.map((post) => ({
    slug : post,
  }))
}
 