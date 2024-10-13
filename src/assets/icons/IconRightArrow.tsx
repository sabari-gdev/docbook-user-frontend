import { rem } from "@mantine/core";
import { FC } from "react";

interface IconRightArrowProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

const IconRightArrow: FC<IconRightArrowProps> = ({
  size,
  style,
  ...others
}) => {
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: rem(size), height: rem(size), ...style }}
      {...others}
    >
      <path
        d="M1 6H15M15 6L10.8378 1M15 6L10.8378 11"
        stroke="#595959"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default IconRightArrow;
