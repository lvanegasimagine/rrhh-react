import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import { Link as ReachLink } from "react-router-dom";
import ButtonModeDark from "../styled/ButtonModeDark";

const Navbar = () => {
  const linkProps = {
    as: ReachLink,
    px: 2,
    py: 1,
    rounded: "md",
    _hover: {
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    },
  };

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
          <Link colorScheme="teal" variant="solid" to="/" {...linkProps}>
            <Text fontSize="xl">ReactPro RRHH</Text>
          </Link>
          <Link to="listar-empleado" {...linkProps}>
            <Text>Empleado</Text>
          </Link>
          <Link to="listar-cargo" {...linkProps}>
            <Text>Cargo</Text>
          </Link>
          <Link to="listar-departamento" {...linkProps}>
            <Text>Departamento</Text>
          </Link>
        </HStack>

        <Flex alignItems="center">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<FaUserAlt />}
              variant="outline"
            />
            <MenuList>
              <MenuItem>Editar Usuario</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
            <ButtonModeDark />
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
