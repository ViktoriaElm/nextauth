/* eslint-disable @next/next/no-img-element */
import { User, Prisma } from '@prisma/client';

import { columnsElement } from './types';

export const columns: columnsElement<User>[] =
  Object.keys(Prisma.UserScalarFieldEnum)
    .map(key => ({
      name: key,
      getVal: (fkey => {
        switch (fkey) {
          case 'image':
            // eslint-disable-next-line react/display-name
            return ({ image }: User) => image ? <img src={image} className="icon" alt={''} /> : '-';
          case 'emailVerified':
            return ({ emailVerified }: User) => emailVerified ? emailVerified.toLocaleString() : '';
          default:
            return (obj: User) => obj[fkey];
        }
      })(key as keyof User)
    }));