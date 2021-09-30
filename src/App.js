import './App.css';
import AppRouter from './approuter/AppRouter';
import {useState} from 'react';
import { MainContext } from './context/MainContext';


function App() {
  const [isLogin, setIsLogin] = useState(false);

  const [cardInfo, setCardInfo] = useState();
  return (
    <div className="App">
      <MainContext.Provider value={{isLogin, setIsLogin, cardInfo, setCardInfo}}>
      <AppRouter />
      </MainContext.Provider>

    </div>
  );
}

export default App;
