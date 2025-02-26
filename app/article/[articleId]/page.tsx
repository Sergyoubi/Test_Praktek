import { getArticleDetail } from "@/actions/article";
import { onAuthenticateUser } from "@/actions/user";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  params: { articleId: string };
};

const ArticleDetails = async ({ params }: Props) => {
  // auth check
  await onAuthenticateUser();

  const { article } = await getArticleDetail(params.articleId);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="w-[60%] h-[20%] flex flex-col justify-center items-start">
        <Link href={"/dashboard"}>
          <Button>Back to all articles</Button>
        </Link>
      </div>
      <div className="w-[60%] h-[80%] flex flex-col justify-start items-start gap-4 overflow-y-scroll">
        <p className="text-slate-800 text-3xl font-bold">{article?.title}</p>
        <p className="text-slate-600 text-base font-normal">
          {article?.details}
        </p>
      </div>
    </div>
  );
};

export default ArticleDetails;
