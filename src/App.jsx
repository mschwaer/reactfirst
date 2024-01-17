import Header from './components/Header'
import ButtonList from './components/ButtonList'
import './App.css'

function App() {

  const eliste = ['Eins','Zwei','Drei']; 

  return (
    <>
      <Header info='Dies die Ueberschrift'/>
      <ButtonList liste={eliste}/>
      <ButtonList liste={eliste}/>
    </>
  )
}

export default App
