import Link from "next/link";
import { Button } from "../../components/button";
import { Layout } from "../../components/layout";
import { Terminal } from "../../components/terminal";

function Card() {
  return (
    <div className="relative bg-gray-600 py-6 px-6 border-2 border-white rounded-3xl w-64 my-4 shadow-xl">
      <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      </div>
      <div className="mt-8">
        <p className="text-xl font-semibold my-2 text-green-300">
          App Development
        </p>
        <div className="flex space-x-2 text-gray-100 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p>Marketing Team</p>
        </div>
        <div className="flex space-x-2 text-gray-100 text-sm my-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p>1 Weeks Left</p>
        </div>
        <div className="border-t-2"></div>

        <div className="flex justify-between">
          <div className="my-2">
            <p className="font-semibold text-base mb-2 text-green-300">
              Team Member
            </p>
            <div className="flex space-x-2">
              <img
                src="https://avatars.dicebear.com/api/male/erno.svg"
                className="w-6 h-6 rounded-full"
              />
            </div>
          </div>
          <div className="my-2">
            <p className="font-semibold text-base mb-2 text-gray-300">
              Progress
            </p>
            <div className="text-base text-gray-100 font-semibold">
              <p>34%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardApply() {
  return (
    <div className="relative bg-gray-600 py-6 px-6 border-2 border-white rounded-3xl w-64 my-4 shadow-xl">
    <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      </div>
      <div className="mt-8">
        <p className="text-xl font-semibold my-2 text-green-300">Nueva App</p>

        <div className="border-t-2"></div>

        <div className="flex justify-between">
          <div className="pt-4">
            <Link className="" href="/bot-application">
              <Button text="Bot +" className="text-white"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Apps() {
  return (
    <div className="px-4">
      <Layout>
        <div class="flex items-center justify-center px-4 py-8">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <CardApply></CardApply>
          </div>
        </div>

        {/* <Terminal title="Dubai Latam">
        <div class="flex items-center justify-center px-4 py-8">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>
        </Terminal> */}
      </Layout>
    </div>
  );
}
