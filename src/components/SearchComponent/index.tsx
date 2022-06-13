import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useContext } from "react";
import { CgSearch } from "react-icons/cg";
import { fuseSearchContext } from "../../lib/fusesearch";
import { PostItem } from "./components/postItem";

export function SearchComponent() {
  const [visible, setVisible] = useState(false);

  const { handleTextInput, searchList } = useContext(fuseSearchContext);

  const router = useRouter();

  return (
    <>
      <div className='w-68 h-8 border border-gray-300 rounded-md flex items-center px-2  gap-x-1  duration-500 transition-all'>
        <CgSearch size={16} color={"#aaa"} />
        <input
          type='text'
          className='w-full focus:outline-none focus:shadow-outline '
          onChange={(e) => handleTextInput(e.target.value)}
        />
        {searchList ? (
          <div className='w-52 min-h-32 z-10 bg-white px-2 rounded-b-md items-center absolute top-10 mr-10 flex flex-col py-1 overflow-auto gap-y-2 '>
            {searchList.map((item: any) => (
              <PostItem
                key={item.id}
                id={item.id}
                routerPush={() => {
                  setVisible(false);
                  router.push(`/post/${item.id}`);
                }}
                title={item.title}
                author={item.author}
              />
            ))}
          </div>
        ) : (
          <div className='absolute '></div>
        )}
      </div>
    </>
  );
}
