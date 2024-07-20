import Link from "next/link";
import StaffMedium from "./Staff";

const StaffContainer = () => {
  return (
    <div className="font-bold text-lg w-full space-y-4">
      <h1>Staff Picks</h1>
      <StaffMedium />
      <StaffMedium />
      <StaffMedium />
      <Link href={"/"} className="text-green-600 text-sm font-normal mt-8">
        See the full list
      </Link>
    </div>
  );
};

export default StaffContainer;
