import Hero from "@/components/Hero";
import { MemberList } from "@/components/MemberList";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="h-40"></div>
      <MemberList />
    </>
  );
}
