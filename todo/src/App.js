import './index.css';

import ProjectToDoContextProvider from './context/project/ProjectToDoContextProvider';
import Home from "./components/pages/Home";

function App() {
  return (
    <>
    <ProjectToDoContextProvider>
      <div className="container">
        <Home />
      </div>
    </ProjectToDoContextProvider>
    </>
  );
}

export default App;