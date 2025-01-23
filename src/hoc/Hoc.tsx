import { useUser } from "@/hooks/store/useUser";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Hoc = (WrappedComponent: React.ComponentType) => {
  const HOCComponent = (props: any) => {
    const router = useRouter();
    const { user } = useUser();

    useEffect(() => {
      if (!user) {
        router.replace("/auth");
      }
    }, [user, router]);

    return <WrappedComponent {...props} />;
  };

  HOCComponent.displayName = `HOC(${getDisplayName(WrappedComponent)})`;

  return HOCComponent;
};

// Helper function to get display name
function getDisplayName(WrappedComponent: React.ComponentType) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default Hoc;
