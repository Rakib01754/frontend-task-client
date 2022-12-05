import { Toaster } from 'react-hot-toast';
import './App.css';
import Routes from './Routes/Routes';

function App() {
  return (
    <div className="">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Routes></Routes>
    </div>
  );
}

export default App;
