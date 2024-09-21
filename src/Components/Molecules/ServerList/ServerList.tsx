import { ExternalLink } from 'lucide-react';
import { FormServer } from '../FormServer';
import { useStore } from './../../../store';

export default function ServerList() {
  const serversList = useStore((state) => state.Directory.serversList);
  const addServer = useStore((state) => state.Directory.addServer);

  return (
    <div className="p-6 flex flex-col">
      <h1 className="text-3xl font-bold mb-4">Service directory</h1>

      <div className="overflow-x-auto mb-4">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>IP Address</th>
              <th>Port</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {serversList.map((server) => (
              <tr className="hover:bg-gray-100/20" key={server.id}>
                <td>{server.name}</td>
                <td>{server.ip}</td>
                <td>{server.port}</td>
                <td>
                  <a
                    href={`http://${server.ip}:${server.port}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link-hover hover:text-info/50"
                  >
                    <ExternalLink />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <FormServer onSubmit={addServer} />
    </div>
  );
}
