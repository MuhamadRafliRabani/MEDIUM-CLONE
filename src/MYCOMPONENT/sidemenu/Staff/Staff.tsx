import MyAvatar from "@/MYCOMPONENT/avatar/MyAvatar";
import Card_profil from "@/MYCOMPONENT/card profil";
import MyToolTip from "@/MYCOMPONENT/MyToolTip/MyToolTip";

const StaffMedium = () => {
  return (
    <div className="w-full space-y-2">
      <h1 className="flex items-center justify-start gap-2 text-sm font-light">
        <MyToolTip
          Content={
            <Card_profil
              author_name="rabani"
              img="https://github.com/shadcn.png"
            />
          }
          Trigger={
            <MyAvatar size="size-6" img="https://github.com/shadcn.png" />
          }
        />{" "}
        <MyToolTip
          Content={
            <Card_profil
              author_name="rabani"
              img="https://github.com/shadcn.png"
            />
          }
          Trigger={<p className="hover:underline">M.Rafli Rabani</p>}
        />
        <p>from midgard</p>
      </h1>
      <p className="text-base font-bold">
        Have Vegetables, Will Travel: A History of Vegetarian Vacations and
        Travel
      </p>
    </div>
  );
};

export default StaffMedium;
