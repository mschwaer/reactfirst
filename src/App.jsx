import Header from './components/Header'
import Button from './components/Button'
import ButtonList from './components/ButtonList'
import './App.css'

function App() {

  const eliste = ['Eins','Zwei','Drei']; 

  return (
    <>
      <Header info='Dies die Ueberschrift'/>
      <Button bezeichnung='Dies ist der Button'/>
      <ButtonList liste={eliste}/>
    </>
  )
}

export default App
