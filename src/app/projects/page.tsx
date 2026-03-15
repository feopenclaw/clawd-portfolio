// src/app/projects/page.tsx
export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold hacker-text hacker-glow mb-8">
        _ My Projects _
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
        {/* Placeholder Project Card 1 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-green-500/50 transition-shadow duration-300">
          <h2 className="text-2xl font-semibold hacker-text mb-2">Tic-Tac-Toe Game</h2>
          <p className="text-gray-400 mb-4">A classic Tic-Tac-Toe game built with React, showcasing basic game logic and state management.</p>
          <a href="#" className="text-green-400 hover:text-green-300">View Project &gt;</a>
        </div>

        {/* Placeholder Project Card 2 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-green-500/50 transition-shadow duration-300">
          <h2 className="text-2xl font-semibold hacker-text mb-2">Docker Orchestration</h2>
          <p className="text-gray-400 mb-4">A demonstration of Docker Compose for orchestrating multi-service applications, including a web server and database.</p>
          <a href="#" className="text-green-400 hover:text-green-300">View Project &gt;</a>
        </div>

        {/* Placeholder Project Card 3 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-green-500/50 transition-shadow duration-300">
          <h2 className="text-2xl font-semibold hacker-text mb-2">Interactive Portfolio (This one!)</h2>
          <p className="text-gray-400 mb-4">The very portfolio you're viewing, built with Next.js and designed for an engaging user experience.</p>
          <a href="#" className="text-green-400 hover:text-green-300">View Project &gt;</a>
        </div>
      </section>
    </div>
  );
}
