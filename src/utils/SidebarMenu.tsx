import { ReactComponent as Piggy } from "../assets/svgs/piggy-bank 1.svg";
import { ReactComponent as Sack } from "../assets/svgs/sack 1.svg";
import { ReactComponent as Scroll } from "../assets/svgs/scroll 1.svg";
import { ReactComponent as Logout } from "../assets/svgs/sign-out 1.svg";
import { ReactComponent as Sliders } from "../assets/svgs/sliders-h 1.svg";
import { ReactComponent as Tire } from "../assets/svgs/tire 1.svg";
import { ReactComponent as UserCheck } from "../assets/svgs/user-check 1.svg";
import { ReactComponent as UserCog } from "../assets/svgs/user-cog 1.svg";
import { ReactComponent as UserTimes } from "../assets/svgs/user-times 1.svg";
import { ReactComponent as Users } from "../assets/svgs/users 1.svg";
import { ReactComponent as UsersFriends } from "../assets/svgs/user-friends 1.svg";
import { ReactComponent as PercentBadge } from "../assets/svgs/badge-percent 1.svg";
import { ReactComponent as BriefCase } from "../assets/svgs/briefcase 1.svg";
import { ReactComponent as Chart } from "../assets/svgs/chart-bar 2.svg";
import { ReactComponent as Clipboard } from "../assets/svgs/clipboard-list 1.svg";
import { ReactComponent as Coins } from "../assets/svgs/coins-solid 1.svg";
import { ReactComponent as Galaxy } from "../assets/svgs/galaxy 1.svg";
import { ReactComponent as Group } from "../assets/svgs/Group 104.svg";
import { ReactComponent as HandShake } from "../assets/svgs/handshake-regular 1.svg";
import { ReactComponent as Home } from "../assets/svgs/home 1.svg";
import { ReactComponent as Icon } from "../assets/svgs/icon.svg";
import { ReactComponent as Bank } from "../assets/svgs/np_bank_148501_000000 1.svg";

export const menuList = [
  {
    category: "CUSTOMERS",
    menu: [
      {
        title: "Users",
        link: "/users",
        icon: <UsersFriends />,
      },
      {
        title: "Guarantors",
        icon: <Users />,
      },
      {
        title: "Loans",
        icon: <Sack />,
      },
      {
        title: "Decision Models",
        icon: <HandShake />,
      },
      {
        title: "Savings",
        icon: <Piggy />,
      },
      {
        title: "Loan Requests",
        icon: <Group />,
      },
      {
        title: "Whitelist",
        icon: <UserCheck />,
      },
      {
        title: "Karma",
        icon: <UserTimes />,
      },
    ],
  },
  {
    category: "BUSINESSES",
    menu: [
      {
        title: "Organization",
        icon: <BriefCase />,
      },
      {
        title: "Loan Products",
        icon: <Group />,
      },
      {
        title: "Savings Products",
        icon: <Bank />,
      },
      {
        title: "Fees and Charges",
        icon: <Coins />,
      },
      {
        title: "Transactions",
        icon: <Icon />,
      },
      {
        title: "Services",
        icon: <Galaxy />,
      },
      {
        title: "Service Account",
        icon: <UserCog />,
      },
      {
        title: "Settlements",
        icon: <Scroll />,
      },
      {
        title: "Reports",
        icon: <Chart />,
      },
    ],
  },
  {
    category: "SETTINGS",
    menu: [
      {
        title: "Preferences",
        icon: <Sliders />,
      },
      {
        title: "Fees and Pricing",
        icon: <PercentBadge />,
      },
      {
        title: "Audit Logs",
        icon: <Clipboard />,
      },
      {
        title: "Systems Messages",
        icon: <Tire />,
      },
    ],
  },
  {
    category: "LOGOUT",
    menu: [{ title: "Logout", icon: <Logout /> }],
  },
];
