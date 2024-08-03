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
import SkeletonCard from "@/MYCOMPONENT/cardSeleton";
import { Toaster } from "sonner";
import { useEffect } from "react";

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

export default function Home() {
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
            dataArticle?.map((article: article, i: number) => (
              <>
                <div
                  key={i}
                  className="w-full space-y-4 border-b-[0.1px] border-slate-200 pb-4 md:pb-0"
                >
                  <div className="profil flex w-full items-center justify-start gap-3 text-sm">
                    <MyToolTip
                      Content={
                        <Card_profil
                          img={article.img_user}
                          author_name={article.author_name}
                        />
                      }
                      Trigger={
                        <MyAvatar size="size-6" img={article.img_user} />
                      }
                    />
                    <MyToolTip
                      Content={
                        <Card_profil
                          img={article.img_user}
                          author_name={article.author_name}
                        />
                      }
                      Trigger={
                        <p className="hover:underline">{article.author_name}</p>
                      }
                    />
                  </div>

                  <div className="grid grid-cols-[1fr_120px] grid-rows-[1fr] md:grid-cols-[1fr_250px]">
                    <div className="flex flex-col gap-2 pe-[0.7rem] md:pe-8">
                      <Link href={"/article/" + article.id}>
                        <h1 className="text-lg font-extrabold leading-6 md:text-pretty md:text-2xl md:font-extrabold md:leading-8">
                          {article.title}
                        </h1>
                      </Link>
                      <span className="text-base text-slate-500">
                        {article.description}
                      </span>
                      <div className="flex items-center justify-between md:py-4">
                        <CardFeture
                          id={article.id}
                          comments={article.comments}
                          date={article.date}
                          likes={article.likes}
                        />

                        <div className="hidden items-center justify-center gap-2 text-slate-500 md:flex">
                          <MyToolTip
                            Content={<p>Show less like this</p>}
                            Trigger={
                              <MinusCircle
                                size={16}
                                className="text-outLineIcon"
                              />
                            }
                            tag="p"
                          />
                          <MyToolTip
                            Content={<p>Save</p>}
                            Trigger={
                              <BookmarkSimple
                                size={16}
                                className="size-6 text-icon"
                                weight="thin"
                              />
                            }
                            tag="p"
                          />
                          <MyDropDownMenu />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between">
                      <AspectRatio ratio={16 / 9}>
                        <Image
                          src={article.img_content}
                          alt="Image"
                          width={180}
                          height={100}
                          className="mx-auto block h-[120px] rounded-md object-cover"
                        />
                      </AspectRatio>
                      <div className="-mb-[13px] flex w-full items-center justify-between md:-mb-[4.5px] md:hidden">
                        <div className="font-light text-slate-800">
                          <MyToolTip
                            Content={<p>Show less like this</p>}
                            Trigger={
                              <MinusCircle size={16} className="text-icon" />
                            }
                          />
                        </div>
                        <div>
                          <MyDropDownMenu />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))
          )}
        </section>

        <div className="md:sidebar relative h-full w-full pt-6 md:block md:ps-8">
          <StaffContainer />
        </div>
      </main>
    </>
  );
}
