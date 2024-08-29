import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SpanishPage from "./routes/SpanishPage";
import EnglishPage from './routes/EnglishPage'

function App() {
  return (
    <>
      <Router>
       
            {/* Routes and other content */}
              <Routes>
                <Route path="/" element={<EnglishPage />} />
                <Route path="/en" element={<EnglishPage />} />
                <Route path="/sp" element={<SpanishPage />} />
              </Routes>

      </Router>
    </>
  );
}

export default App;
