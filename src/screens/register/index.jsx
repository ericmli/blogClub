import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import Input from '../../components/input'
import InputPassword from '../../components/inputPassword'
import api from '../../service'
import Button from '../../components/Button'
import * as Yup from 'yup'
import { LoginSocial } from '../../components/loginSocial'

export default function Register() {
  const navigation = useNavigation()

  const [name, setName] = useState('')
  function componentName(text) {
    // Função para retornar os textos do input do filho pro pai
    setName(text)
  }
  const [email, setEmail] = useState('')
  function componentEmail(text) {
    setEmail(text)
  }
  const [password, setPassword] = useState('')
  function componentPassword(text) {
    setPassword(text)
  }

  function sendToAPI() {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required()
    })

    const register = {
      name,
      email,
      password
    }

    async function postLogin() {
      try {
        const validatedData = await schema.validate(register)
        api.post('/login', { name, email, password })
        console.log(validatedData)
        navigation.navigate('LOGIN')
      } catch (error) {
        console.log(error)
      }
    }
    postLogin(register)
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.body}>

        <Input
          nameInput={'Username'}
          onChange={componentName}
          alert={''}
        />

        <Input
          nameInput={'E-mail'}
          onChange={componentEmail}
          alert={''}
        />
        <InputPassword
          nameInput={'Password'}
          onChange={componentPassword}
          alert={''}
        />

        <Button
          nameInput="REGISTER"
          onPress={sendToAPI}
        />

        <LoginSocial />
      </View>
    </ScrollView>
  )
}
