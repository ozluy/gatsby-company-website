const config = {
  scrollReveal: {
    origin: 'right',
    duration: 600,
    delay: 100,
    distance: '50px',
    scale: 1,
    easing: 'ease'
  },
  pricePerKm: 5, // 5₺ (all prices are in Turkish Lira)
  insurance: [
    { price: 0, label: 'Hayır, istemiyorum' },
    { price: 200, label: 'Evet, 20.000 TL teminat istiyorum' },
    { price: 500, label: 'Evet, 50.000 TL teminat istiyorum' },
    { price: 1000, label: 'Evet, 100.000 TL teminat istiyorum' }
  ],
  packaging: [
    { price: 100, label: 'Evet, tüm paketlemeyi nakliyeci yapsın' },
    { price: 50, label: 'Yalnız mobilya & beyaz eşya paketlensin' },
    { price: 0, label: 'Hayır, paketlemeyi biz yapalım' }
  ],
  sizeOfMoving: [
    { price: 300, label: 'Studio' },
    { price: 400, label: '1+1' },
    { price: 500, label: '2+1' },
    { price: 600, label: '3+1' },
    { price: 700, label: '4+1' },
    { price: 800, label: '5+1' },
    { price: 1200, label: 'Daha büyük' },
    { price: 100, label: 'Sadece birkaç eşya taşınacak' }
  ],
  houseCondition: [
    { price: 100, label: 'Ev giriş katında' },
    { price: 100, label: 'Ev giriş (zemin) altında' },
    { price: 200, label: 'Merdiven 1 ile 3 kat arasında' },
    { price: 300, label: 'Merdiven 4 kat veya daha fazla' },
    { price: 200, label: 'Bina asansörü kullanılabilir' },
    { price: 100, label: 'Yük asansörü var' },
    { price: 500, label: 'Modüler asansör kurulmalı' }
  ],
  dateOfMoving: [
    { label: 'Belli bir zaman (üç hafta içinde)' },
    { label: 'İki ay içinde' },
    { label: 'Altı ay içinde' },
    { label: 'Sadece fiyat bakıyorum' }
  ]
}

export default config
