import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Flex, H2, Headline, Section } from 'components/CoreElements'
import Container from 'components/Container'
import Button from 'components/Button'
import InputField from 'components/InputField'
import Dropdown from 'components/Dropdown'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Animator from 'components/Animator'

export const Form = styled.form`
  display: flex;
  padding: 55px 40px;
  margin: 60px auto 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  max-width: 744px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 15px 20px rgba(31, 72, 143, 0.02);
  border-radius: 20px;
  flex-wrap: wrap;
  flex-direction: row;
`

const ContactForm = () => {
  const { register, handleSubmit, errors, setValue, control } = useForm()
  const { allGraphCmsService } = useStaticQuery(graphql`
    {
      allGraphCmsService {
        nodes {
          id
          name
        }
      }
    }
  `)

  const CATEGORIES = allGraphCmsService.nodes.map(({ name, id }) => ({
    value: id,
    label: name
  }))

  const initialCategory = CATEGORIES[0]
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  useEffect(() => {
    register({ name: 'category' })
    setValue('category', initialCategory)
  }, [])
  const onSubmit = (data) => alert(JSON.stringify(data))

  const handleChange = (value, action, setStateFunction) => {
    const inputRef = action.name
    setValue(inputRef, value)
    setStateFunction(value)
  }

  return (
    <Section bg="lighterBg">
      <Container>
        <Animator
          component={Flex}
          customConfig={{ origin: 'bottom' }}
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Headline mb="15px">İletişim Formu</Headline>
          <H2 textAlign="center" maxWidth="450px">
            Tüm Soru ve Görüşlerinizi Buradan İletebilirsiniz
          </H2>
        </Animator>

        <Animator
          component={Form}
          customConfig={{ origin: 'bottom' }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ onChange, value }) => (
              <InputField
                ref={register({ required: true })}
                placeholder="İsim"
                name="fullName"
                errorMessage={errors.fullName && 'Required!'}
                wrapperProps={{ width: ['100%', '100%', '45%'] }}
                onChange={onChange}
                value={value}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            render={({ onChange, value }) => (
              <InputField
                name="phone"
                errorMessage={errors.phone && 'Required!'}
                placeholder="Telefon"
                wrapperProps={{ width: ['100%', '100%', '45%'] }}
                ref={register}
                onChange={onChange}
                value={value}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ onChange, value }) => (
              <InputField
                name="email"
                errorMessage={errors.email && 'Required!'}
                ref={register({ required: true })}
                placeholder="Email"
                wrapperProps={{ width: ['100%', '100%', '45%'] }}
                onChange={onChange}
                value={value}
              />
            )}
          />
          <Dropdown
            name="category"
            errorMessage={errors.category && 'Required!'}
            ref={register}
            options={CATEGORIES}
            defaultValue={selectedCategory}
            value={selectedCategory}
            title="Kategori"
            wrapperProps={{ width: ['100%', '100%', '45%'] }}
            onChange={(value, action) => {
              handleChange(value, action, setSelectedCategory)
            }}
          />
          <Controller
            name="message"
            control={control}
            defaultValue=""
            render={({ onChange, value }) => (
              <InputField
                name="message"
                errorMessage={errors.message && 'Required!'}
                placeholder="Mesajınız"
                ref={register({ required: true })}
                wrapperProps={{ width: '100%' }}
                onChange={onChange}
                value={value}
              />
            )}
          />
          <Flex
            mt="50px"
            width="100%"
            flexDirection="row"
            justifyContent="flex-end"
          >
            <Button type="submit" black>
              Mesaj gönder
            </Button>
          </Flex>
        </Animator>
      </Container>
    </Section>
  )
}

export default ContactForm
