import { useState, useEffect } from "react"
import RaceResults from "./RaceResults";
import StandingHeader from "./StandingHeader";

const defaultEndpoint = 'https://ergast.com/api/f1/';

function DriverResults(props) {
    const driverResults = props.driverResults
    const driverId = driverResults[0].DriverStandings[0].Driver.driverId
    const seasons = driverResults.map(({ season }) => season)
    const raceResultsHeader = ['Grand prix', 'Finishing positon', 'Starting position', 'Points', 'Status']

    const [selectedSeason, setSelectedSeason] = useState(seasons[0])
    const [raceResults, setRaceResults] = useState(null)

    function handleSeasonChange(e) {
        setSelectedSeason(e.target.value)
    }

    useEffect(async () => {
        await fetch(`${defaultEndpoint}${selectedSeason}/drivers/${driverId}/results.json`).then(res => res.json()).then(data => setRaceResults(data));
    }, [selectedSeason])

    return (
        <div className="flex flex-col max-h-[42vh] lg:max-h-[52vh] m-5 rounded-md shadow-md shadow-black bg-gray-900">
            <div className="grow-0">
                <div className="text-center text-white">
                    <label for="seasons">Choose a season : </label>
                    <select className="bg-gray-500" onChange={handleSeasonChange} name="seasons" id="seasons">
                        {seasons.map((s) => <option value={s}>{s}</option>)}
                    </select>
                </div>
                <StandingHeader titles={raceResultsHeader} />
            </div>
            <RaceResults raceResults={raceResults} />
        </div>
    )
}

export default DriverResults
