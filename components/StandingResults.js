function StandingResults(props) {
    const driverResults = props.driverResults

     function getRowColor(position){
        if(position === '1'){
            return 'text-yellow-400'
        }else if(position === '2'){
            return 'text-slate-500'
        }else if(position === '3'){
            return 'text-amber-800'
        }
        return 'text-white'
    }

    return (
        <div className="overflow-auto scrollbar-hide">
            <table className="table-fixed w-full text-center">
                <tbody>
                    {driverResults.map(({ DriverStandings, season }) =>
                        <tr key={season} className={getRowColor(DriverStandings[0].position) + " border-b border-gray-600"}>
                            <td className="p-4">{season}</td>
                            <td>{DriverStandings[0].position}</td>
                            <td>{DriverStandings[0].points}</td>
                            <td>{DriverStandings[0].wins}</td>
                            <td>{DriverStandings[0].Constructors.map(c => <p key={c.constructorId}>{c.name}</p>)}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default StandingResults
