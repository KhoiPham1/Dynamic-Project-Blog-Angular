import {Iblog} from './iblog';

export interface Category {
  id: number;
  category: string;
  blogs: Iblog[];
}
