import Image from "next/image"
import StandingHeader from "./StandingHeader"
import StandingResults from "./StandingResults"

function DriverMain(props) {
    const urlImg = props.urlImg
    const driverResults = props.driverResults
    const driverInfo = driverResults[0].DriverStandings[0].Driver
    const driverResultTitles = ['Year', 'Finishing position', 'Points', 'Wins', 'Constructors']



    return (
        <div className="flex flex-col lg:flex-row mt-2 text-white">
            <div className="flex border rounded-md shadow-md border-black w-full py-5 mx-5 bg-gray-900">
                <Image src={urlImg} width={200} height={200} objectFit="contain"/>
                <div className="">
                    <p>Name : {driverInfo.givenName} {driverInfo.familyName}</p>
                    <p>Nationality : {driverInfo.nationality}</p>
                    <p>Date of birth : {driverInfo.dateOfBirth}</p>
                </div>
            </div>
            <div className="flex flex-col border rounded-md shadow-md w-full mx-5 bg-gray-900 max-h-64">
                <StandingHeader titles={driverResultTitles}/>
                <StandingResults driverResults={driverResults}/>
            </div>
            
        </div>
    )
}

export default DriverMain
