import { FC, ReactNode } from "react";

import { Flex, Text } from "@mantine/core";

interface SpecialityMenuItemProps {
  title: string;
  icon: ReactNode;
}

const SpecialityMenuItem: FC<SpecialityMenuItemProps> = ({ icon, title }) => {
  return (
    <Flex direction={"column"} gap={16}>
      <Flex
        align={"center"}
        className="find-by-speciality-icon-container"
        justify={"center"}
      >
        {icon}
      </Flex>

      <Text>{title}</Text>
    </Flex>
  );
};

export default SpecialityMenuItem;
