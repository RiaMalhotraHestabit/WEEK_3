"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-6 flex flex-col justify-center items-center min-h-screen " >
      <h1 className="text-3xl font-bold ">Landing Page</h1>

      <div className="mt-4 space-x-4 flex justify-center gap-4">
        <Link href="/about">About</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </main>
  );
}
