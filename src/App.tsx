import React, {FunctionComponent, useState} from "react";
import './App.css';
import template from './template.png'
var domtoimage: any = require('dom-to-image');

const App: FunctionComponent<{}> = () => {

  const [state, setState] = useState({
    name: 'Atelier du numérique',
    title: 'Développement web',
    contact1: 'contact@atelierdunumerique.io',
    contact2: 'atelierdunumerique.io'
  })

  const updateField = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({...state, [field]: e.target.value})
  }

  const printBAT = () => {
      window.print()
  }

  return (
    <div className="App print:bg-white bg-gray-100 h-screen pt-20 print:pt-0">
      <div id="template" >
        <div className="relative mx-auto bg-cover rounded-md shadow-lg text-center" style={{'width':'638px', 'height':'420px', 'backgroundImage': `url(${template})` }}>
            <div className="text-yellow-300 w-full absolute text-2xl font-thin tracking-wide" style={{top: '150px'}}> {state.name} </div>
            <div className="text-white w-full absolute text-sm italic" style={{top: '185px'}}> {state.title} </div>
            <div className="text-white w-full absolute text-sm" style={{top: '235px'}}> {state.contact1} </div>
            <div className="text-white w-full absolute text-sm" style={{top: '255px'}}>  {state.contact2} </div>
        </div>
      </div>

      <div className="grid place-items-center mx-auto mt-20 print:hidden">
      <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
        <form className="mt-6">
          <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase"> Nom </label>
          <input onChange={updateField('name')} value={state.name} className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
          <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Titre</label>
          <input onChange={updateField('title')} value={state.title} className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
          <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Contact 1</label>
          <input onChange={updateField('contact1')} value={state.contact1} className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
          <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Contact 2</label>
          <input onChange={updateField('contact2')} value={state.contact2} className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
        </form>
      </div>
      <div>
        <button onClick={printBAT} className="mt-10 mr-5 bg-gray-500 text-white border border-blue-700 font-bold py-2 px-6 rounded-lg">
          Valider
        </button>
      </div>
    </div>
    </div>
  );
}

export default App;
