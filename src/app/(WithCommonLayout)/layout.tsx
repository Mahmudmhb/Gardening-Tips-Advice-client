export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col bg-[#18191a]  ">
      <main>{children}</main>
    </div>
  );
}
