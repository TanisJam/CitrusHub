export default function Dashboard() {
  return (
    <main className="flex-1 p-8">
      <div className="grid grid-cols-3 gap-6">
        {/* CPU Usage */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">CPU Usage</h3>
          <div className="flex justify-between items-end">
            <div className="text-4xl font-bold">45%</div>
            <div className="text-green-400">▲ 2%</div>
          </div>
        </div>

        {/* Memory Usage */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Memory Usage</h3>
          <div className="flex justify-between items-end">
            <div className="text-4xl font-bold">6.2 GB</div>
            <div className="text-red-400">▼ 0.5 GB</div>
          </div>
        </div>

        {/* Storage */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Storage</h3>
          <div className="flex justify-between items-end">
            <div className="text-4xl font-bold">1.8 TB</div>
            <div className="text-gray-400">75% used</div>
          </div>
        </div>

        {/* Network Traffic */}
        <div className="bg-gray-800 p-6 rounded-lg col-span-2">
          <h3 className="text-lg font-semibold mb-4">Network Traffic</h3>
          <div className="h-48 bg-gray-700 rounded"></div>
        </div>

        {/* System Health */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">System Health</h3>
          <div className="flex justify-center">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#4B5563"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="3"
                  strokeDasharray="75, 100"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                75%
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
