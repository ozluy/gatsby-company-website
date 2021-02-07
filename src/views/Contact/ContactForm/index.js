import React from 'react'
import { Flex, H2, Headline, Section } from 'components/CoreElements'
import Container from 'components/Container'
import Button from 'components/Button'
import InputField from 'components/InputField'

const ContactForm = () => (
  <Section bg="lighterBg">
    <Container>
      <Flex alignItems="center" justifyContent="center" flexDirection="column">
        <Headline mb="15px">İletişim Formu</Headline>
        <H2 textAlign="center" maxWidth="450px">
          Tüm Soru ve Görüşlerinizi Buradan İletebilirsiniz
        </H2>
      </Flex>

      <Flex
        p="55px 40px"
        m="60px auto 0 auto"
        bg="white"
        maxWidth="744px"
        alignItems="center"
        justifyContent="space-between"
        boxShadow="0px 15px 20px rgba(31, 72, 143, 0.02)"
        borderRadius="20px"
        flexWrap="wrap"
        flexDirection="row"
      >
        <InputField placeholder="İsim" wrapperProps={{ width: '45%' }} />
        <InputField placeholder="Telefon" wrapperProps={{ width: '45%' }} />
        <InputField placeholder="Email" wrapperProps={{ width: '45%' }} />
        <InputField placeholder="Kategori" wrapperProps={{ width: '45%' }} />
        <InputField placeholder="Mesajınız" wrapperProps={{ width: '100%' }} />
        <Flex
          mt="50px"
          width="100%"
          flexDirection="row"
          justifyContent="flex-end"
        >
          <Button black> Mesaj gönder</Button>
        </Flex>
      </Flex>
    </Container>
  </Section>
)

export default ContactForm
