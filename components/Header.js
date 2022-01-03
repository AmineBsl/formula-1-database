import { HomeIcon } from "@heroicons/react/solid"
import Link from "next/link"

function Header() {
    return (
        <div className="flex justify-center items-center w-full bg-gray-800 shadow-md">
           <Link href='/'><HomeIcon className="w-10 h-10 hover:cursor-pointer"/></Link>
        </div>
    )
}

export default Header
