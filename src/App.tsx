import { Routes, Route } from 'react-router-dom'
import GlobalLayout from './components/UI/GlobalLayout'
import LandingView from './views/LandingView'
import LoginView from './views/LoginView'

function App() {
  return (
    <GlobalLayout>
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route path="/login" element={<LoginView />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </GlobalLayout>
  )
}

export default App
