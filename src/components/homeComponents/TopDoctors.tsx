import { FC } from "react";

import { Flex, Text } from "@mantine/core";

import DoctorCard from "@components/homeComponents/DoctorCard";

import "./HomeComponents.css";
import CustomButton from "../common/Button/CustomButton";

const TopDoctors: FC = () => {
  return (
    <Flex direction={"column"} gap={40}>
      <Flex align={"center"} direction={"column"} gap={16}>
        <Text className="find-by-speciality-title">Top Doctors to Book</Text>
        <Text className="find-by-speciality-description">
          Simply browse through our extensive list of trusted doctors.
        </Text>
      </Flex>

      <Flex align={"center"} justify={"center"} gap={40} wrap={"wrap"}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
          <DoctorCard />
        ))}
      </Flex>

      <Flex align={"center"} justify={"center"}>
        <CustomButton
          containerClassName="view-all-doctors-button"
          label="View All"
          variant="filled"
        />
      </Flex>
    </Flex>
  );
};

export default TopDoctors;
