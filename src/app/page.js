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

        {/* Right: Navigation */}
         <nav className="absolute right-6 space-x-6">
          <a href="#" className="text-gray-700 hover:text-pink-500 font-medium">Home</a>
          <a href="#" className="text-gray-700 hover:text-pink-500 font-medium">About</a>
          <a href="#" className="text-gray-700 hover:text-pink-500 font-medium">RSVP</a>
          <a href="#" className="text-gray-700 hover:text-pink-500 font-medium">Wedding</a>
         </nav>

      </header>
      
    </main>
  );
}
