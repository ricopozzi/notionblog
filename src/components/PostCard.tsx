import { useRouter } from "next/router";
import Image from "next/image";
import { AuthorDectoration } from "./AuthorDecoration";
import { useContext } from "react";
import { bgContext } from "../lib/bgimageurl";
import { Blurhash } from "react-blurhash";

interface PostCardProps {
  title: string;
  author?: any;
  id: string;
  bgImage: string;
  description: string;
}

export function PostCard({
  title,
  author,
  id,
  bgImage,
  description,
}: PostCardProps) {
  const router = useRouter();

  const { handleBgChange } = useContext(bgContext);

  return (
    <>
      <div
        onClick={async () => {
          await handleBgChange(bgImage);
          router.push(`/post/${id}`);
        }}
        className='max-w-[340px] md:max-w-[400px] md:w-[30rem] min-h-[25rem] hover:bg-stone-200/70 hover:shadow-2xl shadow-stone-400
        hover:border delay-75 duration-150 ease-in-out
        flex flex-col rounded-2xl items-center py-4 cursor-pointer mx-auto'
      >
        <div className='relative w-[400px] h-[200px] flex justify-center'>
          {bgImage ? (
            <Image
              src={bgImage}
              width={340}
              height={200}
              objectFit='cover'
              className='rounded-2xl'
              quality={75}
              placeholder='blur'
              blurDataURL='iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOUqwcAAMEAnwarUJAAAAAASUVORK5CYII='
              priority
            />
          ) : (
            <Blurhash
              hash='LEHV6nWB2yk8pyo0adR*.7kCMdnj'
              width={400}
              height={300}
              resolutionX={32}
              resolutionY={32}
              punch={1}
            />
          )}
        </div>
        <div className='px-7 w-full'>
          <p className='text-3xl font-semibold text-gray-900 my-4 mr-auto'>
            {title}
          </p>
          <p className='my-2 text-sm mr-auto text-gray-600'>{description}</p>
          <div className='flex gap-x-2'>
            {author.map((auth: any, index: any) => (
              <AuthorDectoration
                key={index}
                authorName={auth.name}
                bgColor={auth.color}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
