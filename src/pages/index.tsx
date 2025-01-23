import { Inter } from "next/font/google";
import MyCarousel from "@/MYCOMPONENT/Carousell";
import StaffContainer from "@/MYCOMPONENT/sidemenu/Staff/StaffContainer";
import { usesetTopic, useUser } from "@/hooks/store/useUser";
import SkeletonCard from "@/MYCOMPONENT/article/cardSeleton";
import CardArticle from "@/MYCOMPONENT/article/article";
import Hoc from "@/hoc/Hoc";
import Footer from "@/MYCOMPONENT/MyFooter";
import { useHandleGet } from "@/lib/useGet";

const inter = Inter({ subsets: ["latin"] });

export type article = {
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
  const { user, setUser } = useUser();
  const {
    data: articles,
    isLoading,
    isError,
  } = useHandleGet(`/articles/${topic}`);

  return (
    <>
      <div className="relative mt-11 flex h-full min-h-[87vh] items-center justify-center">
        <main
          className={`flex w-full max-w-[900px] flex-col items-center px-4 ${inter.className} border-slate-100 pt-4 md:border-e`}
        >
          <MyCarousel />

          <section className="w-full max-w-screen-md space-y-4 pt-6">
            {!articles && isLoading ? (
              <SkeletonCard />
            ) : (
              <CardArticle articles={articles?.data} />
            )}
          </section>
        </main>
        <div className="relative h-full min-h-screen w-auto max-w-[250px] ps-4 pt-6">
          <StaffContainer />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Hoc(Home);
