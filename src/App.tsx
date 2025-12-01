import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Blog from './pages/Blog'
import Faqs from './pages/Faqs'
import Contact from './pages/Contact'
import MyAccountCustomer from './pages/MyAccountCustomer'
import MyAccountStaff from './pages/MyAccountStaff'
import LoginCustomer from './pages/LoginCustomer'
import LoginStaff from './pages/LoginStaff'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/account/customer" element={<MyAccountCustomer />} />
      <Route path="/account/staff" element={<MyAccountStaff />} />
      <Route path="/login/customer" element={<LoginCustomer />} />
      <Route path="/login/staff" element={<LoginStaff />} />
    </Routes>
  )
}

export default App