import FormCard from "@/features/auth";
import Navbar from "@/MYCOMPONENT/navbar/navbar";

const Index = () => {
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
