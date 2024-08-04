// import { useUser } from "@/hooks/store/useUser";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// const Hoc = (WrappedComponent: React.ComponentType) => {
//   return (props: any) => {
//     const router = useRouter();
//     const [user, setUser] = useState<string | null>(null);

//     useEffect(() => {
//       if (typeof window !== "undefined") {
//         const storedUser = localStorage.getItem("user");
//         if (storedUser) {
//           setUser(JSON.parse(storedUser));
//         }
//       }
//     }, []);

//     useEffect(() => {
//       if (!user) {
//         router.replace("/auth");
//       }
//     }, [user]);

//     if (user === null) {
//       return null;
//     }

//     return <WrappedComponent {...props} />;
//   };
// };

// export default Hoc;
