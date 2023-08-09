export type ProductDTO = {
  id: number;
  model: string;
  price: number;
};
export type SuperTestResponse<T> = Omit<Response, 'body'> & { body: T };
