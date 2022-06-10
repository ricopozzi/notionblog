import Image from "next/image";
import { useRouter } from "next/router";
import { SearchComponent } from "./SearchComponent/index";

interface NavbarProps {
  avatarUrl: string;
}

export function NavBar({ avatarUrl }: NavbarProps) {
  const router = useRouter();
  const { pathname } = router;

  const pushToHomePage = () => {
    if (pathname === "/") {
      return;
    } else {
      return router.push("/");
    }
  };

  return (
    <nav className='w-full max-w-[1480px] h-14 pt-2 flex justify-between'>
      <div
        onClick={pushToHomePage}
        className='md:w-36 h-8 rounded-md hover:bg-gray-300/50 flex items-center px-2 gap-x-4 cursor-pointer'
      >
        <Image
          src={`${avatarUrl}`}
          width={22}
          height={22}
          className='rounded-full '
        />
        <p className='font-medium text-gray-500'>Enrico Pozzi</p>
      </div>
      <SearchComponent />
    </nav>
  );
}
