import { useRouter } from 'next/router'
import React from 'react'
import { Signin } from './Signin'
import { usePagesSigninMutation } from './index.gen'
import { useSuccessToast } from '@/toastModal/useSuccessToast'

const SigninPage = () => {
  const router = useRouter()
  const { showToastSuccess } = useSuccessToast()
  const [signin] = usePagesSigninMutation({
    onCompleted() {
      showToastSuccess('ログインに成功しました。')
      router.push('/dashboard')
    },
    onError: (error) => console.log('Error:', error.message),
  })

  return (
    <Signin
      onSubmit={(values) => {
        signin({
          variables: {
            input: {
              email: values.email,
              password: values.password,
            },
          },
        })
      }}
    />
  )
}

export default SigninPage
