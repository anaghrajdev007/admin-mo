import {useState} from "react"
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
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
      <Sidebar sidebarOpen={sidebarOpne} closeSidebad={closeSidebar}/>
    </div>
  );
}

export default App;
