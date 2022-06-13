import { useRouter } from "next/router";
import { AuthorDectoration } from "../../AuthorDecoration";

interface PostItemProps {
  title: string;
  id: string;
  routerPush?: any;
  author: any;
}

export function PostItem({ id, title, routerPush, author }: PostItemProps) {
  const router = useRouter();

  return (
    <div
      onClick={routerPush}
      className='z-30 w-full min-h-8 border rounded-md flex flex-col items-start duration-200 transition-all p-2 cursor-pointer hover:bg-gray-200/80'
    >
      <p className='text-black text-sm flex justify-center item-center duration-200 delay-200 transition-all'>
        {title}
      </p>
      <div className='flex gap-x-2'>
        {author.map((item: { name: string }, index: number) => (
          <div
            key={index}
            className='text-[0.7rem] px-1 bg-gray-200/70 rounded-sm'
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
