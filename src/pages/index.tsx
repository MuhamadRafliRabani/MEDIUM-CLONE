import { Inter } from "next/font/google";
import { usesetTopic, useUser } from "@/hooks/store/zustand";
import Hoc from "@/hoc/Hoc";
import { useHandleGet } from "@/lib/useGet";
import MyCarousel from "@/components/carousell";
import SkeletonCard from "@/components/article/cardSeleton";
import CardArticle from "@/components/article/article";
import StaffContainer from "@/components/sidemenu/Staff/StaffContainer";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  const { topic } = usesetTopic();
  const { data: articles, isLoading } = useHandleGet({
    url: `/articles/${topic}`,
    key: topic,
  });
  console.log("🚀 ~ Home ~ articles:", articles);

  const { user } = useUser();

  if (!user) return null;

  return (
    <>
      <div className="sohne flex h-full min-h-[87vh] flex-wrap justify-center md:flex-nowrap md:pt-4">
        {/* Main Content */}
        <main
          className={`${inter.className} flex w-full flex-col border-slate-100 px-4 pt-4 sm:max-w-screen-sm md:max-w-[52rem] md:border-e md:ps-10`}
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
