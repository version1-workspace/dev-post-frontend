import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  VStack,
} from '@chakra-ui/react'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { PagePadding } from '@/components/layout/PagePadding'
import { PageRoot } from '@/components/layout/PageRoot'
import { Footer } from '@/components/navigation/Footer'
import { Header } from '@/components/navigation/Header'

type FormValues = {
  email: string
  password: string
}

export const Signin: FC<{ onSubmit: (values: FormValues) => void }> = ({
  onSubmit,
}) => {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  })
  return (
    <PageRoot backgroundColor="gray.50">
      <Header />
      <Box>
        <Container
          bg="white"
          boxShadow="md"
          p={12}
          mt="96px"
          border="3px solid white"
          borderColor="#850b0bf"
        >
          <VStack>
            <Heading fontSize="lg">ログイン</Heading>
          </VStack>
          <form onSubmit={handleSubmit((v) => onSubmit(v))}>
            <Stack spacing={4} mt="64px">
              <FormControl id="email">
                <FormLabel fontWeight="600" color="gray.800">
                  メールアドレス
                </FormLabel>
                <Input
                  type="text"
                  size="lg"
                  inputMode="email"
                  px={4}
                  py={8}
                  placeholder="メールアドレスを入力"
                  {...register('email', {})}
                />
              </FormControl>
              <FormControl id="password" mt="6">
                <FormLabel fontWeight="600" color="gray.800">
                  パスワード
                </FormLabel>
                <Input
                  type="password"
                  size="lg"
                  px={4}
                  py={8}
                  placeholder="パスワードを入力"
                  {...register('password', {})}
                />
              </FormControl>

              <Stack spacing={10} mt={12}>
                <Button
                  bg="yellow.200"
                  width="100%"
                  size="lg"
                  fontWeight="bold"
                  type="submit"
                  px={4}
                  py={8}
                  _hover={{ bg: 'yellow.300' }}
                >
                  ログイン
                </Button>
              </Stack>
            </Stack>
          </form>
        </Container>
      </Box>
      <PagePadding />
      <Footer />
    </PageRoot>
  )
}
