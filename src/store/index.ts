import { create } from 'zustand';

export type Server = {
  id: number;
  name: string;
  ip: string;
  port: number;
};

type Store = {
  Directory: {
    serversList: Server[];
    addServer: (server: Server) => void;
    removeServer: (id: number) => void;
  };
  Notes: { [clave: string]: unknown };
  Network: { [clave: string]: unknown };
  Settings: { [clave: string]: unknown };
};

export const useStore = create<Store>((set) => ({
  Directory: {
    serversList: [
      { id: 1, name: 'Plex Server', ip: '192.168.10.100', port: 8006 },
      { id: 2, name: 'NAS', ip: '192.168.1.101', port: 5000 },
      { id: 3, name: 'Home Assistant', ip: '192.168.1.102', port: 8123 },
    ],
    addServer: (server: Server) => {
      set((state) => ({
        ...state,
        Directory: {
          ...state.Directory,
          serversList: [...state.Directory.serversList, server],
        },
      }));
      console.log('New state', useStore.getState());
    },
    removeServer: (id: number) => {
      const newSetversList = { ...useStore.getState().Directory.serversList };
      delete newSetversList[id];
      set((state) => ({
        ...state,
        Directory: {
          ...state.Directory,
          serversList: newSetversList,
        },
      }));
    },
  },
  Notes: {},
  Network: {},
  Settings: {},
}));
