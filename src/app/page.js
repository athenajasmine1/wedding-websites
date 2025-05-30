"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  // ==================== Countdown Timer Logic ====================
  // Prompt: Create an animated countdown to the wedding date with days, hours, minutes, seconds.
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-09-20T14:00:00") - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <main className="min-h-screen bg-white">

      {/* ==================== Header Section ==================== */}
      {/* 
        Prompt: Navigation bar with ring emoji left, couple's name center, and nav links right.
      */}
      <header className="relative flex items-center justify-center px-6 py-6 shadow">
        <div className="absolute left-6 text-2xl">💍</div>
        <h1 className="text-3xl font-bold text-gray-800">John & Kristen</h1>
        <nav className="absolute right-6 space-x-6">
          <a href="#home" className="text-gray-700 hover:text-yellow-600 font-medium">
            Home
          </a>
          <a href="#about" className="text-gray-700 hover:text-yellow-600 font-medium">
            About
          </a>
          <a href="#rsvp" className="text-gray-700 hover:text-yellow-600 font-medium">
            RSVP
          </a>
          <a href="#wedding" className="text-gray-700 hover:text-yellow-600 font-medium">
            Wedding
          </a>
        </nav>
      </header>

      {/* ==================== Home Section ==================== */}
      {/* 
        Prompt: Welcome message with couple's name and wedding website intro.
      */}
      <section id="home" className="py-20 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">John & Kristen</h1>
        <p className="text-lg text-gray-600 mb-8">Welcome to our wedding website!</p>

        {/* ==================== Countdown Section ==================== */}
        {/* 
          Prompt: Animated countdown to wedding day with days, hours, minutes, seconds blocks styled in yellow.
        */}
        <div className="flex justify-center gap-6 text-center">
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div
              key={unit}
              className="bg-yellow-100 rounded-xl shadow p-4 w-20 animate-pulse hover:animate-none transition"
            >
              <p className="text-2xl font-bold text-yellow-600">
                {timeLeft[unit] < 10 ? `0${timeLeft[unit]}` : timeLeft[unit]}
              </p>
              <p className="text-sm font-medium text-gray-600 uppercase">{unit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== About Section ("Our Story") ==================== */}
      {/* 
        Prompt: Replace lorem ipsum with professional engaging love story of John and Kristen.
      */}
      <section id="about" className="py-20 px-4 bg-pink-50 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          John and Kristen met through Singles for Christ, a church group, and from the very first conversation during a fellowship, something just clicked. It wasn’t long before they started noticing each other a little more—especially during the next event, when they caught each other glancing from opposite sides of the room. That moment gave John the push he needed to ask Kristen out for coffee.
          <br /><br />
          Coffee turned into dinner. Their first plan was to meet on a Thursday, but John, clearly eager, asked her out for Monday instead. She agreed. On the way to dinner, Kristen asked if this was in place of Thursday. John simply asked, “Would you still like to meet then?” She replied, “Depends on how tonight goes.”
          <br /><br />
          Well—Thursday happened. Safe to say that this first date would secure the rest of their Thursdays after that.
          <br /><br />
          Now, surrounded by the love of their family and friends, they can’t wait to begin this new chapter together.
        </p>
      </section>

      {/* ==================== RSVP Section ==================== */}
      {/* 
        Prompt: RSVP form with fields for first name, last name, email, attendance dropdown, and submit button.
      */}
      <section id="rsvp" className="flex flex-col items-center justify-center py-28 px-4 bg-white">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
          We invite you to celebrate our wedding
        </h2>
        <form className="w-full max-w-md space-y-4">
          <div>
            <label className="block text-zinc-950 font-medium mb-1">First Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-4 py-2"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label className="block text-zinc-950 font-medium mb-1">Last Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-4 py-2"
              placeholder="Enter your last name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-4 py-2"
              placeholder="Enter your email"
            />
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
            <button
              type="submit"
              className="w-full bg-yellow-600 hover:bg-rose-400 text-white font-semibold py-2 px-4 rounded"
            >
              Submit RSVP
            </button>
          </div>
        </form>
      </section>

      {/* ==================== Wedding Schedule Section ==================== */}
      {/* 
        Prompt: Wedding day schedule with times and locations formatted professionally.
      */}
      <section
        id="wedding"
        className="py-20 px-4 bg-gray-50 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">Wedding Schedule</h2>
        <div className="space-y-8 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold mb-2">2:00 PM – Ceremony</h3>
            <p>Shrine Church of Our Lady of the Rockies</p>
            <p>Join us as we say "I do" in a sacred and joyful celebration of our love.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">5:00 PM – Cocktail Hour</h3>
            <p>The Malcolm Hotel, Canmore</p>
            <p>Enjoy light bites, drinks, and good company while we sneak away for some photos!</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">6:00 PM – Reception</h3>
            <p>The Malcolm Hotel, Canmore</p>
            <p>Let the celebration begin! Dinner, speeches, dancing, and unforgettable memories to follow.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
