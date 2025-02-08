import { Star } from "lucide-react";

type BlockquoteMember = {
  member_only: boolean;
};

const BlockquoteMember = ({ member_only = false }: BlockquoteMember) => {
  return member_only ? (
    <blockquote className="noto-font flex items-center gap-2 text-[0.9em] text-black/60">
      <Star className="size-5 fill-yellow-400 stroke-none" />
      <span>Member-only story</span>
    </blockquote>
  ) : null;
};

export default BlockquoteMember;
