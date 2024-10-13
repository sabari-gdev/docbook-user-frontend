import { FC } from "react";

import { Flex } from "@mantine/core";

import AppointmentBanner from "@components/homeComponents/AppointmentBanner";
import FindBySpecialityMenu from "@components/homeComponents/FindBySpecialityMenu";
import TopDoctors from "@components/homeComponents/TopDoctors";
import CreateAccountBanner from "@/components/homeComponents/CreateAccountBanner";

const Home: FC = () => {
  return (
    <Flex direction={"column"} gap={100}>
      <AppointmentBanner />
      <FindBySpecialityMenu />
      <TopDoctors />
      <CreateAccountBanner />
    </Flex>
  );
};

export default Home;
