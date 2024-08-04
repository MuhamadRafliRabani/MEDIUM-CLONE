import Image from "next/image";
import { Inter } from "next/font/google";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { BookmarkSimple } from "@phosphor-icons/react";
import { MinusCircle } from "lucide-react";
import MyCarousel from "@/MYCOMPONENT/Carousell";
import Card_profil from "@/MYCOMPONENT/card profil";
import StaffContainer from "@/MYCOMPONENT/sidemenu/Staff/StaffContainer";
import MyAvatar from "@/MYCOMPONENT/avatar/MyAvatar";
import MyToolTip from "@/MYCOMPONENT/MyToolTip/MyToolTip";
import MyDropDownMenu from "@/MYCOMPONENT/MyDropDownMenu/MyDropDownMenu";
import CardFeture from "@/MYCOMPONENT/CardFitur/CardFeture";
import Link from "next/link";
import { useGetArticle } from "@/hooks/article/useGetArticle";
import Navbar from "@/MYCOMPONENT/navbar/navbar";
import { usesetTopic, useUser } from "@/hooks/store/useUser";
import SkeletonCard from "@/MYCOMPONENT/article/cardSeleton";
import { Toaster } from "sonner";
import { useEffect } from "react";
import CardArticle from "@/MYCOMPONENT/article/article";
import Hoc from "@/hoc/Hoc";

const inter = Inter({ subsets: ["latin"] });

export type article = {
  id: number;
  title: string;
  article: string;
  description: string;
  author_name: string;
  img_user: string;
  likes: number;
  comments: string | null;
  date: string;
  img_content: string;
  type: string;
};

function Home() {
  const { topic } = usesetTopic();
  const { data: dataArticle, isLoading, isError } = useGetArticle(topic);

  if (isError) return <div>Error loading data</div>;
  const { user, setUser } = useUser();
  console.log(user);
  console.log(dataArticle);

  useEffect(() => {
    const storage = localStorage.getItem("user");
    if (!storage) return;
    setUser(JSON.parse(storage));
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main
        className={`flex w-svw flex-col items-center justify-between px-4 ${inter.className} main relative pt-4 md:container`}
      >
        <div className="md:nav mx-auto block w-full md:w-4/5">
          <MyCarousel />
        </div>

        <section className="content w-full space-y-4 border-e border-slate-100 pt-6 md:container">
          {!dataArticle ? (
            <SkeletonCard />
          ) : (
            <CardArticle dataArticle={dataArticle} />
          )}
        </section>

        <div className="md:sidebar relative h-full w-full pt-6 md:block md:ps-8">
          <StaffContainer />
        </div>
      </main>
    </>
  );
}

export default Home;
