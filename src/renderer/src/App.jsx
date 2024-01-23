import Versions from './components/Versions'
import icons from './assets/icons.svg'
import Form from './components/Form'


function App() {
  return ( <div>
  <h1>Helo word</h1>
        <Form label1={'Graduação'} label2={'Ano'} textButton={'Salvar'} placeholder1= {'engearia'} placeholder2={'2021'}></Form>
        <Form label1={'Nome'} label2={'idade'} textButton={'Salvar'} placeholder1= {'thiago'} placeholder2={'22'}></Form>
        </div>
  )
}


export default App
