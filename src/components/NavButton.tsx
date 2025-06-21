import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


type NavButtonProps = {
  path: string,
  children: string,
  currentPath?: string 
}


export default function NavButton({ path, children }: NavButtonProps): React.ReactNode {
  const currentPath = useLocation().pathname; 
  
  return (
    <Link to={path} className={path == currentPath ? "text-blue-400" : ""}>{children}</Link>
  )
}