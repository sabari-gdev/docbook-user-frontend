import { FC } from "react";

import { Flex, Text } from "@mantine/core";

import IconGeneralPhysician from "@assets/icons/IconGeneralPhysician";

import SpecialityMenuItem from "@components/homeComponents/SpecialityMenuItem";

import "./HomeComponents.css";

const FindBySpecialityMenu: FC = () => {
  return (
    <Flex align={"center"} gap={64} direction={"column"}>
      <Flex align={"center"} direction={"column"} gap={16}>
        <Text className="find-by-speciality-title">Find by Speciality </Text>
        <Text className="find-by-speciality-description">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </Text>
      </Flex>

      <Flex align={"center"} gap={40} justify={"space-between"} flex={1}>
        {Array.from({ length: 6 }).map(() => (
          <SpecialityMenuItem
            icon={<IconGeneralPhysician size={60} />}
            title={"General Physician"}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default FindBySpecialityMenu;
