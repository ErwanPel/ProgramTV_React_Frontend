import Image from "../Main/Image";
import logo from "../assets/img/logo.jpg";
import Channel from "./Channel";

const Header = () => {
  return (
    <header>
      <div>
        <Image src={logo} />
        <Channel channel="M6" />
      </div>
    </header>
  );
};

export default Header;
