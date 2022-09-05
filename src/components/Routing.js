import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from "./accessFlow/Welcome"
import Abstain from "./accessFlow/Abstain"
import Choose from "./accessFlow/Choose"
import Taken from "./accessFlow/Taken"


function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/choose" element={<Choose />} />
        <Route path='/abstain' element={<Abstain />} />
        <Route path='/taken' element={<Taken />} />
      </Routes>
    </Router>
  )
}

export default Routing;