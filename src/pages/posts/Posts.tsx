import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Button,
  Card,
  CardBody,
  Image,
  Stack,
  Link,
  Icon,
} from '@chakra-ui/react'
import React, { FC } from 'react'
import { FaStar } from 'react-icons/fa'
import { PagePadding } from '@/components/layout/PagePadding'
import { PageRoot } from '@/components/layout/PageRoot'
import { Footer } from '@/components/navigation/Footer'
import { Header } from '@/components/navigation/Header'
import { postsData } from '@/constants/post'
import { User } from '@/types/graphql.gen'

type Props = {
  viewer: User
}

export const Posts: FC<Props> = (props: Props) => {
  const { viewer } = props

  return (
    <PageRoot backgroundColor="gray.50">
      <Header viewer={viewer} />
      <Box p="48px">
        <Flex
          px="96px"
          py="48px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading fontSize="2xl">最新投稿一覧</Heading>
          <Flex alignItems="center">
            <Text mr="4">並び順</Text>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                backgroundColor="gray.500"
                color="white"
                _hover={{ backgroundColor: 'blue.600' }}
              >
                更新日順
              </MenuButton>
              <MenuList>
                <MenuItem>更新日順</MenuItem>
                <MenuItem>スターの多い順</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        <Box px="96px">
          <Flex wrap="wrap" gap={8} justifyContent="flex-start">
            {postsData.map((post, index) => (
              <Link key={index} textDecoration="none">
                <Card
                  maxW="sm"
                  width="100%"
                  maxWidth="300px"
                  border="1px solid"
                  borderColor="gray.200"
                  borderRadius="md"
                  height="400px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <CardBody
                    p="0"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                  >
                    <Box>
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={300}
                        height={200}
                        objectFit="cover"
                        borderTopRadius="md"
                      />
                      <Stack mt="6" spacing="3" p="4">
                        <Heading size="md">
                          {post.title.length > 30
                            ? `${post.title.slice(0, 30)}...`
                            : post.title}
                        </Heading>
                        <Text color="gray.500">
                          {post.description.length > 20
                            ? `${post.description.slice(0, 20)}...`
                            : post.description}
                        </Text>
                      </Stack>
                    </Box>
                    <Flex justify="flex-end" align="center" p="4">
                      <Icon boxSize={8} as={FaStar} color="yellow.400" />
                      <Text ml="2">4.5</Text>
                    </Flex>
                  </CardBody>
                </Card>
              </Link>
            ))}
          </Flex>
        </Box>
      </Box>
      <PagePadding />
      <Footer />
    </PageRoot>
  )
}
