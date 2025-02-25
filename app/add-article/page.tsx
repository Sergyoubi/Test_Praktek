import { AddArticleModal } from "@/components/global/AddArticleModal";

const AddArticle = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="w-full h-[10%] flex justify-between items-center">
        <div className="w-[10%] h-full flex justify-center items-center">
          <p className="text-slate-700 font-light text-lg">Blog Test</p>
        </div>
      </div>
      <div className="w-full h-[90%] flex justify-center items-center">
        <AddArticleModal />
      </div>
    </div>
  );
};

export default AddArticle;
