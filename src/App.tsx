export const App = () => {
  return (
    <div className="h-screen flex flex-col min-h-screen p-4 max-w-[1440px] mx-auto">
      <header className="flex justify-between">
        <img
          src="https://mbdigital.io/wp-content/uploads/2022/06/MB-Digital.io_.svg"
          alt="MB Digital"
        />
        <button>Login</button>
      </header>
      <main className="flex-auto">
        <h1 className="text-center">Courses platform</h1>
      </main>
      <footer className="flex justify-center">
        <p>© 2022, MBDigital.io</p>
      </footer>
    </div>
  )
}
