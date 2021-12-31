import Link from "next/link"

function SearchResults(props) {
    const searchData = props.results
    console.log(searchData)
    return (
        <ul className="flex flex-col w-full sm:max-w-xl lg:max-w-2xl rounded-md bg-gray-200 divide-y divide-gray-700 border border-gray-800">
            {searchData.map(x => 
                <Link href={x.driverId ? `/driver/${x.driverId}` : `/constructor/${x.constructorId}`}>
                    <li className='text-lg cursor-pointer hover:font-bold' key={ (x.driverId || x.constructorId) +  Object.keys(x)[0]}> 
                        <div className="ml-5 float-left ">{x.driverId ? `${x.givenName} ${x.familyName}` : `${x.name}`}</div>
                        <div className="mr-5 float-right text-gray-700 font-normal">{x.driverId ? 'Pilote' : 'Ecurie'}</div>
                    </li>
                </Link>
            )}
        </ul>
    )
}

export default SearchResults
