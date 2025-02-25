import Link from "next/link";

const dashboard = () => {
  //fetch article
  return (
    <div className="w-screen h-screen bg-white flex flex-col justify-center items-center">
      <div className="w-full h-[10%] flex justify-center items-center">
        <p>List of all articles</p>
      </div>
      <div className="w-full h-[90%] flex justify-center items-center">
        <div className="w-[80%] h-[80%] grid grid-cols-4 bg-slate-200 gap-3">
          <Link
            href={"/articles/1"}
            className="w-full h-full bg-red-300 rounded-lg flex flex-col justify-start items-start"
          >
            <p>Article 1</p>
            <p>Title</p>
            <p>User name</p>
            <p>Details</p>
          </Link>
          <div className="w-full h-full bg-green-300 rounded-lg"></div>
          <div className="w-full h-full bg-blue-500 rounded-lg"></div>
          <div className="w-full h-full bg-green-500 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
