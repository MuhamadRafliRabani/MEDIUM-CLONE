import { useSetUser } from "@/features/auth/useSetUser";
import { useUser, useUserCustom } from "@/hooks/store/useUser";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Hoc = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const router = useRouter();
    const { user, setUser } = useUser();
    const { user: userCustom } = useUserCustom();

    useEffect(() => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }, []);

    useEffect(() => {
      if (!user.email) {
        router.replace("/auth");
      }
    }, [user]);

    if (user.email || userCustom) {
      return <WrappedComponent {...props} />;
    }
  };
};

export default Hoc;
