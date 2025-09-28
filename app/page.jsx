"use client";
import React, { useMemo, useState } from "react";

// Big Five → Song recommender app
// Place this file in: app/page.jsx

const SONG_DB = [
  {
    title: "Here Comes The Sun",
    artist: "The Beatles",
    url: "https://www.youtube.com/watch?v=KQetemT1sWc",
    traits: [80, 70, 65, 85, 20],
    reason:
      "Bright, optimistic, agreeable and moderately energetic — suits high Agreeableness + Openness.",
  },
  {
    title: "Lose Yourself",
    artist: "Eminem",
    url: "https://www.youtube.com/watch?v=_Yhyp-_hX2s",
    traits: [50, 85, 80, 40, 60],
    reason:
      "High conscientiousness and extraversion, intense and driven — fits goal-focused listeners.",
  },
  {
    title: "Clair de Lune",
    artist: "Claude Debussy (piano)",
    url: "https://www.youtube.com/watch?v=CvFH_6DNRCY",
    traits: [95, 40, 15, 70, 25],
    reason:
      "Very open and introspective, low extraversion — suits creative, calm profiles.",
  },
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    url: "https://www.youtube.com/watch?v=4NRXx6U8ABQ",
    traits: [60, 60, 90, 55, 35],
    reason:
      "High energy and pop sensibility — for outgoing, upbeat listeners.",
  },
  {
    title: "Hurt",
    artist: "Johnny Cash",
    url: "https://www.youtube.com/watch?v=8AHCfZTRGiI",
    traits: [45, 30, 10, 40, 90],
    reason:
      "Emotional, reflective, high neuroticism — fits melancholic/empathic listeners.",
  },
  {
    title: "Don’t Stop Me Now",
    artist: "Queen",
    url: "https://www.youtube.com/watch?v=HgzGwKwLmgM",
    traits: [70, 60, 95, 60, 15],
    reason:
      "High extraversion, fun-loving and energetic — perfect for extroverts.",
  },
  {
    title: "Weightless",
    artist: "Marconi Union",
    url: "https://www.youtube.com/watch?v=UfcAVejslrU",
    traits: [40, 35, 10, 75, 10],
    reason:
      "Calming ambient piece often used for relaxation — low arousal, low neuroticism.",
  },
  {
    title: "Stairway to Heaven",
    artist: "Led Zeppelin",
    url: "https://www.youtube.com/watch?v=QkF3oxziUI4",
    traits: [92, 55, 40, 65, 35],
    reason:
      "Progressive structure, high openness and emotional range.",
  },
  {
    title: "Royals",
    artist: "Lorde",
    url: "https://www.youtube.com/watch?v=nlcIKh6sBtc",
    traits: [70, 55, 40, 80, 30],
    reason: "A cool, introspective pop song — thoughtful and agreeable.",
  },
  {
    title: "Happy",
    artist: "Pharrell Williams",
    url: "https://www.youtube.com/watch?v=y6Sxv-sUYtM",
    traits: [65, 60, 95, 85, 10],
    reason:
      "Bubbly, extremely extroverted and agreeable — for high Extraversion + Agreeableness.",
  },
  {
    title: "Nights",
    artist: "Frank Ocean",
    url: "https://www.youtube.com/watch?v=Z0R9Tg2nChc",
    traits: [88, 50, 30, 60, 45],
    reason:
      "Complex, genre-blending and exploratory — high openness and nuance.",
  },
  {
    title: "Take Five",
    artist: "Dave Brubeck Quartet",
    url: "https://www.youtube.com/watch?v=vmDDOFXSgAs",
    traits: [85, 50, 55, 70, 25],
    reason:
      "Cool jazz with unusual structure — fits creative, moderately social listeners.",
  },
];

function euclideanDistance(a, b) {
  let s = 0;
  for (let i = 0; i < a.length; i++) {
    const d = a[i] - b[i];
    s += d * d;
  }
  return Math.sqrt(s);
}

export default function Page() {
  const [openness, setOpenness] = useState(70);
  const [conscientiousness, setConscientiousness] = useState(60);
  const [extraversion, setExtraversion] = useState(50);
  const [agreeableness, setAgreeableness] = useState(65);
  const [neuroticism, setNeuroticism] = useState(30);

  const userVector = [
    openness,
    conscientiousness,
    extraversion,
    agreeableness,
    neuroticism,
  ];

  const results = useMemo(() => {
    const scored = SONG_DB.map((s) => {
      const dist = euclideanDistance(s.traits, userVector);
      return { ...s, dist };
    });
    scored.sort((a, b) => a.dist - b.dist);
    return scored;
  }, [userVector]);

  const top = results[0];

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-50 p-6 flex items-start justify-center">
      <div className="w-full max-w-4xl bg-white/80 backdrop-blur rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-extrabold mb-2">
          Big Five → Song Recommender
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Adjust the Big Five sliders and get a song recommendation tailored to
          your personality profile.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <section className="col-span-1 md:col-span-2">
            <div className="space-y-6">
              {[
                { label: "Openness", value: openness, setter: setOpenness },
                {
                  label: "Conscientiousness",
                  value: conscientiousness,
                  setter: setConscientiousness,
                },
                {
                  label: "Extraversion",
                  value: extraversion,
                  setter: setExtraversion,
                },
                {
                  label: "Agreeableness",
                  value: agreeableness,
                  setter: setAgreeableness,
                },
                {
                  label: "Neuroticism",
                  value: neuroticism,
                  setter: setNeuroticism,
                },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-lg p-4 shadow-sm"
                >
                  <div className="flex justify-between items-baseline">
                    <div>
                      <div className="text-sm font-semibold">{s.label}</div>
                      <div className="text-xs text-gray-500">
                        Move the slider to set a value (0–100)
                      </div>
                    </div>
                    <div className="text-2xl font-bold">{s.value}</div>
                  </div>
                  <input
                    aria-label={s.label}
                    type="range"
                    min={0}
                    max={100}
                    value={s.value}
                    onChange={(e) => s.setter(Number(e.target.value))}
                    className="w-full mt-4"
                  />
                </div>
              ))}
            </div>
          </section>

          <aside className="col-span-1">
            <div className="sticky top-6 space-y-4">
              <div className="p-4 bg-white rounded-xl shadow">
                <h2 className="font-bold text-lg">Top recommendation</h2>
                <div className="mt-3">
                  <div className="text-sm text-gray-600">Song</div>
                  <a
                    href={top.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-xl font-semibold hover:underline"
                  >
                    {top.title}
                  </a>
                  <div className="text-sm text-gray-500">by {top.artist}</div>
                </div>
                <div className="mt-3 text-sm text-gray-700">{top.reason}</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
      }
