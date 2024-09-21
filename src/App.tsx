// import { ServerList } from './Components/Molecules/ServerList';

import './App.css';
import { Navbar } from './Components/Molecules/Navbar';
import { Sidebar } from './Components/Molecules/Sidebar';
import { ServiceCard } from './Components/Molecules/ServiceCard';

const serversMock = [
  {
    name: 'OpnSense One',
    icon: 'Server' as const,
    online: true,
    link: 'https://opnsense.com',
  },
  {
    name: 'OpnSense Two',
    icon: 'Server' as const,
    online: false,
    link: 'https://opnsense.com',
  },
  {
    name: 'Alarm',
    icon: 'AlarmClock' as const,
    online: true,
    link: 'https://opnsense.com',
  },
];

function App() {
  return (
    <div className="flex flex-col h-full container mx-auto bg-main font-jetbrain">
      <Navbar />
      <div className="flex h-full bg-dark">
        <Sidebar className="hidden sm:block h-full " />
        <div className="flex flex-wrap h-min w-auto gap-4 p-4">
          {serversMock.map((server) => (
            <ServiceCard {...server} key={server.name} />
          ))}
          <ServiceCard addNew />
          {/* <ServerList /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
