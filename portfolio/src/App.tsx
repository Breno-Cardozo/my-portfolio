import { useState } from 'react';
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer';
import { Home } from './pages/Home/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
