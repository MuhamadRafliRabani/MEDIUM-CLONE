import { Inter } from "next/font/google";
import MyCarousel from "@/MYCOMPONENT/Carousell";
import StaffContainer from "@/MYCOMPONENT/sidemenu/Staff/StaffContainer";
import { useGetArticle } from "@/hooks/article/useGetArticle";
import Navbar from "@/MYCOMPONENT/navbar/navbar";
import { usesetTopic, useUser, useUserCustom } from "@/hooks/store/useUser";
import SkeletonCard from "@/MYCOMPONENT/article/cardSeleton";
import { useEffect } from "react";
import CardArticle from "@/MYCOMPONENT/article/article";
import Hoc from "@/hoc/Hoc";
import Footer from "@/MYCOMPONENT/MyFooter";
import { useGetUser } from "@/hooks/article/useGetUser";
import { useSetUser } from "@/features/auth/useSetUser";
import { toast } from "sonner";

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
  const { user } = useUser();
  const { user: usercustom } = useUserCustom();
  const { data: dataArticle, isLoading, isError } = useGetArticle(topic);
  const { setUserCustom } = useUserCustom();
  const { mutate, data: resposneUser } = useSetUser();
  const { data } = useGetUser(user.email, resposneUser);

  useEffect(() => {
    if (data) {
      setUserCustom(data.user);
    }
  }, []);

  useEffect(() => {
    if (user.email) {
      const value = {
        name: user?.displayName || "",
        pronouns: "writer",
        short_bio: "",
        email: user?.email,
        profil_img: user?.photoURL,
      };
      console.log(value);

      mutate(value, {
        onSuccess: () => {
          toast.success("your are login");
        },
        onError: () => {
          toast.error("your are not login");
        },
      });
    }
  }, [user]);

  if (isError) return <div>Error loading data</div>;

  console.log(resposneUser);
  console.log(data);
  console.log(usercustom);

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

        <section className="content w-full space-y-4 border-slate-100 pt-6 md:container md:border-e">
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
      <Footer />
    </>
  );
}

export default Hoc(Home);
