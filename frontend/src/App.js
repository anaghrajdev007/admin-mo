import {useState} from "react"
import Navbar from "./components/navbar/Navbar";
const App = () => {
  const[sidebarOpne, setSidebarOpen] = useState(false);

  const openSidebar =() => {
    setSidebarOpen(true);
  }

  const closeSidebar = ()=>{
    setSidebarOpen(false);
  }
  return (
    <div className = "container">
      <Navbar sidebarOpen={sidebarOpne} openSidebar={openSidebar}/>
      <h1>Dashboard</h1>
    </div>
  );
}

export default App;
