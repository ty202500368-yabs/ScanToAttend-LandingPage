import './App.css'

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-2xl font-bold text-blue-400">
            StudyLaunch
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-slate-300 hover:text-white">
              Features
            </a>
            <a href="#about" className="text-sm text-slate-300 hover:text-white">
              About
            </a>
            <a href="#pricing" className="text-sm text-slate-300 hover:text-white">
              Pricing
            </a>
            <a href="#contact" className="text-sm text-slate-300 hover:text-white">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-600"
          >
            Get Started
          </a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-300">
            React JS + Tailwind CSS Landing Page
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Build a modern landing page for your brand.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Create a clean, responsive, and professional website using React
            components and Tailwind utility classes.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-blue-500 px-7 py-3 text-center font-semibold hover:bg-blue-600"
            >
              Start Now
            </a>
            <a
              href="#features"
              className="rounded-full border border-white/20 px-7 py-3 text-center font-semibold text-slate-200 hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur">
          <div className="rounded-2xl bg-slate-900 p-6">
            <h2 className="text-2xl font-bold text-blue-300">Why Tailwind?</h2>
            <p className="mt-4 text-slate-300">
              You can design directly inside your JSX without writing a large
              separate CSS file.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-slate-800 p-5">
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-sm text-slate-400">Responsive</p>
              </div>

              <div className="rounded-xl bg-slate-800 p-5">
                <p className="text-2xl font-bold text-white">Fast</p>
                <p className="text-sm text-slate-400">Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-slate-900 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold text-blue-400">Features</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Everything you need in one landing page
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-bold">Clean Layout</h3>
              <p className="mt-3 text-slate-300">
                A simple and professional design suitable for projects,
                products, or portfolios.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-bold">Reusable Components</h3>
              <p className="mt-3 text-slate-300">
                React makes it easier to divide your page into sections and
                components.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-bold">Responsive Design</h3>
              <p className="mt-3 text-slate-300">
                Tailwind classes help your page look good on mobile, tablet,
                and desktop.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="font-semibold text-blue-400">About</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Perfect for practicing modern frontend development
          </h2>
        </div>

        <p className="text-lg leading-8 text-slate-300">
          This landing page is built using React JS for structure and Tailwind
          CSS for styling. You can customize the text, colors, buttons, and
          sections depending on your project.
        </p>
      </section>

      <section id="pricing" className="bg-slate-900 px-6 py-20">
        <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
          <p className="font-semibold text-blue-400">Pricing</p>
          <h2 className="mt-3 text-3xl font-bold">Starter Page</h2>
          <p className="mt-4 text-5xl font-bold text-blue-400">Free</p>
          <p className="mt-5 text-slate-300">
            Great for beginners learning React JS and Tailwind CSS.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-block rounded-full bg-blue-500 px-7 py-3 font-semibold hover:bg-blue-600"
          >
            Choose Plan
          </a>
        </div>
      </section>

      <section id="contact" className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          Ready to customize your landing page?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Replace the sample text with your own brand, service, product, or
          school project details.
        </p>

        <a
          href="mailto:hello@example.com"
          className="mt-8 inline-block rounded-full bg-blue-500 px-7 py-3 font-semibold hover:bg-blue-600"
        >
          Contact Us
        </a>
      </section>

      <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-slate-400">
        © 2026 StudyLaunch. All rights reserved.
      </footer>
    </main>
  );
}

export default App
