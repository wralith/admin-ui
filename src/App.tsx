import { Routes, Route } from 'react-router-dom'
import GlobalLayout from './components/UI/GlobalLayout'
import LandingView from './views/LandingView'
import LoginView from './views/LoginView'
import UsersView from './views/UsersView'

function App() {
  return (
    <GlobalLayout>
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/users" element={<UsersView />} />
      </Routes>
    </GlobalLayout>
  )
}

export default App
