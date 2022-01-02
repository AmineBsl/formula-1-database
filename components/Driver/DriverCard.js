import { GiLaurelsTrophy } from "react-icons/gi"
import Image from "next/image"

function DriverCard(props) {
    return (
        <div className="flex rounded-md shadow-md shadow-black bg-gray-900 max-h-72 lg:w-1/2 lg:mr-5 lg:py-5">
            <div className="relative hidden lg:inline-flex w-1/4 mx-5">
                <Image className="" src={props.urlImg} layout="fill" objectFit="contain" />
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-col font-bold items-center">
                    <p>{props.driverInfo.givenName} {props.driverInfo.familyName}</p>
                    <p>{props.driverInfo.nationality}</p>
                    <p>{props.driverInfo.dateOfBirth}</p>
                </div>
                <div className="flex mt-2 overflow-hidden justify-around h-full">
                    <div className="flex flex-col items-center">
                        <GiLaurelsTrophy className="fill-yellow-400" size="100%" />
                        <p>{props.podiumsArray[0]}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <GiLaurelsTrophy className="fill-slate-500" size="100%" />
                        <p>{props.podiumsArray[1]}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <GiLaurelsTrophy className="fill-amber-800" size="100%" />
                        <p>{props.podiumsArray[2]}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DriverCard
