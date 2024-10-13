import { FC } from "react";

import { Badge, Flex, Image, Text } from "@mantine/core";

import "./HomeComponents.css";

const DoctorCard: FC = () => {
  return (
    <Flex className="doctor-card-container" direction={"column"}>
      <Flex
        className="doctor-card-image-container"
        align={"flex-end"}
        justify={"center"}
      >
        <Image src="https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg" />
      </Flex>

      <Flex className="doctor-card-info" direction={"column"}>
        <Badge variant="outline">Available</Badge>
        <Text className="doctor-name-text">Dr. John Doe</Text>
        <Text className="doctor-speciality-text">Cardiologist</Text>
      </Flex>
    </Flex>
  );
};

export default DoctorCard;
