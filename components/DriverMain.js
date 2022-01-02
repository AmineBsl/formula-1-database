import Image from "next/image"
import StandingHeader from "./StandingHeader"
import StandingResults from "./StandingResults"
import { GiLaurelsTrophy } from 'react-icons/gi'

function DriverMain(props) {
    const urlImg = props.urlImg
    const driverResults = props.driverResults
    const driverInfo = driverResults[0].DriverStandings[0].Driver
    const driverResultTitles = ['Year', 'Finishing position', 'Points', 'Wins', 'Constructors']
    const podiumsArray = props.podiumsArray



    return (
        <div className="flex flex-col lg:flex-row mt-2 text-white max-w-screen">
            <div className="flex rounded-md shadow-md shadow-black w-full py-5 mx-5 bg-gray-900 max-h-72">
                <div className="relative hidden lg:inline-flex w-1/4 mx-5">
                    <Image className="" src={urlImg} layout="fill" objectFit="contain" priority={true}/>
                </div>
                <div className="flex flex-col items-center">
                    <div className="">
                        <p>Name : {driverInfo.givenName} {driverInfo.familyName}</p>
                        <p>Nationality : {driverInfo.nationality}</p>
                        <p>Date of birth : {driverInfo.dateOfBirth}</p>
                    </div>
                    <div className="flex mt-2 overflow-hidden justify-around h-full">
                        <div className="flex flex-col items-center">
                            <GiLaurelsTrophy color="gold" size="100%" />
                            <p>{podiumsArray[0]}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <GiLaurelsTrophy color="silver" size="100%" />
                            <p>{podiumsArray[1]}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <GiLaurelsTrophy color="#CD7F32" size="100%" />
                            <p>{podiumsArray[2]}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col rounded-md shadow-md shadow-black w-full mx-5 bg-gray-900 max-h-72">
                <StandingHeader titles={driverResultTitles}/>
                <StandingResults driverResults={driverResults}/>
            </div> 
        </div>
    )
}

export default DriverMain
