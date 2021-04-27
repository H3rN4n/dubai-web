import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";

export function Layout({ children }) {
  return (
    <div className="min-h-full">
      {/* <Sidebar /> */}
      {/* <main className="py-4 pl-72 pr-4">{children}</main> */}
      <main className="py-4 px-4">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
