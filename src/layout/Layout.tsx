import { FC } from "react";

import { Divider, Flex } from "@mantine/core";
import { Outlet } from "react-router-dom";

import Header from "@components/common/Header/Header";
import Footer from "@components/common/Footer/Footer";

import "./Layout.css";

const Layout: FC = () => {
  return (
    <Flex className="app-layout-container" direction={"column"} gap={20}>
      <Flex direction={"column"} gap={16}>
        <Header />
        <Divider />
      </Flex>

      <Outlet />

      <Footer />
    </Flex>
  );
};

export default Layout;
