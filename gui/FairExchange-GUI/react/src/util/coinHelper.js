export function getCoinTitle(coin) {
  let coinlogo;
  let coinname;
  let transparentBG = false;
  let titleBG = false;
  let hideTitle = false;

  switch (coin) {
    case 'NINJA':
      coinlogo = 'ninja';
      coinname = 'NINJA';
      break;
    case 'VOTE2018':
      coinlogo = 'vote2018';
      coinname = 'VOTE2018';
      break;
    case 'GRS':
      coinlogo = 'grs';
      coinname = 'Groestlcoin';
      break;
    case 'DNR':
      coinlogo = 'dnr';
      coinname = 'Denarius';
      break;
    case 'BTCZ':
      coinlogo = 'btcz';
      coinname = 'BitcoinZ';
      break;
    case 'QTUM':
      coinlogo = 'qtum';
      coinname = 'Qtum';
      break;
    case 'BTX':
      coinlogo = 'btx';
      coinname = 'Bitcore';
      break;
    case 'HODLC':
      coinlogo = 'hodlc';
      coinname = 'Hodl coin';
      break;
    case 'BEER':
      coinlogo = 'beer';
      coinname = 'BEER (Test coin)';
      break;
    case 'PIZZA':
      coinlogo = 'pizza';
      coinname = 'PIZZA (Test coin)';
      break;
    case 'XMY':
      coinlogo = 'xmy';
      coinname = 'Myriad';
      break;
    case 'ZCL':
      coinlogo = 'zcl';
      coinname = 'Zclassic';
      break;
    case 'HUSH':
      coinlogo = 'hush';
      coinname = 'Hush';
      break;
    case 'BCH':
      coinlogo = 'bch';
      coinname = 'BitcoinCash';
      break;
    case 'BLK':
      coinlogo = 'blk';
      coinname = 'Blackcoin';
      break;
    case 'SIB':
      coinlogo = 'sib';
      coinname = 'Sibcoin';
      break;
    case 'VIA':
      coinlogo = 'via';
      coinname = 'Viacoin';
      break;
    case 'VTC':
      coinlogo = 'vtc';
      coinname = 'Vertcoin';
      break;
    case 'MONA':
      coinlogo = 'mona';
      coinname = 'Monacoin';
      break;
    case 'ARG':
      coinlogo = 'arg';
      coinname = 'Argentum';
      break;
    case 'FAIR':
      coinlogo = 'fair';
      coinname = 'Faircoin';
      break;
    case 'DASH':
      coinlogo = 'dash';
      coinname = 'Dash';
      break;
    case 'CRW':
      coinlogo = 'crw';
      coinname = 'Crown';
      break;
    case 'BTG':
      coinlogo = 'btg';
      coinname = 'BitcoinGold';
      break;
    case 'CHIPS':
      coinlogo = 'chips';
      coinname = 'Chips';
      break;
    case 'BTC':
      coinlogo = 'btc';
      coinname = 'Bitcoin';
      break;
    case 'BTCD':
      coinlogo = 'bitcoindark';
      coinname = 'BitcoinDark';
      break;
    case 'LTC':
      coinlogo = 'ltc';
      coinname = 'Litecoin';
      break;
    case 'VPN':
      coinlogo = 'vpncoin';
      coinname = 'VPNcoin';
      break;
    case 'SYS':
      coinlogo = 'syscoin';
      coinname = 'Syscoin';
      break;
    case 'ZEC':
      coinlogo = 'zec';
      coinname = 'Zcash';
      break;
    case 'NMC':
      coinlogo = 'nmc';
      coinname = 'Namecoin';
      break;
    case 'DEX':
      coinlogo = 'dex';
      coinname = 'DEX';
      break;
    case 'DOGE':
      coinlogo = 'doge';
      coinname = 'Dogecoin';
      break;
    case 'DGB':
      coinlogo = 'dgb';
      coinname = 'Digibyte';
      break;
    case 'MZC':
      coinlogo = 'mazacoin';
      coinname = 'Mazacoin';
      break;
    case 'UNO':
      coinlogo = 'unobtanium';
      coinname = 'Unobtanium';
      break;
    case 'ZET':
      coinlogo = 'zetacoin';
      coinname = 'Zetacoin';
      break;
    case 'MNZ':
      coinlogo = 'mnz';
      coinname = 'Monaize';
      break;
    case 'SAFE':
      hideTitle = true;
      titleBG = true;
      transparentBG = true;
      coinlogo = 'safe';
      coinname = 'Safecoin';
      break;
    case 'BTM':
      coinlogo = 'bitmark';
      coinname = 'Bitmark';
      break;
    case 'CARB':
      coinlogo = 'carboncoin';
      coinname = 'Carboncoin';
      break;
    case 'ANC':
      coinlogo = 'anoncoin';
      coinname = 'AnonCoin';
      break;
    case 'FRK':
      coinlogo = 'franko';
      coinname = 'Franko';
      break;
    case 'GAME':
      coinlogo = 'GAME';
      coinname = 'GameCredits';
      break;
    case 'SUPERNET':
      titleBG = true;
      coinlogo = 'SUPERNET';
      coinname = 'SUPERNET';
      break;
    case 'REVS':
      coinlogo = 'REVS';
      coinname = 'REVS';
      break;
    case 'WLC':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'WLC';
      coinname = 'WIRELESS';
      break;
    case 'PANGEA':
      titleBG = true;
      coinlogo = 'PANGEA';
      coinname = 'PANGEA';
      break;
    case 'JUMBLR':
      titleBG = true;
      transparentBG = true;
      hideTitle = true;
      coinlogo = 'JUMBLR';
      coinname = 'JUMBLR';
      break;
    case 'BET':
      coinlogo = 'BET';
      coinname = 'BET';
      break;
    case 'CRYPTO':
      coinlogo = 'CRYPTO';
      coinname = 'CRYPTO';
      break;
    case 'HODL':
      coinlogo = 'HODL';
      coinname = 'HODL';
      break;
    case 'MSHARK':
      coinlogo = 'SHARK';
      coinname = 'MSHARK';
      break;
    case 'BOTS':
      coinlogo = 'BOTS';
      coinname = 'BOTS';
      break;
    case 'MGW':
      coinlogo = 'MGW';
      coinname = 'MultiGateway';
      break;
    case 'MVP':
      hideTitle = true;
      titleBG = true;
      transparentBG = true;
      coinlogo = 'MVP';
      coinname = 'MVP Lineup';
      break;
    case 'KV':
      coinlogo = 'KV';
      coinname = 'KV';
      break;
    case 'CEAL':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'CEAL';
      coinname = 'CEAL NET';
      break;
    case 'COQUI':
      coinlogo = 'COQUI';
      coinname = 'COQUI';
      break;
    case 'MESH':
      hideTitle = true;
      titleBG = true;
      transparentBG = true;
      coinlogo = 'MESH';
      coinname = 'SpaceMesh';
      break;
    case 'AXO':
      coinlogo = 'AXO';
      coinname = 'AXO';
      break;
    case 'ETOMIC':
      coinlogo = 'ETOMIC';
      coinname = 'ETOMIC';
      break;
    case 'BTCH':
      coinlogo = 'BTCH';
      coinname = 'BTCH';
      break;
    case 'USD':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'usd';
      coinname = 'US Dollar';
      break;
    case 'RON':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'RON';
      coinname = 'Romanian Leu';
      break;
    case 'EUR':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'EUR';
      coinname = 'Euro';
      break;
    case 'JPY':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'JPY';
      coinname = 'Japanese Yen';
      break;
    case 'GBP':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'GBP';
      coinname = 'British Pound';
      break;
    case 'AUD':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'AUD';
      coinname = 'Australian Dollar';
      break;
    case 'CAD':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'CAD';
      coinname = 'Canadian Dollar';
      break;
    case 'CHF':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'CHF';
      coinname = 'Swiss Franc';
      break;
    case 'NZD':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'NZD';
      coinname = 'New Zealand Dollar';
      break;
    case 'CNY':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'CNY';
      coinname = 'Chinese Yuan';
      break;
    case 'RUB':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'RUB';
      coinname = 'Russian Ruble';
      break;
    case 'MXN':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'MXN';
      coinname = 'Mexican peso';
      break;
    case 'BRL':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'BRL';
      coinname = 'Brazilian Real';
      break;
    case 'INR':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'INR';
      coinname = 'Indian Rupee';
      break;
    case 'HKD':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'HKD';
      coinname = 'Hong Kong Dollar';
      break;
    case 'TRY':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'TRY';
      coinname = 'Turkish Lira';
      break;
    case 'ZAR':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'ZAR';
      coinname = 'South African Rand';
      break;
    case 'PLN':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'PLN';
      coinname = 'Polish Zloty';
      break;
    case 'NOK':
      titleBG = true;
      coinlogo = 'NOK';
      coinname = 'Norwegian Krone';
      break;
    case 'SEK':
      titleBG = true;
      coinlogo = 'SEK';
      coinname = 'Swedish Krona';
      break;
    case 'DKK':
      titleBG = true;
      coinlogo = 'DKK';
      coinname = 'Danish Krone';
      break;
    case 'CZK':
      titleBG = true;
      coinlogo = 'CZK';
      coinname = 'Czech Koruna';
      break;
    case 'HUF':
      titleBG = true;
      coinlogo = 'HUF';
      coinname = 'Hungarian Forint';
      break;
    case 'ILS':
      titleBG = true;
      coinlogo = 'ILS';
      coinname = 'Israeli Shekel';
      break;
    case 'KRW':
      titleBG = true;
      coinlogo = 'KRW';
      coinname = 'Korean Won';
      break;
    case 'MYR':
      titleBG = true;
      coinlogo = 'MYR';
      coinname = 'Malaysian Ringgit';
      break;
    case 'PHP':
      titleBG = true;
      coinlogo = 'PHP';
      coinname = 'Philippine Peso';
      break;
    case 'SGD':
      titleBG = true;
      coinlogo = 'SGD';
      coinname = 'Singapore Dollar';
      break;
    case 'THB':
      titleBG = true;
      coinlogo = 'THB';
      coinname = 'Thai Baht';
      break;
    case 'BGN':
      titleBG = true;
      coinlogo = 'BGN';
      coinname = 'Bulgarian Lev';
      break;
    case 'IDR':
      titleBG = true;
      coinlogo = 'IDR';
      coinname = 'Indonesian Rupiah';
      break;
    case 'HRK':
      titleBG = true;
      coinlogo = 'HRK';
      coinname = 'Croatian Kuna';
      break;
  }

  return {
    logo: coinlogo,
    name: coinname,
    titleBG,
    transparentBG,
  };
}

export function getModeInfo(mode) {
  let modecode;
  let modetip;
  let modecolor;

  switch (mode) {
    case 'native':
      modecode = 'Native';
      modetip = 'Native';
      modecolor = 'primary';
      break;
    case 'spv':
      modecode = 'SPV';
      modetip = 'SPV';
      modecolor = 'info';
      break;
    case 'full':
      modecode = 'Full';
      modetip = 'Full';
      modecolor = 'success';
      break;
    case 'virtual':
      modecode = 'Virtual';
      modetip = 'Virtual';
      modecolor = 'danger';
      break;
    case 'notarychains':
      modecode = 'Notarychains';
      modetip = 'Notarychains';
      modecolor = 'dark';
      break;
  }

  return {
    code: modecode,
    tip: modetip,
    color: modecolor,
  };
}

export function coindList() {
  const _coins = [
    'SAFE',
    'CHIPS',
    'BET',
    'BOTS',
    'CEAL',
    'COQUI',
    'CRYPTO',
    'HODL',
    'DEX',
    'JUMBLR',
    'KV',
    'MGW',
    'MVP',
    'MNZ',
    'PANGEA',
    'REVS',
    'MSHARK',
    'MESH',
    'SUPERNET',
    'WLC',
    'AXO',
    'ETOMIC',
    'BTCH'
  ];

  return _coins;
}

export const isSafecoinCoin = (coin) => {
  if (coin === 'SUPERNET' ||
      coin === 'REVS' ||
      coin === 'PANGEA' ||
      coin === 'DEX' ||
      coin === 'JUMBLR' ||
      coin === 'BET' ||
      coin === 'CRYPTO' ||
      coin === 'COQUI' ||
      coin === 'HODL' ||
      coin === 'MSHARK' ||
      coin === 'BOTS' ||
      coin === 'MGW' ||
      coin === 'MVP' ||
      coin === 'KV' ||
      coin === 'CEAL' ||
      coin === 'MESH' ||
      coin === 'WLC' ||
      coin === 'MNZ' ||
      coin === 'CHIPS' ||
      coin === 'SAFE' ||
      coin === 'AXO' ||
      coin === 'ETOMIC' ||
      coin === 'BTCH') {
    return true;
  }
}