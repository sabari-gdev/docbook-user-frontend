import { FC } from "react";
import { Divider, Flex } from "@mantine/core";
import { Outlet } from "react-router-dom";

import Header from "@components/common/Header/Header";

import "./Layout.css";

const Layout: FC = () => {
  return (
    <Flex className="app-layout-container" direction={"column"} gap={20}>
      <Flex direction={"column"} gap={16}>
        <Header />
        <Divider />
      </Flex>

      <Outlet />
    </Flex>
  );
};

export default Layout;
