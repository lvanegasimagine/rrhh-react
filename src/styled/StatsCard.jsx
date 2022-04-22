import {
    Box,
    Flex,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';

export default function StatsCard(props) {
    const { title, stat, icon } = props;
    return (
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        // border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        bg='#2C5282'
        color='white'
        rounded={'lg'}>
        <Flex justifyContent={'space-between'}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={'medium'} isTruncated>
              {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
              {stat}
            </StatNumber>
          </Box>
          <Box
            my={'auto'}
            color='white'
            alignContent={'center'}>
            {icon}
          </Box>
        </Flex>
      </Stat>
    );
  }