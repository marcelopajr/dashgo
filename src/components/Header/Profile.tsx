import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Marcelo Pereira</Text>
          <Text color="gray.300" fontSize="small">
            marcelo96jr@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Marcelo Pereira"
        src="https://github.com/marcelopajr.png"
      />
    </Flex>
  );
}
