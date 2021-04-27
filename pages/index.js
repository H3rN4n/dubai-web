import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useEffect, useState } from "react";
import { Terminal } from "../components/terminal";
import Link from "next/link";
import { useSpring, animated } from "react-spring";
import { Button } from "../components/button";
import { signIn, signOut, useSession } from "next-auth/client";
export default function Home() {
  const [session, loading] = useSession();
  const animationProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
  });
  const [date, setDate] = useState(Date());
  useEffect(() => {
    setTimeout(() => {
      setDate(Date());
    }, 1000);
  });

  return (
    <animated.div style={animationProps}>
      <div className="px-4 text-center">
        <Terminal title="Dubai Latam">
          <div className="px-4 pt-4">
            <p className="pb-1">Fecha: {date}</p>
            {/* <div
              className="pb-1 hidden lg:block"
              style={{ fontFamily: "monospace", whiteSpace: "pre" }}
            >
              <pre>
                <code>{`  
██████╗ ██╗   ██╗██████╗  █████╗ ██╗    ██╗      █████╗ ████████╗ █████╗ ███╗   ███╗
██╔══██╗██║   ██║██╔══██╗██╔══██╗██║    ██║     ██╔══██╗╚══██╔══╝██╔══██╗████╗ ████║
██║  ██║██║   ██║██████╔╝███████║██║    ██║     ███████║   ██║   ███████║██╔████╔██║
██║  ██║██║   ██║██╔══██╗██╔══██║██║    ██║     ██╔══██║   ██║   ██╔══██║██║╚██╔╝██║
██████╔╝╚██████╔╝██████╔╝██║  ██║██║    ███████╗██║  ██║   ██║   ██║  ██║██║ ╚═╝ ██║
╚═════╝  ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝    ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝
            `}</code>
              </pre>
            </div> */}
            <div style={{ fontFamily: "monospace", whiteSpace: "pre" }}>
              <pre>
                <code>{`  
██████╗ ██╗   ██╗██████╗  █████╗ ██╗
██╔══██╗██║   ██║██╔══██╗██╔══██╗██║
██║  ██║██║   ██║██████╔╝███████║██║
██║  ██║██║   ██║██╔══██╗██╔══██║██║
██████╔╝╚██████╔╝██████╔╝██║  ██║██║
╚═════╝  ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝
            `}</code>
              </pre>
            </div>
            <div
              className=""
              style={{ fontFamily: "monospace", whiteSpace: "pre" }}
            >
              <pre>
                <code>{`  
██╗      █████╗ ████████╗ █████╗ ███╗   ███╗
██║     ██╔══██╗╚══██╔══╝██╔══██╗████╗ ████║
██║     ███████║   ██║   ███████║██╔████╔██║
██║     ██╔══██║   ██║   ██╔══██║██║╚██╔╝██║
███████╗██║  ██║   ██║   ██║  ██║██║ ╚═╝ ██║
╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝
            `}</code>
              </pre>
            </div>
            <p className="pb-1 mb-2"></p>
            <div className="pb-1 mt-4 pb-8">
              <div className="inline">
                {/* <Button text="Ingresar" onClick={() => signIn()} /> */}
                <Link className="cursor-pointer" href="/bot-application">
                  <Button text=":Beta testing bot Dubai Latam:" />
                </Link>
              </div>
            </div>
          </div>
        </Terminal>
      </div>
    </animated.div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
});
