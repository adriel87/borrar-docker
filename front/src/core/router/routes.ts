import { generatePath } from './routes.helpers';

interface BaseRoutes {
  root: string;
  bookList: string;
  createBook: string;
  editBook: string;
  user: string;
}

const baseRoutes: BaseRoutes = {
  root: '/',
  bookList: '/book-list',
  createBook: '/book-list/create',
  editBook: '/book-list/:id',
  user: '/user',
};

type SwitchRoutes = BaseRoutes;

export const switchRoutes: SwitchRoutes = {
  ...baseRoutes,
};

type EditParams = {
  id: string;
};

interface LinkRoutes extends Omit<BaseRoutes, 'editBook'> {
  editBook: (editParams: EditParams) => string;
}

export const linkRoutes: LinkRoutes = {
  ...baseRoutes,
  editBook: (params) => generatePath(baseRoutes.editBook, { ...params }),
};
