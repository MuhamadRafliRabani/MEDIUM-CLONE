import { Inter } from "next/font/google";
import MyCarousel from "@/MYCOMPONENT/Carousell";
import StaffContainer from "@/MYCOMPONENT/sidemenu/Staff/StaffContainer";
import { usesetTopic } from "@/hooks/store/useUser";
import SkeletonCard from "@/MYCOMPONENT/article/cardSeleton";
import CardArticle from "@/MYCOMPONENT/article/article";
import Hoc from "@/hoc/Hoc";
import Footer from "@/MYCOMPONENT/MyFooter";
import { useHandleGet } from "@/lib/useGet";

const inter = Inter({ subsets: ["latin"] });

export type Article = {
  article_id: number;
  title: string;
  article: string;
  description: string;
  user_name: string;
  user_image: string;
  comments: string | null;
  date: string;
  content_image: string;
  category: string;
  member_only: boolean;
};

function Home() {
  const { topic } = usesetTopic();
  const { data: articles, isLoading } = useHandleGet(
    `/articles/${topic}`,
    topic,
  );

  return (
    <>
      <div className="sohne flex h-full min-h-[87vh] flex-wrap justify-center md:flex-nowrap md:pt-4">
        {/* Main Content */}
        <main
          className={`${inter.className} relative flex w-full flex-col border-slate-100 px-4 pt-4 sm:max-w-screen-sm md:max-w-[52rem] md:border-e md:ps-10`}
        >
          <MyCarousel />

          {/* Article Section */}
          <section className="mt-10 space-y-4 md:w-article">
            {isLoading ? (
              <SkeletonCard />
            ) : (
              <CardArticle articles={articles?.data} />
            )}
          </section>
        </main>

        {/* Sidebar */}
        <div className="relative h-full min-h-screen w-full ps-4 pt-5 sm:max-w-screen-sm md:max-w-[370px] md:ps-8 md:pt-8">
          <StaffContainer />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Hoc(Home);
