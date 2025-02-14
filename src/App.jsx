import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Referral from './Referral'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Referral />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
