import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const MyProfil = () => {
  return (
    <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" className="rounded-full size-20" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
  )
}

export default MyProfil