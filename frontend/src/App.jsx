import { useState } from "react";
import Sidebar from "./components/Sidebar";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="md:grid md:grid-cols-5 h-screen bg-dark-gray">
      <Sidebar />
      <div className="col-span-4 text-4xl p-6">Home Page</div>
    </div>
  );
}

export default App;
