import { FC } from "react";
import { MantineProvider } from "@mantine/core";

import RouteContainer from "@routes/RouteContainer";

import "@mantine/core/styles.css";

const App: FC = () => {
  return (
    <MantineProvider>
      <RouteContainer />
    </MantineProvider>
  );
};

export default App;
