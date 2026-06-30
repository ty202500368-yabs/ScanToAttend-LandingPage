function Login() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#1a0505] px-6 text-white">
      <div className="w-full max-w-md rounded-2xl bg-white/10 p-8">
        <h1 className="text-3xl font-bold">Login</h1>

        <form className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg px-4 py-3 text-black"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg px-4 py-3 text-black"
          />

          <button className="w-full rounded-lg bg-[#800000] py-3 font-semibold hover:bg-[#a00000]">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}

export default Login;