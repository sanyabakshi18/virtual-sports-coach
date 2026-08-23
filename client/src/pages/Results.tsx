import { Link } from "react-router-dom";

const Results = () => {
  const params = new URLSearchParams(window.location.search);
const sport = params.get("sport") || "Badminton";

  const scores = [
    {
      title: "Posture",
      score: 90,
      icon: "🧍",
      description: "Good body positioning throughout the movement.",
    },
    {
      title: "Movement",
      score: 84,
      icon: "🏃",
      description: "Movement is consistent, with room to improve footwork.",
    },
    {
      title: "Technique",
      score: 87,
      icon: "🎯",
      description: "Overall technique is strong and controlled.",
    },
    {
      title: "Balance",
      score: 91,
      icon: "⚖️",
      description: "Good stability before and after movements.",
    },
  ];

  const overallScore = Math.round(
    scores.reduce((sum, item) => sum + item.score, 0) / scores.length
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

          <div>
            <Link
              to="/upload"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              ← Analyze another video
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold mt-6">
              Performance Report
            </h1>

            <p className="text-slate-400 mt-3 text-lg">
              AI analysis results for your {sport} session
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4">
            <p className="text-slate-400 text-sm">
              Sport
            </p>

            <p className="text-xl font-semibold mt-1">
              🏸 {sport}
            </p>
          </div>

        </div>

        {/* Overall Score */}
        <section className="bg-gradient-to-br from-blue-600/20 to-slate-900 border border-blue-500/20 rounded-3xl p-8 mb-8">

          <div className="flex flex-col md:flex-row md:items-center gap-8">

            <div className="w-40 h-40 rounded-full border-8 border-blue-500/30 flex items-center justify-center shrink-0">
              <div className="text-center">
                <p className="text-5xl font-bold">
                  {overallScore}
                </p>

                <p className="text-slate-400 text-sm">
                  / 100
                </p>
              </div>
            </div>

            <div>
              <p className="text-blue-400 font-semibold uppercase tracking-wider text-sm">
                Overall Performance
              </p>

              <h2 className="text-3xl font-bold mt-2">
                Great performance! 👏
              </h2>

              <p className="text-slate-400 mt-3 max-w-2xl">
                Your movement and technique are looking strong.
                Focus on the improvement areas below to take your
                performance to the next level.
              </p>
            </div>

          </div>

        </section>

        {/* Score Cards */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            Performance Breakdown
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {scores.map((item) => (
              <div
                key={item.title}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
              >

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">
                    <div className="text-3xl">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold">
                        {item.title}
                      </h3>

                      <p className="text-slate-400 text-sm mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <span className="text-2xl font-bold text-blue-400">
                    {item.score}
                  </span>

                </div>

                {/* Progress bar */}
                <div className="mt-5 h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${item.score}%` }}
                  />
                </div>

              </div>
            ))}

          </div>
        </section>

        {/* AI Coach Feedback */}
        <section className="mt-10">

          <h2 className="text-2xl font-bold mb-6">
            🤖 AI Coach Feedback
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Strengths */}
            <div className="bg-slate-900 border border-green-500/20 rounded-2xl p-6">

              <h3 className="text-xl font-semibold text-green-400">
                ✓ What you're doing well
              </h3>

              <ul className="mt-5 space-y-4 text-slate-300">
                <li>
                  ✓ Maintaining good body posture during movement.
                </li>

                <li>
                  ✓ Strong balance after executing movements.
                </li>

                <li>
                  ✓ Consistent overall technique.
                </li>
              </ul>

            </div>

            {/* Improvements */}
            <div className="bg-slate-900 border border-yellow-500/20 rounded-2xl p-6">

              <h3 className="text-xl font-semibold text-yellow-400">
                ⚠ Areas to improve
              </h3>

              <ul className="mt-5 space-y-4 text-slate-300">
                <li>
                  ⚠ Improve footwork speed during transitions.
                </li>

                <li>
                  ⚠ Maintain a slightly lower defensive posture.
                </li>

                <li>
                  ⚠ Focus on smoother recovery after each stroke.
                </li>
              </ul>

            </div>

          </div>

        </section>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">

          <Link
            to="/upload"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold text-center transition"
          >
            Analyze Another Video
          </Link>

          <Link
            to="/"
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-xl font-semibold text-center transition"
          >
            Back to Dashboard
          </Link>

        </div>

      </div>
    </div>
  );
};

export default Results;