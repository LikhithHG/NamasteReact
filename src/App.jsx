//import './App.css'
import Header from "./components/Header"//you can also put extension .js (Header.js) it is one and the same
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Header />
      {/** Header to be intact but the other pages should be below the header */}
      <Outlet /> {/** This is inside the App component and when the createBrowserRouter will be in App this outlet will be updating to the respective children of the element app based on the path */}
    </div>
  );
};

export default App;