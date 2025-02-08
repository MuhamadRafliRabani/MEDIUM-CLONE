import MyAvatar from "@/components/avatar/MyAvatar";
import Card_profil from "@/components/card profil";
import ToolTips from "@/components/toolTip/MyToolTip";

const StaffMedium = () => {
  return (
    <div className="w-full space-y-2">
      <h1 className="flex items-center gap-2 text-sm font-light">
        <ToolTips
          Content={
            <Card_profil
              user_name="rabani"
              img="https://github.com/shadcn.png"
            />
          }
          Trigger={
            <MyAvatar size="size-6" img="https://github.com/shadcn.png" />
          }
        />
        <ToolTips
          Content={
            <Card_profil
              user_name="rabani"
              img="https://github.com/shadcn.png"
            />
          }
          Trigger={<p className="hover:underline">M.Rafli Rabani</p>}
        />
        <p>from midgard</p>
      </h1>
      <p className="font-bold">
        Have Vegetables, Will Travel: A History of Vegetarian Vacations and
        Travel
      </p>
    </div>
  );
};

export default StaffMedium;
