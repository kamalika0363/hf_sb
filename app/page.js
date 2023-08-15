import Image from "next/image";
import Navbar from "@/components/Navbar";
import Box from "@/app/Box";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col items-center justify-between sm:p-8 p-2 m-2 ">
        <Box />
      </div>
      <Footer />
    </main>
  );
}