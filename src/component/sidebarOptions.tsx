import Link from "next/link";

type LinkItem = {
  href: string;
  label: string;
};

export const SidebarOptions = ({ links }: { links: LinkItem[] }) => {
  return (
    <div className="flex flex-wrap   gap-1">
      {links.map((link) => (
        <>
          <Link
            key={link.href}
            className="text-xl hover:text-slate-400 rounded-md px-3 py-2 hover:bg-slate-200"
            href={link.href}
          >
            {link.label}
          </Link>{" "}
        </>
      ))}
    </div>
  );
};
