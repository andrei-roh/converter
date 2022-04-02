export const endpoints = {
  nationalBank: {
    name: 'nationalBank',
    url: 'https://www.nbrb.by/api/exrates/rates?periodicity=0',
  },
  belarusBank: {
    name: 'belarusBank',
    url: 'https://belarusbank.by/api/kursExchange?city=Минск',
  },
  dabrabytBank: {
    name: 'dabrabytBank',
    url: 'https://bankdabrabyt.by/export_courses.php',
  },
  belagropromBank: {
    name: 'belagropromBank',
    url: 'https://belapb.by/CashExRatesDaily.php',
  },
};

export const proxyServer = 'https://evening-taiga-06138.herokuapp.com/';
