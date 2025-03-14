import FormCard from "@/features/auth";
import { useUser } from "@/hooks/store/zustand";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Index = () => {
  const { user } = useUser();
  const Route = useRouter();
  useEffect(() => {
    if (user) {
      Route.push("/");
    }
  }, [user, Route]);

  return <FormCard />;
};

export default Index;
