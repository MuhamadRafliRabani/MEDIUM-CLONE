import Link from "next/link"
import StaffMedium from "./staff"

const StaffContainer = () => {
  return (
    <div className="font-bold text-lg sidebar w-full">
        <h1>Staff Picks</h1>
        <StaffMedium />
        <StaffMedium />
        <StaffMedium />
        <Link href={"/"} className="text-green-400 text-base font-normal">See the full list</Link>
    </div>
  )
}

export default StaffContainer