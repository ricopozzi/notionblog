import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

interface HeaderProps {
  bgImage?: string;
}

export function Header({ bgImage }: HeaderProps) {
  const [avatarUrl, setAvatarUrl] = useState("/vercel.svg");

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://api.github.com/users/ricopozzi"
      );

      return setAvatarUrl(data.avatar_url);
    })();
  }, []);

  return (
    <section className='w-full h-96 flex flex-col justify-center items-center overflow-hidden'>
      <div className='w-full h-12 bg-white'></div>
      <div className='w-full md:max-w-[1480px] h-72 bg-gradient-to-r from-[#12c2e9] via-[#c471ed] to-[#f64f59] my-auto mx-auto md:rounded-3xl'>
        {bgImage ? (
          <Image
            src={`${bgImage}`}
            width={1480}
            height={288}
            layout='fixed'
            className='object-center md:rounded-3xl'
          />
        ) : (
          <div></div>
        )}
      </div>
      <div className='w-36 h-36 bg-white rounded-full absolute  top-[17rem] flex justify-center items-center shadow-gray-500 shadow-2xl'>
        <Image src='/avatar.jpg' className='rounded-full' layout='fill' />
      </div>
    </section>
  );
}
