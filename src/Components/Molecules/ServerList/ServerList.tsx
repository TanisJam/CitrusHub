import { ExternalLink } from 'lucide-react';
import { FormServer } from '../FormServer';
import { useStore } from './../../../store';

export default function ServerList() {
  const serversList = useStore((state) => state.Directory.serversList);
  const addServer = useStore((state) => state.Directory.addServer);

  return (
    <div className="p-6 flex flex-col">
      <h1 className="text-3xl font-bold mb-4">Service directory</h1>
      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div className=" gap-1 join join-vertical lg:join-horizontal">
          <form.Field
            name="name"
            validators={validators.name}
            children={(field) => (
              <label className="form-control w-full max-w-xs">
                <input
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => {
                    field.handleChange(e.target.value);
                  }}
                  className={`
                    input input-bordered w-full max-w-xs
                    ${
                      field.state.meta.isTouched &&
                      field.state.meta.errors.length
                        ? 'input-error'
                        : ''
                    }`}
                  placeholder="Server Name"
                />
              </label>
            )}
          />
          <form.Field
            name="ip"
            validators={validators.ip}
            children={(field) => (
              <label className="form-control w-full max-w-xs">
                <input
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => {
                    field.handleChange(e.target.value);
                  }}
                  className={`
                    input input-bordered w-full max-w-xs
                    ${
                      field.state.meta.isTouched &&
                      field.state.meta.errors.length
                        ? 'input-error'
                        : ''
                    }`}
                  placeholder="Server IP Address"
                />
              </label>
            )}
          />
          <form.Field
            name="port"
            validators={validators.port}
            children={(field) => (
              <label className="form-control w-full max-w-xs">
                <input
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => {
                    field.handleChange(Number(e.target.value));
                  }}
                  className={`
                    input input-bordered w-full max-w-xs
                    ${
                      field.state.meta.isTouched &&
                      field.state.meta.errors.length
                        ? 'input-error'
                        : ''
                    }`}
                  placeholder="Server Port"
                />
              </label>
            )}
          />
          <button type="submit" className="btn btn-primary join-item">
            Add Server
          </button>
        </div>
      </form> */}

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
