import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
      <div className="text-center max-w-4xl">
        <h1 className="text-6xl font-extrabold text-white">
          Train Smarter.
          <br />
          <span className="text-blue-400">
            Improve Faster.
          </span>
        </h1>

        <p className="text-slate-300 text-xl mt-8">
         Upload your gameplay and receive AI-powered
         feedback on your movement, technique, posture,
         and overall performance.
        </p>

        <div className="mt-12">
          <Link
            to="/upload"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-white text-lg font-semibold"
          >
            Analyze Video
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;