"client server"
import Image from "next/image";
import cmsdata from "../../lib/datocms";
import { PAGE_CONTENT_QUERY } from "../../query/homeQuery";
import { draftMode } from 'next/headers';

export const revalidate = 10

export default async function Home() {
  const { isEnabled } = draftMode();
  const {allArticles}: HomeQuery= await cmsdata({query: PAGE_CONTENT_QUERY, includeDrafts:isEnabled});
  // console.log(data)
  if (!allArticles.length) return <h1>Not found</h1>;

  return (
    <div>
     {allArticles?.map((article)=>{
      return(
        <div key={article.id}>
           <h1>{article.title}</h1>
          <Image src={article.coverImage.url} width={300} height={300} alt={article.excerpt}/>
          <h4>{article.excerpt}</h4>
          {/* <p>{JSON.stringify(article.content.children)}</p> */}
        </div>
      )
     })}
    </div>
  );
}
