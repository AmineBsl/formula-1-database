import StandingHeader from "./StandingHeader"
import StandingResults from "./StandingResults"
import DriverCard from "./DriverCard"

function DriverMain(props) {
    const urlImg = props.urlImg
    const driverResults = props.driverResults
    const driverInfo = driverResults[0].DriverStandings[0].Driver
    const driverResultTitles = ['Year', 'Finishing position', 'Points', 'Wins', 'Constructors']
    const podiumsArray = props.podiumsArray

    return (
        <div className="flex flex-col lg:flex-row mt-2 text-white max-w-screen mx-5">
            <DriverCard driverInfo={driverInfo} podiumsArray={podiumsArray} urlImg={urlImg}/>
            <div className="flex flex-col rounded-md shadow-md shadow-black bg-gray-900 max-h-72 overflow-hidden w-full lg:w-1/2 lg:ml-5 mt-5 lg:mt-0 text-xs lg:text-base">
                <StandingHeader titles={driverResultTitles}/>
                <StandingResults driverResults={driverResults}/>
            </div> 
        </div>
    )
}

export default DriverMain
