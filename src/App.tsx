import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
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
      <NetworkStats />
      <ServerList />
      <Notes />
      {/* <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;

interface Server {
  id: number;
  name: string;
  ip: string;
  port: number;
}

const ServerList: React.FC = () => {
  const [servers, setServers] = useState<Server[]>([
    { id: 1, name: 'Plex Server', ip: '192.168.10.100', port: 8006 },
    { id: 2, name: 'NAS', ip: '192.168.1.101', port: 5000 },
    { id: 3, name: 'Home Assistant', ip: '192.168.1.102', port: 8123 },
  ]);

  console.log('setServer', setServers);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Servers and Services</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>IP Address</th>
              <th>Port</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {servers.map((server) => (
              <tr key={server.id}>
                <td>{server.name}</td>
                <td>{server.ip}</td>
                <td>{server.port}</td>
                <td>
                  <a
                    href={`http://${server.ip}:${server.port}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Open
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

interface Note {
  id: number;
  content: string;
  date: string;
}

const Notes: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote.trim() !== '') {
      const note: Note = {
        id: Date.now(),
        content: newNote,
        date: new Date().toLocaleString(),
      };
      setNotes([note, ...notes]);
      setNewNote('');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Notes</h1>
      <div className="mb-4">
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Add a new note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        ></textarea>
        <button className="btn btn-primary mt-2" onClick={addNote}>
          Add Note
        </button>
      </div>
      <div className="space-y-4">
        {notes.map((note) => (
          <div key={note.id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <p>{note.content}</p>
              <div className="card-actions justify-end">
                <span className="text-sm text-gray-500">{note.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const NetworkStats: React.FC = () => {
  // En una aplicación real, aquí obtendrías datos de tu red
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
};
