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
};

function Home() {
  const { topic } = usesetTopic();
  const { data: articles, isLoading } = useHandleGet(
    `/articles/${topic}`,
    topic,
  );

  return (
    <>
      <div className="sohne flex h-full min-h-[87vh] flex-wrap md:flex-nowrap md:justify-center">
        {/* Main Content */}
        <main
          className={`flex w-full flex-col md:max-w-[52rem] md:ps-8 ${inter.className} relative border-slate-100 px-4 pt-4 md:border-e md:pt-8`}
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
        <div className="relative h-full min-h-screen w-auto max-w-[370px] ps-4 pt-5 md:ps-10 md:pt-10">
          <StaffContainer />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Hoc(Home);
