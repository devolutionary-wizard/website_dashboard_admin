import { Button, ButtonProps, Flex, Text } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../../Icon";
import { EAppRoutes } from "../../../../configs/constants";

interface GoBackButtonProps extends ButtonProps {
  goTo?: EAppRoutes;
}

const GoBackButton: React.FC<GoBackButtonProps> = ({ goTo, ...rest }) => {
  const navigate = useNavigate();
  const onPressGoBack = useCallback(() => {
    if (goTo) {
      navigate(goTo);
    } else {
      navigate(-1);
    }
  }, [goTo, navigate]);
  return (
    <Button
      variant="unstyled"
      color="brand.700"
      _hover={{ color: "gray.900" }}
      _focus={{ boxShadow: "none" }}
      onClick={onPressGoBack}
      {...rest}>
      <Flex alignItems="center">
        <Icon icon="arrow-left" size={20} />
        <Text
          ml="15px"
          fontWeight="semibold"
          fontSize="18px"
          lineHeight="34px"
          letterSpacing="0.72px">
          Back
        </Text>
      </Flex>
    </Button>
  );
};

export default GoBackButton;
