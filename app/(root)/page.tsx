import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-white flex flex-col justify-center items-center">
      <div className="w-full h-[10%] flex justify-between items-center">
        <div className="w-[10%] h-full flex justify-center items-center">
          <p className="text-slate-700 font-light text-lg">Blog Test</p>
        </div>
        <div className="w-[10%] h-full flex justify-center items-center">
          <Link
            href={"/articles"}
            className="text-slate-700 font-light text-lg"
          >
            Login
          </Link>
        </div>
      </div>
      <div className="w-full h-[90%] flex justify-center items-center">
        <p className="text-slate-800 font-bold text-3xl">
          Welcom to our Blog app
        </p>
      </div>
    </div>
  );
}
