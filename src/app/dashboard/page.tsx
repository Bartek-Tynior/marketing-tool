import NavbarLink from "../components/NavbarLink";

export default function Dashboard() {
  return (
    <section className="min-w-full min-h-full">
      <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div className="h-full px-3 py-4 overflow-y-auto bg-blue-400">
          <ul>
            {/* <NavbarLink /> */}
            
          </ul>
        </div>
      </aside>
    </section>
  );
}
