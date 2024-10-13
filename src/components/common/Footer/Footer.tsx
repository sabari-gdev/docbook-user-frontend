import { FC } from "react";

import { Divider, Flex, Text } from "@mantine/core";

import "./Footer.css";

const Footer: FC = () => {
  return (
    <Flex direction={"column"} gap={40}>
      <Flex className={"footer-container"} gap={180} justify={"space-between"}>
        <Flex direction={"column"} flex={0.6} gap={16}>
          <Flex align={"center"} gap={12}>
            <Text className="header-logo-title">DocBook</Text>
          </Flex>
          <Flex>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </Flex>
        </Flex>

        <Flex direction={"column"} flex={0.2} gap={16}>
          <Text className="footer-title">Company</Text>

          <Flex direction={"column"} gap={8}>
            <Text>Home</Text>
            <Text>Doctors</Text>
            <Text>About</Text>
            <Text>Contact</Text>
          </Flex>
        </Flex>

        <Flex direction={"column"} flex={0.2} gap={16}>
          <Text className="footer-title">GET IN TOUCH</Text>

          <Flex direction={"column"} gap={8}>
            <Text>+1-212-456-7890</Text>
            <Text>contact.sabari.dev@gmail.com</Text>
          </Flex>
        </Flex>
      </Flex>

      <Divider orientation="horizontal" />

      <Flex align={"center"} justify={"center"}>
        <Text>Copyright © 2024 DocBook - All Rights Reserved</Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
