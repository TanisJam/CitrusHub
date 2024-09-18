import { Switch, Route } from 'wouter';

import { Dashboard } from './Components/Organisms/Dashboard';
import { TopBar } from './Components/Molecules/TopBar';
import { ServerList } from './Components/Molecules/ServerList';
import { Notes } from './Components/Molecules/Notes';
import { NetworkStats } from './Components/Molecules/NetworkStats';
import { Drawer } from './Components/Organisms/Drawer';

import './App.css';

function App() {
  return (
    <div className="App container mx-auto">
      <Drawer>
        <Switch>
          <Route path="/" component={Dashboard} />
          <Route path="/directory" component={ServerList} />
          <Route path="/notes" component={Notes} />
          <Route path="/stats" component={NetworkStats} />
          <Route path="/network" component={TopBar} />
          <Route
            path="/settings"
            component={() => (
              <div className="w-full min-w-full">
                <h3>Settings</h3>
              </div>
            )}
          />
        </Switch>
      </Drawer>
    </div>
  );
}

export default App;
