function RaceResults(props) {
    const raceResults = props.raceResults?.MRData.RaceTable.Races

    function getRowColor(position) {
        if (position === '1') {
            return 'text-yellow-400'
        } else if (position === '2') {
            return 'text-slate-500'
        } else if (position === '3') {
            return 'text-amber-800'
        }
        return 'text-white'
    }

    return (
        <div className="overflow-auto scrollbar-hide">
            <table className="table-fixed text-center w-full">
                <tbody>
                    {raceResults?.map(({ Results, raceName, round, season }) =>
                        <tr key={round} className={getRowColor(Results[0].position) + " border-b border-gray-600"}>
                            <td className="p-4">{`${window.screen.width < 650 ? raceName.replace('Grand Prix', 'GP') : raceName} ${season}`}</td>
                            <td>{Results[0].position}</td>
                            <td>{Results[0].grid}</td>
                            <td>{Results[0].points}</td>
                            <td>{Results[0].status}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default RaceResults
