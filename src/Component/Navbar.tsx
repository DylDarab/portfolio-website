import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import { useHeightStore } from '../heightStore'

const Navbar = () => {
  const height = useHeightStore((state) => state.height)

  const layout = {
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 100,
    height: height > 48 ? '80px' : '120px',
    padding: '0 120px',
    backgroundColor: height > 48 ? 'white' : 'transparent',
    transition: 'all 0.3s ease-in-out',
  }

  const menuTitle = {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: '24px',
  }

  const menuText = {
    color: 'orange',
    fontWeight: '500',
    fontSize: '18px',
    borderBottom: '2px solid transparent',
    cursor: 'pointer',
    transform: 'translateY(4px)',
    _hover: {
      color: 'red',
      borderColor: 'red',
    },
  }

  return (
    <Flex sx={layout}>
      <Flex width="100%" alignItems="center" justifyContent="space-between">
        <Box width="50%">
          <Text sx={menuTitle}>Apicha On-amphai</Text>
        </Box>
        <HStack
          width="60%"
          gap="32px"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Text sx={menuText}>Home</Text>
          <Text sx={menuText}>About</Text>
          <Text sx={menuText}>Skills</Text>
          <Text sx={menuText}>Education</Text>
          <Text sx={menuText}>Experience</Text>
          <Text sx={menuText}>Contact</Text>
        </HStack>
      </Flex>
    </Flex>
  )
}

export default Navbar
