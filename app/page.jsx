"use client";

import { useState } from "react"; 
import songs from "../data/songs-1.json";
import diaries from "../data/mbti_diaries_v10.json";

export default function Home() {
  const [traits, setTraits] = useState({
    O: 2,
    C: 2,
    E: 2,
    A: 2,
    N: 2,
  });

  const [song, setSong] = useState("");
  const [diary, setDiary] = useState(null);

  const handleChange = (trait, value) => {
    setTraits((prev) => ({ ...prev, [trait]: parseInt(value) }));
  };

  const handleSubmit = () => {
    const key = `O${traits.O}C${traits.C}E${traits.E}A${traits.A}N${traits.N}`;

    // Song recommendation
    if (songs[key]) {
      const randomSong = songs[key][Math.floor(Math.random() * songs[key].length)];
      setSong(randomSong);
    } else {
      setSong("No song found for this combo.");
    }

    // Diary recommendation
    if (diaries[key]) {
      setDiary(diaries[key]);
    } else {
      setDiary(null);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-indigo-100 to-pink-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Big Five Recommender 🎵📔</h1>

      {/* Sliders */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
        {["O", "C", "E", "A", "N"].map((trait) => (
          <div key={trait} className="flex flex-col items-center">
            <label className="mb-2 font-medium text-gray-700">{trait}</label>
            <input
              type="range"
              min="1"
              max="3"
              value={traits[trait]}
              onChange={(e) => handleChange(trait, e.target.value)}
              className="w-24"
            />
            <span>{traits[trait]}</span>
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700"
      >
        Get Recommendations
      </button>

      {/* Song recommendation */}
      {song && (
        <div className="mt-6 p-4 bg-white rounded-xl shadow-md max-w-xl text-center">
          <h2 className="text-xl font-semibold mb-2">🎵 Recommended Song</h2>
          <p className="text-gray-700">{song}</p>
        </div>
      )}

      {/* Diary recommendation */}
      {diary && (
        <div className="mt-6 p-6 bg-white rounded-2xl shadow-lg max-w-xl text-gray-800 text-left">
          <h2 className="text-xl font-semibold mb-2">📔 Diary Entry</h2>
          <p className="text-sm text-gray-500 mb-2">
            Match: {diary.mbti} ({diary.ocean})
          </p>
          <p className="leading-relaxed">{diary.entry}</p>
        </div>
      )}
    </main>
  );
}
