import { useUser, useUserCustom } from "@/hooks/store/useUser";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Hoc = (WrappedComponent: React.ComponentType) => {
  const HOCComponent = (props: any) => {
    const router = useRouter();
    const { user, setUser } = useUser();
    const { user: userCustom } = useUserCustom();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setLoading(false);
    }, [setUser]);

    useEffect(() => {
      if (!loading) {
        if (!user.email) {
          router.replace("/auth");
        }
      }
    }, [user, userCustom, loading, router]);

    if (loading) {
      return null;
    }

    if (user.email || userCustom) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };

  HOCComponent.displayName = `HOC(${getDisplayName(WrappedComponent)})`;

  return HOCComponent;
};

// Helper function to get display name
function getDisplayName(WrappedComponent: React.ComponentType) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default Hoc;
