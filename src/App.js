import './App.css';

import Cards from './components/Cards';

function App() {
  return (
    <div className="main">
      <h1 className="main__title">Ты сегодня покормил кота?</h1>
      <Cards />
    </div>
  );
}

export default App;
