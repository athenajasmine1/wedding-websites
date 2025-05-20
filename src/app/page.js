import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <header className="relative flex items-center justify-center px-6 py-6 shadow">
         {/* Left: Ring Emoji */}
         <div className="absolute left-6 text-2xl">
          💍
         </div>

         {/* Center: John & Kristen */}
        <h1 className="text-3xl font-bold text-gray-800">
         John & Kristen
        </h1>

      </header>
      
    </main>
  );
}
