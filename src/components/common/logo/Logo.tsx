import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import type { NavbarType } from "@/types/Nav";
// import useGetWebsiteSettings from "@/features/settings/api/useGetWebsiteSettings";
// import Skeleton from "../loader/skeltons/Skeleton";

const Logo: React.FC<NavbarType> = ({ logo, dark = false }) => {
  const { pathname } = useLocation();
  const isAuthPages = pathname.startsWith("/auth");
  //   const { data, isLoading } = useGetWebsiteSettings();
  return (
    <Link to="/" className="shrink-0">
      <img
        alt="Abazeer logo"
        src={logo || "/assets/logo.svg"}
        className={`${
          isAuthPages ? "h-[100px]" : "h-[44px]"
        } w-auto object-contain`}
      />
    </Link>
  );
};

export default Logo;
