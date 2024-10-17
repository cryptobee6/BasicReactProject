import { Tag as CTag } from "@chakra-ui/react";

export const Tag = ({ children, ...props }) => {
  return (
    <CTag
      p={2}
      size="sm"
      variant="solid"
      bgColor="green.300"
      color="white"
      {...props}
    >
      {children}
    </CTag>
  );
};