import Navbar from "../components/Navbar";

function Home() {
  return (
    <main className="min-h-screen bg-[#1a0505] text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <h1 className="text-5xl font-bold">
          Attendance made simple with one quick scan.
        </h1>

        <p className="mt-5 max-w-xl text-white/70">
          ScanToAttend helps record and monitor attendance using QR technology.
        </p>
      </section>
    </main>
  );
}

export default Home;