import HomeIcon from "@mui/icons-material/Home";
import BoltIcon from "@mui/icons-material/Bolt";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import HistoryIcon from "@mui/icons-material/History";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SensorsIcon from "@mui/icons-material/Sensors";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SmsFailedIcon from "@mui/icons-material/SmsFailed";
export const Menu = [
  { name: "Ana Sayfa", icon: <HomeIcon /> , link:"/"},
  { name: "Shorts", icon: <BoltIcon /> , link:"Shorts"},
  { name: "Abonelikler", icon: <SubscriptionsIcon />  ,link:"#"},
  { name: "Kitaplik", icon: <SlideshowIcon />  ,link:"#"},
  { name: "Gecmis", icon: <HistoryIcon /> , link:"#"},
  {
    name: "Videoları beğenmek, yorum yapmak ve abone olmak için oturum açın.",
    icon: null, link:"#"
  },
  { name: "Kesfet", icon: null,link:"Kesfet" },
  { name: "Trendler", icon: <LocalFireDepartmentIcon />  ,link:"Trendler"},
  { name: "Muzik", icon: <MusicNoteIcon /> , link:"Muzik"},
  { name: "Canli", icon: <SensorsIcon />  ,link:"Canli"},
  { name: "Oyun", icon: <VideogameAssetIcon /> , link:"Oyun"},
  { name: "Spor", icon: <EmojiEventsIcon /> , link:"Spor"},
  { name: "Kanallara göz at", icon: <AddCircleOutlineIcon /> ,link:"#" },
  { name: "YouTube'dan daha fazla icerik", icon: null ,link:"#" },
  { name: "YouTube Premium", icon: <YouTubeIcon /> , link:"YouTube Premium"},
  { name: "YouTube Muzik", icon: <PlayCircleIcon /> , link:"YouTube Muzik"},
  { name: "YouTube Çocuklar", icon: <YouTubeIcon /> ,link:"YouTube Çocuklar" },
  { name: "Ayarlar", icon: <SettingsIcon /> },
  { name: "İcerik bildirme gecmisi", icon: <FlagIcon />  ,link:"#"},
  { name: "Yardim", icon: <HelpOutlineIcon /> },
  { name: "Geri bildirim gönder", icon: <SmsFailedIcon /> ,link:"#" },
  {
    name: "HakkındaBasınTelif hakkıBize ulaşınİçerik ÜreticilerReklam vermeGeliştiriciler ŞartlarGizlilikPolitika ve GüvenlikYouTube Nasıl Çalışıyor?Yeni özellikleri deneyin © 2023 Google LLC",
    icon: null, link:"#"
  },
];
