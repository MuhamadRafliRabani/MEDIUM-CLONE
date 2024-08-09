import NewStory from "@/features/story";
import Hoc from "@/hoc/Hoc";

const MakeArticle = () => {
  return (
    <div className="md:container">
      <NewStory />
    </div>
  );
};

export default Hoc(MakeArticle);
