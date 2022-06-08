import { createContext, useState } from "react";

interface bgContextProps {
  bgUrl: string;
  handleBgChange: any;
}

export const bgContext = createContext<bgContextProps>({
  bgUrl: "",
  handleBgChange: "",
});

export const BgContext: React.FC = ({ children }: any) => {
  const [bgUrl, setBgUrl] = useState("");

  const handleBgChange = async (data: string) => setBgUrl(data);

  return (
    <bgContext.Provider value={{ bgUrl, handleBgChange }}>
      {children}
    </bgContext.Provider>
  );
};
