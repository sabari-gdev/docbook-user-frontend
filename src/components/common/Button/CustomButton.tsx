import { Button, ButtonProps } from "@mantine/core";
import { FC, ReactNode } from "react";

interface CustomButtonProps extends ButtonProps {
  label: string;
  buttonLabelClassName?: string;
  containerClassName?: string;
  contentClassName?: string;
  leftIcon?: ReactNode;
  loading?: boolean;
  rightIcon?: ReactNode;
}

const CustomButton: FC<CustomButtonProps> = ({
  label,
  loading = false,
  buttonLabelClassName,
  containerClassName,
  contentClassName,
  rightIcon,
  leftIcon,
  ...props
}) => {
  return (
    <Button
      classNames={{
        root: containerClassName,
        label: buttonLabelClassName,
        inner: contentClassName,
      }}
      loading={loading}
      rightSection={rightIcon}
      leftSection={leftIcon}
      {...props}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
