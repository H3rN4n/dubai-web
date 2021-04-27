import Link from "next/link";
import { Layout } from "../components/layout";
import { Terminal } from "../components/terminal";

export default function Dashboard() {
  return (
    <div className="px-4">
      <Layout>
        <Terminal title="Noticias">
          <p className="text-2xl px-3 flex flex-wrap pt-4">
            ¿Quieres estar en la beta de Dubai Latam Discord Bot?
          </p>
          <p className="text-lg px-3 flex flex-wrap pt-4">
            Puedes postularte haciendo click{" "}
            <Link className="text-black-600" href="/bot-application">
              <span className="font-bold hover:text-green-500 text-green-400 pl-2 cursor-pointer underline">
                aquí
              </span>
            </Link>
            .
          </p>
        </Terminal>
      </Layout>
    </div>
  );
}
