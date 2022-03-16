import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Marcelo Pereira</Text>
        <Text color="gray.300" fontSize="small">
          marcelo96jr@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Marcelo Pereira"
        src="https://github.com/marcelopajr.png"
      />
    </Flex>
  );
}
