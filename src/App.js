import { useEffect } from 'react';
import './App.css';



function App() {
  useEffect( () => {
    tg.ready(); // приложение проинициализировалось и его можно отрисовывать
  }, [])
  const onClose = () => {
    tg.close();
  }
  return (
    <div className="App">
      Work
      
    </div>
  );
}

export default App;

