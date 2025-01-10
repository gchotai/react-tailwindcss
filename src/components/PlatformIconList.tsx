import {
  FaWindows,
  FaPlaystation,
  FaApple,
  FaXbox,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { SiNintendo } from "react-icons/si";
import { IconContext, IconType } from "react-icons";
import { Platform } from "../hooks/usePlatform";

interface Prop {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Prop) => {
  const iconList: { [key: string]: IconType } = {
    pc: FaWindows,
    android: FaAndroid,
    playstation: FaPlaystation,
    mac: FaApple,
    xbox: FaXbox,
    linux: FaLinux,
    iphone: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  return (
    <>
      <div className="flex flex-row gap-2 text-gray-400 my-1">
        {platforms.map((platform) => (
          <span className="flex-row" key={platform.id}>
            {/* {platform.name} */}
            {iconList[platform.slug] == FaWindows && (
              <FaWindows size={"1.0rem"} />
            )}
            {iconList[platform.slug] == FaAndroid && (
              <FaAndroid size={"1.0rem"} />
            )}
            {iconList[platform.slug] == FaPlaystation && (
              <FaPlaystation size={"1.0rem"} />
            )}
            {iconList[platform.slug] == FaApple && <FaApple size={"1.0rem"} />}
            {iconList[platform.slug] == FaXbox && <FaXbox size={"1.0rem"} />}
            {iconList[platform.slug] == FaLinux && <FaLinux size={"1.0rem"} />}
            {iconList[platform.slug] == MdPhoneIphone && (
              <MdPhoneIphone size={"1.0rem"} />
            )}
            {iconList[platform.slug] == SiNintendo && (
              <SiNintendo size={"1.0rem"} />
            )}
            {iconList[platform.slug] == BsGlobe && <BsGlobe size={"1.0rem"} />}
          </span>
        ))}
      </div>
    </>
  );
};

export default PlatformIconList;
