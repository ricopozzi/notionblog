import { DiGithubAlt } from "react-icons/di";
import { AiFillInstagram } from "react-icons/ai";
import { useRouter } from "next/router";
import { CgWebsite } from "react-icons/cg";

export function AsideSocials() {
  const router = useRouter();

  return (
    <div className='w-28 min-h-52 hidden md:fixed md:flex right-12 top-[47vh] flex-col gap-y-6'>
      <div className='w-16 h-16 border-2 rounded-full transition-all flex justify-center items-center'>
        <div
          onClick={() => router.push("https://github.com/ricopozzi")}
          className='w-20 h-20 scale-50 opacity-0 hover:opacity-100
        bg-orange-500/10 rounded-full absolute transition-transform duration-75 cursor-pointer hover:scale-100'
        ></div>
        <DiGithubAlt size={34} />
      </div>
      <div className='w-16 h-16 border-2 rounded-full transition-all flex justify-center items-center'>
        <div
          onClick={() => router.push("https://instagram.com/ricopozzi")}
          className='w-20 h-20 scale-50 opacity-0 hover:opacity-100
        bg-green-500/10 rounded-full absolute transition-transform duration-75 cursor-pointer hover:scale-100'
        ></div>
        <AiFillInstagram size={34} />
      </div>

      <div className='w-16 h-16 border-2 rounded-full transition-all flex justify-center items-center'>
        <div
          onClick={() => router.push("https://pozzi.dev")}
          className='w-20 h-20 scale-50 opacity-0 hover:opacity-100
        bg-blue-500/10 rounded-full absolute transition-transform duration-75 cursor-pointer hover:scale-100'
        ></div>
        <CgWebsite size={34} />
      </div>
    </div>
  );
}
