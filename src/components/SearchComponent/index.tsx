import { useRouter } from "next/router";
import { useState, useContext } from "react";
import { CgSearch } from "react-icons/cg";
import { fuseSearchContext } from "../../lib/fusesearch";
import { PostItem } from "./components/postItem";

export function SearchComponent() {
  const [componentWidth, setComponentWidth] = useState("10rem");
  const [visible, setVisible] = useState(false);

  const { handleTextInput, titleList, searchList } =
    useContext(fuseSearchContext);

  const router = useRouter();

  return (
    <>
      <div
        style={{ width: componentWidth }}
        className='min-w-32 h-8 border border-gray-300 rounded-md flex items-center px-2 mr-10  gap-x-1 duration-200 transition-all focus:w-52'
      >
        <CgSearch size={16} color={"#aaa"} />
        <input
          type='text'
          className='w-full focus:outline-none focus:shadow-outline transition-width focus:w-52'
          onFocus={() => {
            setComponentWidth("15rem");
            return setVisible(true);
          }}
          onBlur={() => {
            setComponentWidth("10rem");
            return setVisible(false);
          }}
          onChange={(e) => handleTextInput(e.target.value)}
        />
        {visible && searchList ? (
          <div className='w-60 min-h-32 z-10 bg-white px-2 rounded-b-md items-center duration-200 transition-all absolute top-10 mr-10 flex flex-col py-1 overflow-auto gap-y-2 '>
            {searchList.map((item: any) => (
              <PostItem
                key={item.id}
                id={item.id}
                title={item.title}
                onClick={() => router.push(`/post/${item.id}`)}
              />
            ))}
          </div>
        ) : (
          <div className='absolute'></div>
        )}
      </div>
    </>
  );
}
