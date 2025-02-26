import { getAllArticles } from "@/actions/article";
import { onAuthenticateUser } from "@/actions/user";
import Article from "@/components/global/Article";
import Modal from "@/components/global/Modal";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Dashboard = async () => {
  await onAuthenticateUser();
  const { data } = await getAllArticles();

  return (
    <div className="w-screen h-screen bg-white flex flex-col justify-center items-center">
      <div className="w-full h-[20%] flex justify-center items-center">
        <p className="text-slate-800 text-3xl font-bold">
          List of all articles
        </p>
      </div>
      <div className="w-full h-[80%] flex flex-col justify-center items-center">
        <div className="w-[95%] h-[20%] flex justify-start items-center">
          <Modal
            title="New article"
            trigger={
              <Button>
                Create new article <Plus />
              </Button>
            }
          />
        </div>
        <div className="w-[95%] h-[80%] grid grid-cols-4 gap-3 overflow-y-scroll relative bottom-4">
          {data?.map((article) => (
            <Article key={article.id} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
