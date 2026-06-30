function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#1a0505] text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="/" className="text-2xl font-bold">
          <span className="text-[#f3c74f]">Scan</span>ToAttend
        </a>

        <div className="hidden gap-8 md:flex">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/login">Login</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;