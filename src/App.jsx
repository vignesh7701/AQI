import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import {  Data, Feeds } from './container'
import Live from './container/Live'

function App() {

  return (
    <>
      
      <Header />
      <Routes>
        <Route path="/" element={<Live />} />
        <Route path="/data" element={<Data />} />
        <Route path="/feeds" element={<Feeds />} />
      </Routes>
    </>
  )
}

export default App
