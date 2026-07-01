import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

type NavButtonProps = {
  path: string;
  children: string | React.ReactNode;
  currentPath?: string;
};

export default function NavButton({
  path,
  children,
}: NavButtonProps): React.ReactNode {
  const currentPath = useLocation().pathname;

  return (
    <Link
      to={path}
      className={
        path == currentPath
          ? "text-blue-400 font-semibold"
          : "hover:text-blue-300"
      }
    >
      {children}
    </Link>
  );
}
