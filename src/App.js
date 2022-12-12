
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Router/Router';

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
