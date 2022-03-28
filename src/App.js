import './App.css';
import MyLineChart from './components/MyLineChart/MyLineChart';
import ReactSpring from './components/ReactSpring/ReactSpring';
import SpecialChart from './components/SpecialChart/SpecialChart';

function App() {
  return (
    <div className="App">
      <ReactSpring></ReactSpring>
      <MyLineChart></MyLineChart>
      <SpecialChart></SpecialChart>
    </div>
  );
}

export default App;
