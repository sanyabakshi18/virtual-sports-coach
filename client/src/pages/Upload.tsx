import { useState } from "react";
import { Link } from "react-router-dom";

const sports = [
  {
    name: "Badminton",
    icon: "🏸",
    description: "Analyze strokes, posture & footwork",
  },
  {
    name: "Football",
    icon: "⚽",
    description: "Analyze movement & kicking technique",
  },
  {
    name: "Basketball",
    icon: "🏀",
    description: "Analyze shooting & movement",
  },
  {
    name: "Tennis",
    icon: "🎾",
    description: "Analyze strokes & positioning",
  },
  {
    name: "Cricket",
    icon: "🏏",
    description: "Analyze batting & bowling technique",
  },
];

const Upload = () => {
  const [selectedSport, setSelectedSport] = useState("Badminton");

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <Link
            to="/"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            ← Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mt-8">
            Analyze Your Performance
          </h1>

          <p className="text-slate-400 text-lg mt-4">
            Choose your sport and upload a gameplay video.
            Our AI will analyze your movement and technique.
          </p>
        </div>

        {/* Sport Selection */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">
            1. Choose your sport
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sports.map((sport) => (
              <button
                key={sport.name}
                onClick={() => setSelectedSport(sport.name)}
                className={`text-left p-6 rounded-2xl border transition-all ${
                  selectedSport === sport.name
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-slate-700 bg-slate-900 hover:border-slate-500"
                }`}
              >
                <div className="text-4xl mb-4">
                  {sport.icon}
                </div>

                <h3 className="text-xl font-semibold">
                  {sport.name}
                </h3>

                <p className="text-slate-400 mt-2">
                  {sport.description}
                </p>

                {selectedSport === sport.name && (
                  <p className="text-blue-400 text-sm mt-4 font-medium">
                    ✓ Selected
                  </p>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Upload Area */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold mb-6">
            2. Upload your video
          </h2>

          <div className="border-2 border-dashed border-slate-700 rounded-3xl bg-slate-900/70 p-12 text-center hover:border-blue-500 transition">
            <div className="text-5xl mb-5">
              🎥
            </div>

            <h3 className="text-2xl font-semibold">
              Upload gameplay video
            </h3>

            <p className="text-slate-400 mt-3">
              MP4, MOV or AVI
            </p>

            <label className="inline-block mt-7 cursor-pointer">
              <span className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-xl font-semibold transition">
                Choose Video
              </span>

              <input
                type="file"
                accept="video/*"
                className="hidden"
              />
            </label>
          </div>
        </section>

        {/* Selected Sport */}
        <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <p className="text-slate-400">
            Selected sport
          </p>

          <p className="text-xl font-semibold mt-1">
            {selectedSport}
          </p>
        </div>

      </div>
    </div>
  );
};

export default Upload;