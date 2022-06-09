import type { NextPage } from "next";
import { PostCard } from "../components/PostCard";
import { databaseId, notion, notionX } from "../lib/notion";
import { NotionRenderer } from "react-notion-x";
import { Header } from "../components/Header";
import { AsideSocials } from "../components/AsideSocials";

interface PostProps {
  id: string;
  properties: any;
  author: any;
}

const Home: NextPage = ({ posts, descriptionPost }: any) => {
  return (
    <>
      <Header />
      <AsideSocials />
      <div className='mt-16'>
        <NotionRenderer recordMap={descriptionPost} />
      </div>
      <div className='pl-4 md:pl-0 max-w-[1000px] mx-auto h-10 border-b flex text-xl font-medium text-gray-700'>
        Blog Posts
      </div>

      <div className='max-w-[1000px] flex flex-col items-center md:justify-between mx-auto md:grid self-center md:grid-cols-2 gap-y-8 mt-6'>
        {posts.map((post: PostProps, index: number) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.properties.post.title[0].plain_text}
            // author={post.properties.author.multi_select[0]}
            author={posts[index].properties.author.multi_select}
            bgImage={post.properties.bgImage.files[0].file.url}
            description={post.properties.description.rich_text[0].plain_text}
          />
        ))}
      </div>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  //@ts-ignore
  const response = await notion.databases.query({ database_id: databaseId });

  const indexPageProps = await notionX.getPage(
    "fc9679ce8afe425483fa7dab1eeab633"
  );

  return {
    props: {
      posts: response.results,
      descriptionPost: indexPageProps,
    },
    revalidate: 10,
  };
}
