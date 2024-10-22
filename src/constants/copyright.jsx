import flag from '../static/images/header__flag.svg';
import appleStore from '../static/images/header__as.svg';
import googlePlay from '../static/images/header__gp.svg';
import headerPhone from '../static/images/header__phone.png';
import down from '../static/images/header__down.svg';

import like from '../static/images/dignity__like.png';
import geo from '../static/images/dignity__geo.png';
import bell from '../static/images/dignity__bell.png';
import archive from '../static/images/dignity__archive.png';

import action from '../static/images/phone__actions.jpg';
import favorites from '../static/images/phone__favorites.jpg';
import list from '../static/images/phone__list.jpg';
import map from '../static/images/phone__map.jpg';
import subs from '../static/images/phone__subs.jpg';

import phone from '../static/images/stock__phone.png';

import adidas from '../static/images/partner__adidas.png';
import gum from '../static/images/partner__gum.png';
import nike from '../static/images/partner__nike.png';
import pazolini from '../static/images/partner__pazolini.png';
import prada from '../static/images/partner__prada.png';
import tsum from '../static/images/partner__tsum.png';
import zara from '../static/images/partner__zara.png';

import dialog from '../static/images/footer__contact.svg';

export const header = {
  flag,
  appleStore,
  googlePlay,
  headerPhone,
  down,
  partnerText: 'Стать партнером',
  shopGuide: ['Shop', 'Guide'],
  dividerText: 'загрузить',
  downBtnText: 'Вниз',
};

export const dignities = [
  {
    title: 'Только лучшее',
    text: 'Всегда актуальные акции у вас в телефоне',
    icon: like,
  },
  {
    title: 'Всегда рядом',
    text: 'Находите ближайшие акции на карте рядом с вами',
    icon: geo,
  },
  {
    title: 'Уведомления',
    text: 'Подписывайтесь только на то, что вас интересует и всегда будьте в курсе новых акций.',
    icon: bell,
  },
  {
    title: 'Каталог',
    text: 'Огромный каталог с информацией о магазинах, брендах и ТЦ всегда под рукой.',
    icon: archive,
  },
];

export const funcTitles = [
  {
    id: 1,
    title: 'Избранное',
    text: [
      'Можно избрать избранное и получать уведомление про избранники моей родины.',
      'Как бы мне вернуться в те славные времена под нарезанными мостами из свежей сосны.',
    ],
    display: favorites,
  },
  {
    id: 2,
    title: 'Профиль акций',
    text: [
      'Вы всегда получите полную информацию об акции: подробное описание, бренд, магазины и торговые центры где походит акция.',
      'Также доступна возможность сразу перейти на сайт товара и купить в рамках действующей акции.',
    ],
    display: action,
  },
  {
    id: 3,
    title: 'Подписки',
    text: [
      'Подписывайтесь на категории, акции по которым вас интересуют.',
      'Одежда, обувь, бытовая техника, цветные и бледные рабы - всё есть!',
    ],
    display: subs,
  },
  {
    id: 4,
    title: 'Карта',
    text: [
      'Будьте в курсе акции проходящих поблизости, рядом с вашим детским домом.',
      'Четкие, своевременные указатели, выставлены, как мы умеем, с чувством и мимикой своего лица.',
    ],
    display: map,
  },
  {
    id: 5,
    title: 'Моя лента',
    text: [
      'Просматривайте удобно, в комфортных условиях ленту новостей по интересующим вас темам.',
      'Очень моя, очень лента, читай и читай. Бесконечная лента.',
    ],
    display: list,
  },
];

export const stock = {
  title: 'Наши Акции',
  text: 'Каждый день в Москве проходят распродажи. В акциях и скидках дня могут принимать участие любые группы товаров. Особенно популярны распродажи одежды и обуви, распродажи мебели, распродажи сумок.',
  img: phone,
};

export const partners = {
  title: 'Наши партнёры',
  logos: [prada, nike, tsum, adidas, gum, zara, pazolini],
  text: [
    'Хотите стать партнёром?',
    'Напишите нам и про ваши акции узнают все.',
  ],
  btnText: 'Стать партнером',
};

export const footer = {
  copyright: '2016 © shopguide',
  privacy: 'политика конфиденциальности',
  terms: 'правила пользования',
  contact: 'связаться с нами',
  contactIcon: dialog,
};
