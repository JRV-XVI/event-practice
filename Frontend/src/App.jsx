import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '/src/View/HomePage.jsx';

function App() {

  return (
    <Router>
      <Routes>

        <Route path='/' element={<HomePage />} />

      </Routes>
    </Router>
  )
}

export default App
