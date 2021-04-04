import { BadgeGroup, BadgeWithIcon } from 'components/Badge'
import { H2, Img, Paragraph } from 'components/CoreElements'
import React from 'react'
import phoneIcon from '../icons/phone.svg'
import mailIcon from '../icons/mail.svg'
import whatsappIcon from '../icons/whatsapp.svg'
import telegramIcon from '../icons/telegram.svg'

const Step11 = () => (
  <>
    <H2>250₺ - 750₺</H2>
    <Paragraph m="40px 0 20px 0" color="grey">
      Yakında sizinle iletişime geçeceğiz. Bu zamana kadar bize şu yolla
      ulaşabilirsiniz:
    </Paragraph>

    <BadgeGroup>
      <BadgeWithIcon>
        <Img src={phoneIcon} />
        05321234567
      </BadgeWithIcon>
      <BadgeWithIcon>
        <Img src={telegramIcon} />
        @destannakliyat
      </BadgeWithIcon>
      <BadgeWithIcon>
        <Img src={whatsappIcon} />
        05321234567
      </BadgeWithIcon>
      <BadgeWithIcon>
        <Img src={mailIcon} />
        info@destannakliyat.com.tr
      </BadgeWithIcon>
    </BadgeGroup>
  </>
)

export default Step11
