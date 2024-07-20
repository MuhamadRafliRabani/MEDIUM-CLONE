import MyAvatar from "@/MYCOMPONENT/avatar/MyAvatar";
import Card_profil from "@/MYCOMPONENT/card profil";
import MyToolTip from "@/MYCOMPONENT/MyToolTip/MyToolTip";

const StaffMedium = () => {
  return (
    <div className="w-full space-y-2">
      <h1 className="text-sm font-light flex justify-start items-center gap-2">
        <MyToolTip
          Content={<Card_profil />}
          Trigger={
            <MyAvatar size="size-6" img="https://github.com/shadcn.png" />
          }
        />{" "}
        <MyToolTip
          Content={<Card_profil />}
          Trigger={<p className="hover:underline">M.Rafli Rabani</p>}
        />
        <p>from midgard</p>
      </h1>
      <p className="text-base font-bold ">
        Have Vegetables, Will Travel: A History of Vegetarian Vacations and
        Travel
      </p>
    </div>
  );
};

export default StaffMedium;
