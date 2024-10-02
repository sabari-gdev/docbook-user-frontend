import { FC } from "react";
import { Button, Flex, NavLink, Text } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";

import "./Header.css";

const Header: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (route: string): boolean => {
    return location.pathname === route;
  };

  const navMenuItems = [
    {
      title: "Home",
      route: "/home",
    },
    {
      title: "Doctors",
      route: "/doctors",
    },
    {
      title: "About",
      route: "/about",
    },
    {
      title: "Contact",
      route: "/contact",
    },
  ];

  return (
    <Flex align={"center"} justify={"space-between"}>
      <Flex align={"center"} gap={12}>
        <Text className="header-logo-title">DocBook</Text>
      </Flex>

      <Flex align={"center"} gap={24}>
        {navMenuItems.map((item) => (
          <NavLink
            classNames={{
              label: isActive(item.route)
                ? "header-nav-link-active"
                : "header-nav-link",
            }}
            key={item.route}
            label={item.title}
            onClick={() => {
              navigate(item.route);
            }}
          />
        ))}
      </Flex>

      <Button className="header-create-account-button">Create Account</Button>
    </Flex>
  );
};

export default Header;
