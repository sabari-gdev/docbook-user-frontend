import { FC } from "react";

import { Avatar, Flex, Image, Text } from "@mantine/core";

import CustomButton from "@components/common/Button/CustomButton";

import doctorImage from "@assets/images/doctor-001.png";
import IconRightArrow from "@assets/icons/IconRightArrow";

import "./HomeComponents.css";

const AppointmentBanner: FC = () => {
  return (
    <Flex
      align={"center"}
      justify={"center"}
      className="appointment-banner-container"
    >
      <Flex gap={16} direction={"column"}>
        <Text className="appointment-banner-title">
          Book Appointment With Trusted Doctors
        </Text>

        <Flex align={"center"} gap={16}>
          <Avatar.Group>
            <Avatar
              src={
                "https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg"
              }
            />
            <Avatar
              src={
                "https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg"
              }
            />
            <Avatar
              src={
                "https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg"
              }
            />
          </Avatar.Group>

          <Text className="appointment-banner-description">
            {`Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.`}
          </Text>
        </Flex>

        <Flex>
          <CustomButton
            containerClassName="book-appointment-button"
            variant="white"
            label="Book appointment"
            rightIcon={<IconRightArrow />}
          />
        </Flex>
      </Flex>
      <Flex>
        <Image src={doctorImage} width={400} height={500} />
      </Flex>
    </Flex>
  );
};

export default AppointmentBanner;
