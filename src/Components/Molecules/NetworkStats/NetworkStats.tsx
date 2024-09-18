export default function NetworkStats() {
  const networkData = {
    devicesConnected: 15,
    downloadSpeed: 100,
    uploadSpeed: 20,
    latency: 5,
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Network Statistics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="stat bg-base-100 shadow">
          <div className="stat-title">Connected Devices</div>
          <div className="stat-value">{networkData.devicesConnected}</div>
        </div>
        <div className="stat bg-base-100 shadow">
          <div className="stat-title">Download Speed</div>
          <div className="stat-value">{networkData.downloadSpeed} Mbps</div>
        </div>
        <div className="stat bg-base-100 shadow">
          <div className="stat-title">Upload Speed</div>
          <div className="stat-value">{networkData.uploadSpeed} Mbps</div>
        </div>
        <div className="stat bg-base-100 shadow">
          <div className="stat-title">Latency</div>
          <div className="stat-value">{networkData.latency} ms</div>
        </div>
      </div>
    </div>
  );
}
