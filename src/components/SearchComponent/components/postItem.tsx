import { withCoalescedInvoke } from "next/dist/lib/coalesced-function";
import { useRouter } from "next/router";

interface PostItemProps {
  title: string;
  id: string;
  onClick: any;
}

export function PostItem({ id, title }: PostItemProps) {
  const router = useRouter();
  console.log(id);
  return (
    <div className='w-full h-8 border rounded-md flex justify-start  items-center px-2 cursor-pointer hover:bg-gray-200/80'>
      <p className='text-black text-sm flex justify-center item-center'>
        {title}
      </p>
    </div>
  );
}
