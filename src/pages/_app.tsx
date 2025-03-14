import Navbar from "@/components/navbar/navbar";
import "@/styles/globals.css";
import { Check, Info } from "@phosphor-icons/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster
        icons={{ info: <Info size={20} />, success: <Check size={20} /> }}
        position="top-right"
        toastOptions={{
          classNames: {
            error: "bg-red-400",
            success: "text-green-400",
            warning: "text-yellow-400",
            info: "text-green-400",
          },
        }}
      />
    </QueryClientProvider>
  );
}
