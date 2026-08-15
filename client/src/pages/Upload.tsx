import { useState, useEffect } from "react";
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
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState("");

  const handleVideoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setError("");

    // Maximum file size: 100 MB
    const maxSize = 100 * 1024 * 1024;

    if (file.size > maxSize) {
      setVideoFile(null);
      setVideoUrl(null);
      setError("Video must be smaller than 100 MB.");
      return;
    }

    setVideoFile(file);
  };

  useEffect(() => {
    if (!videoFile) {
      setVideoUrl(null);
      return;
    }

    const url = URL.createObjectURL(videoFile);
    setVideoUrl(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [videoFile]);

  const removeVideo = () => {
    setVideoFile(null);
    setVideoUrl(null);
    setError("");
  };

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

          <p className="text-slate-400 text-lg mt-4 max-w-2xl">
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
                type="button"
                onClick={() => setSelectedSport(sport.name)}
                className={`text-left p-6 rounded-2xl border transition-all ${
                  selectedSport === sport.name
                    ? "border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/10"
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

        {/* Upload */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold mb-6">
            2. Upload your video
          </h2>

          {!videoFile ? (
            <label className="block cursor-pointer">
              <div className="border-2 border-dashed border-slate-700 rounded-3xl bg-slate-900/70 p-12 text-center hover:border-blue-500 hover:bg-slate-900 transition">
                <div className="text-5xl mb-5">
                  🎥
                </div>

                <h3 className="text-2xl font-semibold">
                  Upload gameplay video
                </h3>

                <p className="text-slate-400 mt-3">
                  MP4, MOV or AVI • Maximum 100 MB
                </p>

                <span className="inline-block mt-7 bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-xl font-semibold transition">
                  Choose Video
                </span>
              </div>

              <input
                type="file"
                accept="video/*"
                onChange={handleVideoChange}
                className="hidden"
              />
            </label>
          ) : (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

              {/* Video Preview */}
              {videoUrl && (
                <video
                  src={videoUrl}
                  controls
                  className="w-full max-h-[500px] rounded-2xl bg-black"
                />
              )}

              {/* File Information */}
              <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="font-semibold text-lg">
                    {videoFile.name}
                  </p>

                  <p className="text-slate-400 text-sm mt-1">
                    {(videoFile.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>

                <button
                  type="button"
                  onClick={removeVideo}
                  className="border border-red-500/50 text-red-400 hover:bg-red-500/10 px-5 py-2 rounded-xl transition"
                >
                  Remove Video
                </button>
              </div>
            </div>
          )}

          {error && (
            <p className="text-red-400 mt-4">
              {error}
            </p>
          )}
        </section>

        {/* Analysis Summary */}
        <section className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <p className="text-slate-400">
            Selected sport
          </p>

          <p className="text-xl font-semibold mt-1">
            {selectedSport}
          </p>

          {videoFile && (
            <p className="text-green-400 mt-3">
              ✓ Video ready for analysis
            </p>
          )}
        </section>

        {/* Analyze Button */}
        <div className="mt-8">
          <button
            type="button"
            disabled={!videoFile}
            className={`w-full md:w-auto px-10 py-4 rounded-xl text-lg font-semibold transition ${
              videoFile
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-slate-800 text-slate-500 cursor-not-allowed"
            }`}
          >
            Analyze {selectedSport} Performance →
          </button>
        </div>

      </div>
    </div>
  );
};

export default Upload;