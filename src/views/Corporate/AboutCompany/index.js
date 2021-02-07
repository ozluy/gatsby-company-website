import React, { useState } from 'react'
import Container from 'components/Container'
import {
  Section,
  Flex,
  H2,
  Paragraph,
  Headline,
  Div
} from 'components/CoreElements'
import { Content, SideList, SideListItem } from './styled'

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const sideList = [
    'Misyonumuz',
    'Vizyonumuz',
    'Politikalarımız',
    'Kurumsal İnfografik',
    'Basın Haberlerimiz',
    'Araçlarımız',
    'Resim Galeri',
    'Müşteri Yorumları',
    'Nakliye Talep Formu'
  ]

  return (
    <Section bg="lighterBg">
      <Container>
        <Flex>
          <SideList>
            {sideList.map((item, index) => (
              <SideListItem
                onClick={() => setActiveIndex(index)}
                active={index === activeIndex}
                key={item}
              >
                {index + 1}. {item}
              </SideListItem>
            ))}
          </SideList>
          <Div>
            <H2
              pl="15px"
              pb="10px"
              borderBottom="solid 2px"
              borderColor="secondary"
              display="inline-block"
            >
              Kalite Politikalarımız
            </H2>
            <Content>
              <Paragraph>
                Lojistik sektöründe evden eve nakliyat, ev eşya depolama,
                asansörlü nakliyat, parça eşya taşımacılığı vb. sunmuş olduğumuz
                tüm hizmet alanlarındaki çalışma politikamız; ihtiyaç duyulan
                hizmetlerde maksimum verimlilik sağlanabilmesi için en uygun
                fiyatlarla etkili, güvenilir, kaliteli çözümler üretebilmektir.
              </Paragraph>
              <Paragraph>
                Yapılan çalışmalar sırasında hata kayıplarını en aza
                indirebilmek, iş yükünü azaltabilmek ve en uygun saat
                zamanlamasında kaliteyi ortaya koyabilmek için temel
                politikalarımız başlıca temel unsurlardır.
              </Paragraph>
              <Paragraph>
                Nakliyat hizmeti öncesinde kaliteli hizmetler sunan ve yetkili
                birimlerden almış olduğumuz şehir içi, şehirlerarası taşımacılık
                yetki belgeleriyle kendini kanıtlayan, tüm ekip ve donanımlar
                ile anında hızlı çözümler üreten, politikamız en önemli
                unsurdur.
              </Paragraph>
              <Headline>Çevreye Bağlı Politikamız</Headline>
              <Paragraph>
                Bu güne kadar nakliyat lojistik sektörü içerisinde tüm
                gerçekleşen ve gerçekleşemeyen tüm projelerde çevre birimlerine
                bağlı tüm zararların engellenmesi, doğal kaynakların maksimum
                geri dönüştürebilirlik için gayret göstermek, kanuni hükümlülük
                ve uygun mevzuata bağlı hizmet sağlayarak müşterilerimize
                bireysel ve kurumsal anlamda hareket etmek ve çevreye bağlı
                politikamızın temelini esas almaktadır.
              </Paragraph>
              <Headline>İş Sağlığı ve Güvenliği Politikamız</Headline>
              <Paragraph>
                Destan Nakliyat bünyesinde çalışan tüm personellerimizin iş
                sağlığı ve güvenliği konusunda ilk önceliğimizdir. Tüm nakliyat
                çalışmaları içerisinde olası tedbirlerin önceden alınması ve
                tehlikeler ortadan kaldırılarak güvenli bir ortam içerisinde
                çalışma politikamızı oluşturmaktadır.
              </Paragraph>
            </Content>
          </Div>
        </Flex>
      </Container>
    </Section>
  )
}

export default Banner
