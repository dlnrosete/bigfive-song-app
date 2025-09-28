"use client";

import { useState } from "react";
import songs from "../data/songs.json";

export default function Home() {
  const [traits, setTraits] = useState({
    O: 2,
    C: 2,
    E: 2,
    A: 2,
    N: 2,
  });
  const [recommendation, setRecommendation] = useState("");

  const handleChange = (trait, value) => {
    setTraits((prev) => ({ ...prev, [trait]: parseInt(value) }));
  };

  const handleSubmit = () => {
    const key = `O${traits.O}-C${traits.C}-E${traits.E}-A${traits.A}-N${traits.N}`;
    if (songs[key]) {
      // Pick a random song from the array for variety
      const randomSong =
        songs[key][Math.floor(Math.random() * songs[key].length)];
      setRecommendation(randomSong);
    } else {
      setRecommendation("No song found for this combo.");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-purple-300 to-blue-200">
      <h1 className="text-3xl font-bold mb-6">Big Five Song Recommender 🎵</h1>

      <div className="grid gap-4 w-full max-w-md">
        {["O", "C", "E", "A", "N"].map((trait) => (
          <div key={trait} className="flex flex-col">
            <label className="mb-2 font-semibold">{trait}</label>
            <input
              type="range"
              min="1"
              max="3"
              value={traits[trait]}
              onChange={(e) => handleChange(trait, e.target.value)}
              className="w-full"
            />
            <span>Value: {traits[trait]}</span>
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700"
      >
        Get Recommendation
      </button>

      {recommendation && (
        <div className="mt-6 p-4 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-bold">Recommended Song:</h2>
          <p className="mt-2 text-lg">{recommendation}</p>
        </div>
      )}
    </main>
  );
}
