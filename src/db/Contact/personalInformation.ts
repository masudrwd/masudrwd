import { uiIdGenerator } from '../uiidGenerator';

type personalInformationType = {
   id: string;
   title: string;
   value: string;
};

export const personalInformationData: personalInformationType[] = [
   {
      id: uiIdGenerator(),
      title: 'Name:',
      value: 'Md Masud Rana',
   },
   {
      id: uiIdGenerator(),
      title: 'My Address:',
      value: 'Lalmonirhat, Rangpur - Bangladesh',
   },
   {
      id: uiIdGenerator(),
      title: 'My Email:',
      value: 'info.masud21@gmail.com',
   },
];
