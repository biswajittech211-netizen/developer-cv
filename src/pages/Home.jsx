function Home() {
  return (

    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">

      <h1 className="text-5xl font-bold">
        Biswajit Nayak
      </h1>

      <p className="text-xl mt-3">
        Full Stack Developer | React | Node.js
      </p>

      <div className="mt-6 space-x-4">

        <a
        href="https://github.com"
        className="bg-black px-5 py-2 rounded-lg">
        GitHub
        </a>

        <a
        href="https://linkedin.com"
        className="bg-blue-700 px-5 py-2 rounded-lg">
        LinkedIn
        </a>

      </div>

    </div>

  );
}

export default Home;