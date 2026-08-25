import { clsx } from "clsx";
import { Avatar } from "./Avatar";
import type { Member } from "@/data/board";

export function MemberGrid({
  members,
  size = "sm",
}: {
  members: Member[];
  size?: "sm" | "lg";
}) {
  const isLg = size === "lg";

  return (
    <div
      className={clsx(
        "grid gap-5",
        isLg
          ? "grid-cols-1"
          : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
      )}
    >
      {members.map((member, i) => (
        <div key={member.name + i} className="text-center">
          <Avatar
            name={member.name}
            image={member.image}
            imagePosition={member.imagePosition}
            seed={i}
          />
          <p
            className={clsx(
              "mt-3 font-semibold text-navy-950",
              isLg ? "text-xl" : "text-sm",
            )}
          >
            {member.name}
          </p>
          <p className={clsx("text-neutral-500", isLg ? "text-base" : "text-xs")}>
            {member.role}
          </p>
          {member.department && (
            <p
              className={clsx(
                "text-neutral-400",
                isLg ? "text-sm" : "text-xs",
              )}
            >
              {member.department}
              {member.grade ? ` · ${member.grade}` : ""}
            </p>
          )}
          {!member.department && member.grade && (
            <p className={clsx("text-neutral-400", isLg ? "text-sm" : "text-xs")}>
              {member.grade}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
