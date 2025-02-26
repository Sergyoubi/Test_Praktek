import { ArrowUpRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
  id: string;
  createdAt?: Date;
  title?: string | null;
  details?: string | null;
  userId: string;
};
const Article = ({ title, id }: Props) => {
  return (
    <Link
      href={`/article/${id}`}
      className="w-full h-[300px] flex flex-col justify-around items-center border border-slate-700 hover:border-slate-500 rounded-2xl cursor-pointer"
    >
      <div className="w-full h-[70%] flex justify-center items-center">
        <p className="w-[80%] text-3xl font-medium text-slate-800 text-center">
          {title}
        </p>
      </div>
      <Button className="text-sm font-light flex justify-center items-center gap-2">
        Details <ArrowUpRight />
      </Button>
    </Link>
  );
};

export default Article;
