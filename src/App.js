import './App.css';
import { useGlobalContext } from './context';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Sidebar from './Components/Sidebar';
import Submenu from './Components/Submenu';

function App() {
  const data = useGlobalContext();
  console.log(data);
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </div>
  );
}

export default App;
