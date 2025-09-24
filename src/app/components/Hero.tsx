export default function Hero() {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?auto=format&fit=crop&w=1400&q=80')",
      }}
    >
      <div className="bg-black/40 absolute inset-0"></div>
      <div className="relative text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Explore Bangladesh</h1>
        <p className="text-xl mb-6">
          Discover stunning beaches, hills, forests, and more.
        </p>
        <a
          href="/destination"
          className="btn btn-primary bg-green-600 hover:bg-green-700 border-none"
        >
          Start Exploring
        </a>
      </div>
    </section>
  );
}
