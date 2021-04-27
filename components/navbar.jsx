import Link from "next/link";

export function Navbar() {
  return (
    <div className="fixed z-50 w-full flex-1 flex flex-col">
      <nav className="px-4 flex justify-between bg-gray-300 h-16 border-b-2">
        <ul className="flex items-center">
          <li className="h-6 w-6">
            <Link className="cursor-pointer" href="/">
              <img
                className="cursor-pointer"
                src="/fav.png"
                alt="dubai latam"
              />
            </Link>
          </li>
        </ul>

        <ul className="flex items-center">
          <li>
            {/* <h1 className="pl-8 lg:pl-0 text-gray-700">Svelte</h1> */}
          </li>
        </ul>
      </nav>
    </div>
  );
}
