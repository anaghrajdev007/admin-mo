import {useState} from "react"
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
      <h1>Dashboard</h1>
    </div>
  );
}

export default App;
