import { FC } from "react";

import { Flex, Image, Text } from "@mantine/core";

import CustomButton from "@components/common/Button/CustomButton";

import doctorImage from "@assets/images/doctor-001.png";

const CreateAccountBanner: FC = () => {
  return (
    <Flex
      align={"center"}
      justify={"center"}
      className="appointment-banner-container"
    >
      <Flex gap={16} direction={"column"}>
        <Text className="appointment-banner-title">
          Book Appointment With 100+ Trusted Doctors
        </Text>

        <Flex>
          <CustomButton
            containerClassName="book-appointment-button"
            variant="white"
            label="Create Account"
          />
        </Flex>
      </Flex>
      <Flex>
        <Image src={doctorImage} width={400} height={500} />
      </Flex>
    </Flex>
  );
};

export default CreateAccountBanner;
