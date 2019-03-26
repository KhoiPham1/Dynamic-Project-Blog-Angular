import {Category} from './category';

export interface Iblog {
  id: number;
  title: string;
  content: string;
  category: Category;
  nameImg: string;
  boxCheck: boolean;
}
