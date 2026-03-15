// src/app/page.tsx
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-8">
      <h1 className="text-5xl font-bold hacker-text hacker-glow mb-4">
        _ Pharthiban Kumarhesan _
      </h1>
      <p className="text-xl text-gray-300 mb-8">
        &gt; Full-stack Developer | Cloud Enthusiast | Problem Solver
      </p>

      <section className="max-w-2xl text-lg text-gray-400 leading-relaxed">
        <h2 className="text-3xl font-semibold hacker-text mb-4">
          _ About Me _
        </h2>
        <p className="mb-4">
          Welcome to my interactive portfolio! I'm a passionate developer with
          a knack for building robust and scalable applications. My journey
          in tech is driven by curiosity and a constant desire to learn and
          create.
        </p>
        <p>
          Explore my projects to see what I've been working on, or
          head over to the contact section to get in touch.
        </p>
      </section>
    </div>
  );
}
