'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter(); //make it to client router

  function handleRoute(){
    router.push('products')
  }
  return (
    <div className="flex min-h-screen flex-col items-center  ">
   <h1 className="font-size-lg">Welcome to next js </h1>
    <h2 >Learning 2025</h2>
    <Link href={'products'}>Navigate to produts page</Link>
    <Link href={'/accounts/details/'}>navigate to accout page</Link>
    <h2 className="font-bold mt-3 text-lg">Another way of going to navtion </h2>
    <button onClick={handleRoute}> Navigate to products page</button>
    </div>
  );
}
