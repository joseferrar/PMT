import DashboardIcon from "@mui/icons-material/Dashboard";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import GroupTwoToneIcon from "@mui/icons-material/GroupTwoTone";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SmsIcon from "@mui/icons-material/Sms";
import SettingsIcon from "@mui/icons-material/Settings";

const userRoutes = [
  {
    id: 1,
    name: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon width={20} height={20} />,
  },
  {
    id: 2,
    name: "Products",
    path: "/projects",
    icon: <FolderOpenOutlinedIcon width={20} height={20} />,
  },
];

const report = [
  {
    id: 1,
    name: "Tasks",
    path: "shops",
    icon: <AssignmentOutlinedIcon width={20} height={20} />,
  },
  {
    id: 2,
    name: "Clients",
    path: "shops",
    icon: <GroupTwoToneIcon width={20} height={20} />,
  },
  {
    id: 3,
    name: "Profit",
    path: "shops",
    icon: <AttachMoneyOutlinedIcon width={20} height={20} />,
  },
  {
    id: 4,
    name: "Resource",
    path: "/resource",
    icon: <CodeOutlinedIcon width={20} height={20} />,
  },
  {
    id: 5,
    name: "Expenses",
    path: "shops",
    icon: <CodeOutlinedIcon width={20} height={20} />,
  },
];

const personal = [
  {
    id: 1,
    name: "Calender",
    path: "shops",
    icon: <CalendarMonthOutlinedIcon width={20} height={20} />,
  },
  {
    id: 2,
    name: "Messsages",
    path: "shops",
    icon: <SmsIcon width={20} height={20} />,
  },
  {
    id: 3,
    name: "Settings",
    path: "shops",
    icon: <SettingsIcon width={20} height={20} />,
  },
];
export { userRoutes, report, personal };
