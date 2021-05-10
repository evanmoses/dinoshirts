import { HeaderWrapper } from "./header.styles";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

const Header = () => {
  return (
    <HeaderWrapper>//{isMobile ? <DesktopNav /> : <MobileNav />}</HeaderWrapper>
  );
};

export default Header;
