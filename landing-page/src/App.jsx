import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const features = [
    {
      title: "QR Code Attendance",
      description:
        "Allow students, employees, or participants to scan a QR code for fast and accurate attendance recording.",
    },
    {
      title: "Real-Time Monitoring",
      description:
        "View attendance logs instantly and track who is present, late, or absent in real time.",
    },
    {
      title: "Secure Records",
      description:
        "Keep attendance data organized, protected, and easy to access whenever needed.",
    },
    {
      title: "Automated Reports",
      description:
        "Generate attendance summaries and reports without manual checking or paper-based records.",
    },
    {
      title: "User-Friendly Dashboard",
      description:
        "Manage users, schedules, attendance records, and reports through a clean admin dashboard.",
    },
    {
      title: "Mobile-Friendly Access",
      description:
        "Designed to work smoothly on phones, tablets, laptops, and desktop computers.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#1a0505] text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1a0505]/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-2xl font-bold">
            <span className="text-[#d4a017]">Scan</span>ToAttend
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#home" className="text-sm text-white/80 hover:text-[#d4a017]">
              Home
            </a>
            <a href="#features" className="text-sm text-white/80 hover:text-[#d4a017]">
              Features
            </a>
            <a href="#about" className="text-sm text-white/80 hover:text-[#d4a017]">
              About Us
            </a>
            <a href="/login" className="text-sm text-white/80 hover:text-[#d4a017]">
              Login
            </a>
          </div>

          <a
            href="#get-started"
            className="hidden rounded-full bg-[#800000] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#a00000] md:inline-block"
          >
            Get Started
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg border border-white/10 p-2 md:hidden"
            aria-label="Toggle menu"
          >
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="mt-1.5 block h-0.5 w-6 bg-white"></span>
            <span className="mt-1.5 block h-0.5 w-6 bg-white"></span>
          </button>
        </nav>

        {isOpen && (
          <div className="border-t border-white/10 bg-[#1a0505] px-6 py-5 md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-white/80 hover:text-[#d4a017]">
                Home
              </a>
              <a href="#features" className="text-white/80 hover:text-[#d4a017]">
                Features
              </a>
              <a href="#about" className="text-white/80 hover:text-[#d4a017]">
                About Us
              </a>
              <a href="/login" className="text-white/80 hover:text-[#d4a017]">
                Login
              </a>
              <a
                href="#get-started"
                className="rounded-full bg-[#800000] px-5 py-3 text-center font-semibold hover:bg-[#a00000]"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2"
      >
        <div>
          <p className="mb-5 inline-flex rounded-full border border-[#d4a017]/30 bg-[#800000]/20 px-4 py-2 text-sm font-medium text-[#f3c74f]">
            Smart Attendance Management System
          </p>

          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Attendance made simple with one quick scan.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
            ScanToAttend is a web-based attendance system that uses QR scanning
            to record, monitor, and manage attendance faster, easier, and more
            accurately.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#get-started"
              className="rounded-full bg-[#800000] px-8 py-3 text-center font-semibold transition hover:bg-[#a00000]"
            >
              Get Started
            </a>

            <a
              href="#features"
              className="rounded-full border border-white/20 px-8 py-3 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Explore Features
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
          <div className="rounded-2xl bg-[#2a0808] p-8">
            <div className="mx-auto flex h-56 w-56 items-center justify-center rounded-3xl bg-white p-5">
              <div className="grid grid-cols-5 gap-2">
                {Array.from({ length: 25 }).map((_, index) => (
                  <div
                    key={index}
                    className={`h-7 w-7 rounded-sm ${
                      [0, 1, 2, 5, 7, 10, 11, 12, 16, 18, 20, 21, 23, 24].includes(
                        index
                      )
                        ? "bg-[#800000]"
                        : "bg-slate-200"
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <h2 className="text-2xl font-bold text-[#f3c74f]">
                Scan. Record. Attend.
              </h2>
              <p className="mt-3 text-white/70">
                A faster way to manage attendance using QR technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-[#2a0808] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold text-[#f3c74f]">Features</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Powerful tools for modern attendance tracking
            </h2>
            <p className="mt-4 text-white/70">
              ScanToAttend helps reduce manual work, prevent errors, and keep
              attendance records organized.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#800000] text-xl font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="mt-3 leading-7 text-white/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2"
      >
        <div>
          <p className="font-semibold text-[#f3c74f]">About Us</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Built to make attendance checking faster and smarter
          </h2>
        </div>

        <div className="space-y-5 text-lg leading-8 text-white/70">
          <p>
            ScanToAttend is designed for schools, organizations, offices, and
            events that need a reliable way to manage attendance records.
          </p>

          <p>
            Instead of using paper-based attendance sheets, users can simply
            scan a QR code and have their attendance saved instantly in the
            system.
          </p>

          <p>
            The goal of ScanToAttend is to save time, reduce errors, and help
            administrators monitor attendance more efficiently.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-started" className="bg-[#800000] px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold md:text-5xl">
            Start managing attendance the smarter way.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
            Use ScanToAttend to simplify attendance monitoring, improve record
            accuracy, and speed up your daily checking process.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/register"
              className="rounded-full bg-white px-8 py-3 text-center font-semibold text-[#800000] transition hover:bg-slate-100"
            >
              Create Account
            </a>

            <a
              href="/login"
              className="rounded-full border border-white/40 px-8 py-3 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Login
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#1a0505] px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row">
          <p className="text-sm text-white/50">
            © 2026 ScanToAttend. All rights reserved.
          </p>

          <div className="flex gap-5 text-sm text-white/50">
            <a href="#home" className="hover:text-[#f3c74f]">
              Home
            </a>
            <a href="#features" className="hover:text-[#f3c74f]">
              Features
            </a>
            <a href="#about" className="hover:text-[#f3c74f]">
              About Us
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;