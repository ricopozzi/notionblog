import { NotionRenderer } from "react-notion-x";
import { databaseId, notion, notionX } from "../../lib/notion";
import { GetStaticPropsContext } from "next";
import { Header } from "../../components/Header";
import { useRouter } from "next/router";
import { useContext } from "react";
import { bgContext } from "../../lib/bgimageurl";
import { AsideSocials } from "../../components/AsideSocials";

export default function PostPage({ recordMap, post }: any) {
  const router = useRouter();
  const { bgUrl } = useContext(bgContext);

  return (
    <>
      <Header bgImage={bgUrl} />
      <AsideSocials />
      <div className='mt-16'>
        <h1 className='text-center my-16 text-3xl text-gray-900 font-semibold'>
          {post.properties.post.title[0].plain_text}
        </h1>
        <NotionRenderer recordMap={recordMap} />
      </div>
    </>
  );
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const { params } = ctx;
  console.log(params);

  //@ts-ignore
  const recordMap = await notionX.getPage(params.id);
  //@ts-ignore
  const response = await notion.pages.retrieve({ page_id: params.id });

  return {
    props: {
      recordMap,
      post: response,
    },
  };
}

export async function getStaticPaths() {
  //@ts-ignore
  const response = await notion.databases.query({ database_id: databaseId });
  const arrayOfIds = response.results.map((item) => item.id);

  return {
    paths: arrayOfIds.map((id) => {
      return {
        params: {
          id: id,
        },
      };
    }),
    fallback: "blocking",
  };
}
