import "../styles/globals.css";
import type { AppProps } from "next/app";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "katex/dist/katex.min.css";
import { BgContext } from "../lib/bgimageurl";
import { FuseSearchContext } from "../lib/fusesearch";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    //@ts-ignore
    <FuseSearchContext>
      {/*@ts-ignore*/}
      <BgContext>
        <Component {...pageProps} />
      </BgContext>
    </FuseSearchContext>
  );
}

export default MyApp;
