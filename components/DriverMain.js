import Image from "next/image"
function DriverMain(props) {
    const urlImg = props.urlImg
    const driver = props.driver
    return (
        <div className="flex mt-2 text-white">
            <div className="flex border rounded-md shadow-md border-black w-full py-5 mx-5 bg-zinc-800">
                <Image src={urlImg} width={200} height={200} objectFit="contain"/>
                <div className="">
                    <p>Name : {driver.givenName} {driver.familyName}</p>
                    <p>Nationality : {driver.nationality}</p>
                    <p>Date of birth : {driver.dateOfBirth}</p>
                </div>
            </div>


            <div className="flex w-full mx-5 bg-white">
                
            </div>
        </div>
    )
}

export default DriverMain
