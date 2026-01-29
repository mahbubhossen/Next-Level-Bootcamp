// utility types

type product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string;
};

type productSummery = Pick<product, "id" | "name" | "price">;
type productWithOutStock = Omit<product, "stock">;
type ProductWithColor = Required<product>;
type PartialProduct = Partial<product>;
type productReadOnly = Readonly<product>;
const emptyObj: Record<string, unknown> = {};