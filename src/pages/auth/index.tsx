import FormCard from "@/features/auth";
import { useUser } from "@/hooks/store/useUser";
import Navbar from "@/MYCOMPONENT/navbar/navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Index = () => {
  const { user } = useUser();
  const Route = useRouter();
  useEffect(() => {
    if (user.email) {
      Route.push("/");
    }
  }, [user]);
  return (
    <>
      <Navbar />
      <section className="container -mt-8 flex min-h-svh items-center justify-center">
        <FormCard />
      </section>
    </>
  );
};

export default Index;
