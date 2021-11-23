const getCurrencyName = (value) => {
  switch (value) {
    case 'Белорусский рубль':
      return 'belarusianRouble';
    case 'Гривен':
      return 'hryvnia';
    case 'Доллар США':
      return 'dollarUSA';
    case 'Евро':
      return 'euro';
    case 'Российских рублей':
      return 'russianRouble';
    case 'Австралийский доллар':
      return 'dollarAustralia';
    case 'Армянских драмов':
      return 'armenianDram';
    case 'Болгарский лев':
      return 'boulgarianLev';
    case 'Датских крон':
      return 'danishKrone';
    case 'Злотых':
      return 'zloty';
    case 'Иен':
      return 'yen';
    case 'Иранских риалов':
      return 'iranianReal';
    case 'Исландских крон':
      return 'icelandicKrona';
    case 'Канадский доллар':
      return 'dollarCanada';
    case 'Китайских юаней':
      return 'renminbi';
    case 'Кувейтский динар':
      return 'kuwaitiDinar';
    case 'Молдавских леев':
      return 'moldavianGros';
    case 'Новозеландский доллар':
      return 'dollarNewZealand';
    case 'Норвежских крон':
      return 'norwegianKrone';
    case 'СДР (Специальные права заимствования)':
      return 'sdr';
    case 'Сингапурcкий доллар':
      return 'dollarSingapore';
    case 'Сомов':
      return 'kyrgyzstaniSom';
    case 'Тенге':
      return 'kazakhstaniTenge';
    case 'Турецких лир':
      return 'turkishLira';
    case 'Фунт стерлингов':
      return 'poundSterling';
    case 'Чешских крон':
      return 'czechKoruna';
    case 'Шведских крон':
      return 'swedishKrona';
    case 'Швейцарский франк':
      return 'swissFranc';
    default:
      return value;
  }
};

export default getCurrencyName;
