import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publichRoutes } from '~/routes';
import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publichRoutes.map((route, index) => {
            const Page = route.component
            return <Route key={index} path={route.path} element={<Page />} />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
