import { atom } from 'recoil';

export const reservation = atom({
  key: 'reservation',
  default: [
    {
      shopId: null,
      shopName: null,
      petName: null,
      service: null,
      date: null,
      time: null,
    },
  ],
});

export const selectedShop = atom({
  key: 'selectedShop',
  default: [
    {
      id: null,
      shopName: null,
      intro: null,
      workTime: null,
      workHoly: null,
      shopNum: null,
      workName: null,
      address: null,
      parking: null,
      shopImg: null,
      userId: null,
      coordinateX: null,
      coordinateY: null,
    },
  ],
});
