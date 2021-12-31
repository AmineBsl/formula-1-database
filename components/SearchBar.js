import SearchResults from '../components/SearchResults';
import {SearchIcon} from '@heroicons/react/solid'
import { useState } from 'react';


function SearchBar(props) {
    const drivers = props.searchableDrivers;
    const constructors = props.searchableConstructors;
    const [results, autoCompleteResults] = useState([])
    const [input, setInput] = useState('')

    function handleInput(e){
        setInput(e.target.value)
        let inputCheck = e.target.value.toLowerCase();
        console.log(inputCheck)
        if(inputCheck.length > 2){
            let possibleDrivers = drivers.filter(({givenName, familyName}) => givenName.toLowerCase().startsWith(inputCheck) || familyName.toLowerCase().startsWith(inputCheck) || 
            inputCheck.includes(givenName.toLowerCase()) || inputCheck.includes(familyName.toLowerCase()))
            let possibleConstructors = constructors.filter(({name}) => name.toLowerCase().startsWith(inputCheck) || inputCheck.includes(name.toLowerCase()))
            let possibleResults = possibleDrivers.concat(possibleConstructors);
            autoCompleteResults(possibleResults)
        }else(
            autoCompleteResults([])
        )
    }

    return (
        <main className="flex flex-col mt-44 items-center flex-grow">
        <h1 className="text-6xl font-bold">
          Welcome to the{' '}
          <a className="text-red-600">
            Formula 1 
          </a>
          {' '}Database
        </h1>
        <div className='flex bg-gray-200 rounded-md border-2 border-gray-500 mt-20 px-5 py-3 focus-within:border-black justify-center w-full sm:max-w-xl lg:max-w-2xl'>
            <SearchIcon className='h-10 w-5'/>
            <input className='flex-grow focus:outline-none bg-gray-200 ml-5' type='text' placeholder='Rechercher un pilote ou une écurie' onChange={handleInput} value={input}></input>
        </div>
        <SearchResults results={results} />
      </main>
    )
}

export default SearchBar
