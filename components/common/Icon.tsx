import type { IconType } from "react-icons";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronDown,
  FaChevronRight,
  FaArrowRight,
  FaBars,
  FaTimes,
  FaCheck,
  FaMapMarkerAlt,
  FaClock,
  FaBuilding,
  FaPlay,
  FaSearchPlus,
  FaChevronLeft,
  FaPaperPlane,
  FaCheckCircle,
  FaClipboardList,
  FaSearch,
  FaFileInvoiceDollar,
  FaTools,
  FaHeadset,
} from "react-icons/fa";
import { FaXTwitter, FaRegHandshake } from "react-icons/fa6";
import {
  TbHomeShield,
  TbUsersGroup,
  TbSettingsCog,
  TbCalendarEvent,
  TbShieldCheck,
  TbUsers,
  TbClock,
  TbHomeFilled,
  TbChevronRight,
} from "react-icons/tb";
import { LuHandHelping } from "react-icons/lu";
import { GiAutoRepair } from "react-icons/gi";

const icons: Record<string, IconType> = {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaXTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronDown,
  FaChevronRight,
  FaArrowRight,
  FaBars,
  FaTimes,
  FaCheck,
  FaMapMarkerAlt,
  FaClock,
  FaBuilding,
  FaPlay,
  FaSearchPlus,
  FaChevronLeft,
  FaPaperPlane,
  FaCheckCircle,
  FaClipboardList,
  FaSearch,
  FaFileInvoiceDollar,
  FaTools,
  FaHeadset,
  FaRegHandshake,
  TbHomeShield,
  TbUsersGroup,
  TbSettingsCog,
  TbCalendarEvent,
  TbShieldCheck,
  TbUsers,
  TbClock,
  TbHomeFilled,
  TbChevronRight,
  LuHandHelping,
  GiAutoRepair,
};

type IconProps = {
  name: string;
  size?: number;
  className?: string;
};

export default function Icon({ name, size = 16, className }: IconProps) {
  const Component = icons[name];
  if (!Component) return null;
  return <Component size={size} className={className} aria-hidden="true" />;
}
