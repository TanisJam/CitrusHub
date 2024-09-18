export default function TopBar() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to Your Homelab Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Quick Access</h2>
            <p>Access your most used servers and services here.</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Recent Notes</h2>
            <p>Your latest notes will appear here.</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Network Overview</h2>
            <p>A quick glance at your network stats.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
