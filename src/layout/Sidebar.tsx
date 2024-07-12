import React from "react";
import { IconAngleDown, IconBriefcase, IconHome } from "../utils/icons";
import { menuList } from "../utils/SidebarMenu";
import "./styles/Sidebar.scss";

// Define the type for the menu items
interface MenuItem {
  title: string;
  icon: JSX.Element;
}

// Define the type for the categories in the menu list
interface MenuCategory {
  category: string;
  menu: MenuItem[];
}

// Define the type for the props of the Sidebar component
interface SidebarProps {
  route: string;
  openSidebar: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ route, openSidebar }) => {
  return (
    <div className={`sidebarContainer ${openSidebar ? "open" : ""}`}>
      <button>
        <IconBriefcase />
        <span>Switch Organization</span>
        <IconAngleDown />
      </button>
      <a href="/">
        <IconHome />
        <span>Dashboard</span>
      </a>
      {menuList.map((item: MenuCategory) => (
        <React.Fragment key={item.category}>
          {item.category === "LOGOUT" ? (
            <>
              <div className="linebreaker" />
              <div>
                {item.menu.map((menu: MenuItem) => (
                  <a
                    key={menu.title}
                    href="/"
                    className={`${
                      route.replace("/", "") === menu.title.toLowerCase()
                        ? "active"
                        : ""
                    }`}
                  >
                    {menu.icon}
                    <span>{menu.title}</span>
                  </a>
                ))}
              </div>
            </>
          ) : (
            <div className="category">
              <p>{item.category}</p>
              {item.menu.map((menu: MenuItem) => (
                <a
                  key={menu?.title}
                  href={`${menu?.title === "Logout" ? "/" : "/users"}`}
                  className={`${
                    route.replace("/", "") === menu.title.toLowerCase()
                      ? "active"
                      : ""
                  }`}
                >
                  {menu.icon}
                  <span>{menu.title}</span>
                </a>
              ))}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Sidebar;
