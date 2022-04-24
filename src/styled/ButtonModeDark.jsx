import { IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ButtonModeDark = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
      isRound="true"
      ml={15}
      size="lg"
      alignSelf="flex-end"
      onClick={toggleColorMode}
    />
  );
};

export default ButtonModeDark;
