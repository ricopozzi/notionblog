import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Image from "next/image";
import { NavBar } from "./NavBar";
import Fuse from "fuse.js";
import { fuseSearchContext } from "../lib/fusesearch";

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
      <NavBar avatarUrl={avatarUrl} />
      <div className='w-full md:max-w-[1180px] h-72 bg-gradient-to-r from-[#12c2e9] via-[#c471ed] to-[#f64f59] my-auto mx-auto md:rounded-3xl'>
        {bgImage ? (
          <Image
            src={`${bgImage}`}
            width={1480}
            height={288}
            layout='fixed'
            placeholder='blur'
            blurDataURL='iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOUqwcAAMEAnwarUJAAAAAASUVORK5CYII='
            className='object-center md:rounded-3xl'
          />
        ) : (
          <div></div>
        )}
      </div>
      <div className='w-36 h-36 bg-white rounded-full absolute  top-[17rem] flex justify-center items-center shadow-gray-500 shadow-2xl'>
        <Image src={`${avatarUrl}`} className='rounded-full' layout='fill' />
      </div>
    </section>
  );
}
