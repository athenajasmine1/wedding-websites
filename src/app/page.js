import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* ==================== Header Section ==================== */}
      {/* 
        This section includes:
        - Ring emoji on the left
        - Couple's name centered ("John & Kristen")
        - Navigation links on the right (Home, About, RSVP, Wedding)
      */}
      <header className="relative flex items-center justify-center px-6 py-6 shadow">
        
        {/* Left: Ring Emoji */}
        <div className="absolute left-6 text-2xl">
          💍
        </div>

        {/* Center: Couple's Name */}
        <h1 className="text-3xl font-bold text-gray-800">
          John & Kristen
        </h1>

        {/* Right: Navigation Menu */}
        <nav className="absolute right-6 space-x-6">
          <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium">Home</a>
          <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium">About</a>
          <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium">RSVP</a>
          <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium">Wedding</a>
        </nav>
      </header>

      {/* ==================== Home Section ==================== */}
      {/* 
        Welcome message section shown on the home page 
      */}
      <section id="home" className="py-20 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">John & Kristen</h1>
        <p className="text-lg text-gray-600">Welcome to our wedding website!</p>
      </section>

      {/* ==================== RSVP Section ==================== */}
      {/* 
        RSVP form allowing guests to submit their attendance 
        Includes input fields for first name, last name, email, and attendance option
      */}
      <section id="rsvp" className="flex flex-col items-center justify-center py-28 px-4 bg-white">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
          We invite you to celebrate our wedding
        </h2>
        <form className="w-full max-w-md space-y-4">
          {/* First Name Field */}
          <div>
            <label className="block text-zinc-950 font-medium mb-1">First Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-4 py-2"
              placeholder="Enter your first name"
            />
          </div>

          {/* Last Name Field */}
          <div>
            <label className="block text-zinc-950 font-medium mb-1">Last Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-4 py-2"
              placeholder="Enter your last name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-4 py-2"
              placeholder="Enter your email"
            />
          </div>

          {/* Attendance Dropdown */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Would you like to join us?</label>
            <select className="w-full border border-gray-300 rounded px-4 py-2">
              <option value="">Select an option</option>
              <option value="yes">Yes, I will attend</option>
              <option value="no">No, I can’t make it</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-yellow-600 hover:bg-rose-400 text-white font-semibold py-2 px-4 rounded"
            >
              Submit RSVP
            </button>
          </div>
        </form>
      </section>

      {/* ==================== About Section ("Our Story") ==================== */}
      {/* 
        This section was updated based on the user's request during the ChatGPT conversation.
        The original short description was replaced with a Lorem Ipsum placeholder paragraph.
      */}
      <section id="about" className="py-20 px-4 bg-pink-50 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
          convallis lorem. Sed facilisis eu justo id cursus. In id luctus sapien.
          Maecenas vulputate malesuada sapien, vel fermentum augue ultricies in.
          Aliquam erat volutpat. Vivamus nec nunc eget felis euismod placerat. Sed
          at eros ut magna suscipit fermentum. Donec auctor lacus in sagittis
          tincidunt. Ut laoreet nulla ac erat vehicula, non bibendum odio gravida.
        </p>
      </section>

    </main>
  );
}

       

      {/* RSVP Section */}
      <section id="rsvp" className="flex flex-col items-center justify-center py-28 px-4 bg-white">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
          We invite you to celebrate our wedding
        </h2>
        <form className="w-full max-w-md space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">First Name</label>
            <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" placeholder="Enter your first name" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Last Name</label>
            <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" placeholder="Enter your last name" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded px-4 py-2" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Would you like to join us?</label>
            <select className="w-full border border-gray-300 rounded px-4 py-2">
              <option value="">Select an option</option>
              <option value="yes">Yes, I will attend</option>
              <option value="no">No, I can’t make it</option>
            </select>
          </div>
          <div className="pt-4">
            <button type="submit" className="w-full bg-yellow-600 hover:bg-rose-400 text-white font-semibold py-2 px-4 rounded">
              Submit RSVP
            </button>
          </div>
        </form>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-pink-50 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
        <p className="text-gray-600">Here's a little about how we met and our journey together...</p>
      </section>


    </main>
  );
}
