import { Routes, Route, useLocation } from 'react-router-dom'
import { Homepage } from './components/Homepage'

const App = () => {
  const location = useLocation()
  
  return (
    <section className="App" data-testid="App">
      <Routes location={location}>
        <Route exact path="/" 
          element={<Homepage />} />
      </Routes>
    </section>
  );
}

export default App;