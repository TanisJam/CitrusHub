import { useForm } from '@tanstack/react-form';
import { Server } from './../../../store';
import { useRef } from 'react';
import { Plus } from 'lucide-react';

interface FormServerProps {
  onSubmit: (server: Server) => void;
}

export default function FormServer({ onSubmit: addServer }: FormServerProps) {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  const form = useForm({
    defaultValues: {
      name: '',
      ip: '',
      port: 80,
    },
    onSubmit: async (values) => {
      console.log('Form submitted with values', values);
      const newServer = {
        id: Date.now(),
        name: values.value.name,
        ip: values.value.ip,
        port: values.value.port,
      };
      addServer(newServer);
      form.reset();
      closeModal();
    },
  });

  const validators = {
    name: {
      onChange: ({ value }: { value: string }) =>
        !value
          ? 'A name is required'
          : value.length < 3
          ? 'Name must be at least 3 characters'
          : undefined,
    },
    ip: {
      onChange: ({ value }: { value: string }) =>
        !value ? 'An IP address is required' : undefined,
    },
    port: {
      onChange: ({ value }: { value: number }) =>
        !value || value < 1 || value > 65535
          ? 'A port number must be between 1 and 65535'
          : undefined,
    },
  };

  return (
    <>
      <button className="btn btn-sm btn-primary mr-auto" onClick={openModal}>
        <Plus />
        New
      </button>
      <dialog ref={modalRef} className="modal ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <div className="bg-base-100 p-6 gap-1 flex flex-col rounded-md modal-box">
            <h3 className="font-bold text-lg mb-4">Add new service</h3>
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
                field.state.meta.isTouched && field.state.meta.errors.length
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
                field.state.meta.isTouched && field.state.meta.errors.length
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
                field.state.meta.isTouched && field.state.meta.errors.length
                  ? 'input-error'
                  : ''
              }`}
                    placeholder="Server Port"
                  />
                </label>
              )}
            />
            <button type="submit" className="btn btn-success join-item">
              Add Server
            </button>
            <button
              type="button"
              onClick={() => {
                form.reset();
                closeModal();
              }}
              className="btn btn-error join-item"
            >
              Cancel
            </button>
          </div>
        </form>
      </dialog>
    </>
  );

  return (
    <form
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
                field.state.meta.isTouched && field.state.meta.errors.length
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
                field.state.meta.isTouched && field.state.meta.errors.length
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
                field.state.meta.isTouched && field.state.meta.errors.length
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
    </form>
  );
}
