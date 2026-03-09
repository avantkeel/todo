type SidebarProps = {
  children?: React.ReactNode;
};

export default function Sidebar({ children }: SidebarProps) {
  return (
    <aside>
      {children}
    </aside>
  );
}