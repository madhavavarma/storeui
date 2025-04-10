import axios from 'axios';
import productsMock from '../assets/json/products.json';
import categoriesMock from '../assets/json/categories.json';
import { IProduct } from '@/interfaces/IProduct';
import { ICategory } from '@/interfaces/ICategory';

export const isMock = true; // Toggle this to false for real API calls


export const getProducts = async (): Promise<IProduct[]> => {
  if (isMock) {
    return productsMock;
  } else {
    const response = await axios.get<IProduct[]>('/api/products');
    return response.data;
  }
};

export const getCategories = async (): Promise<ICategory[]> => {
  if (isMock) {
    return categoriesMock;
  } else {
    const response = await axios.get<ICategory[]>('/api/categories');
    return response.data;
  }
};
