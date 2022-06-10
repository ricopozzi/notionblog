import { createContext, useState } from "react";
import Fuse from "fuse.js";

interface fuseSearchContextProps {
  input?: string;
  titleList?: any;
  handleTitleList?: any;
  handleTextInput?: any;
  searchList?: any;
}

const fuseOptions = {
  includeScore: true,
  keys: ["title", "id"],
};

export const fuseSearchContext = createContext<fuseSearchContextProps>({});

export const FuseSearchContext: React.FC = ({ children }: any) => {
  const [titleList, setTitleList] = useState<any>([]);
  const [searchList, setSearchList] = useState();
  const fuse = new Fuse(titleList, fuseOptions);

  const handleTitleList = (data: any) => {
    console.log(data);
    const titleArray = data.map(
      //@ts-ignore
      (item) => {
        return {
          title: item.properties.post.title[0].plain_text,
          id: item.id,
        };
      }
    );

    return setTitleList(titleArray);
  };

  const handleTextInput = (text: string) => {
    const result = fuse.search(text);
    //@ts-ignore
    return setSearchList(result.map((item) => item.item));
  };

  return (
    <fuseSearchContext.Provider
      value={{ titleList, handleTitleList, handleTextInput, searchList }}
    >
      {children}
    </fuseSearchContext.Provider>
  );
};
