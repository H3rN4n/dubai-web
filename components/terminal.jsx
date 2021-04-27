export function Terminal({ title, children }) {
  return (
    <div className="w-full mx-auto mt-4 max-w-7xl">
      <div className="w-full shadow-2xl subpixel-antialiased rounded h-64 bg-gray-800 border-black mx-auto">
        <div
          className="flex items-center h-10 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black"
          id="headerTerminal"
        >
          <div
            className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"
            id="closebtn"
          ></div>
          <div
            className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"
            id="minbtn"
          ></div>
          <div
            className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"
            id="maxbtn"
          ></div>
          <div className="mx-auto pr-16" id="terminaltitle">
            <p className="text-center text-md">{title}</p>
          </div>
        </div>
        <div
          className="pl-1 pt-2 h-auto  text-green-200 font-mono text-lg bg-gray-800"
          id="console"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
