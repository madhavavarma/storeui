import productsMock from '../assets/json/MotherEarth/products.json';
import categoriesMock from '../assets/json/MotherEarth/categories.json';
import appSettingsMock from '../assets/json/MotherEarth/appSettings.json';
import { IProduct } from '@/interfaces/IProduct';
import { ICategory } from '@/interfaces/ICategory';
import { IAppSettings } from '@/interfaces/IAppSettings';
import { supabase } from '@/supabaseClient';
import { ICartState } from '@/store/interfaces/ICartState';
import { IOrder } from '@/store/OrdersSlice';

const isMock = false; // toggle to switch between mock data and supabase

// prepare sql scripts for supabase
// create schema, insert sample data
// prepare sample data from json files

// pickup drop time to be in checkout
// pickup drop in checkout page (new card)
// notes in checkout page

export const getProducts = async (): Promise<IProduct[]> => {
  if (isMock) {
    return productsMock;
  } else {
    const { data, error } = await supabase
  .from("products")
  .select(`
    *,
    productimages(*),
    productdescriptions(*),
    productvariants(
      *,
      productvariantoptions(*)
    )
  `)
  .eq("ispublished", true);

  if (error) {
    console.error("Error fetching products:", error);
    return [];
  }

  // 🛠️ Map productImages into a simple array of urls
  const mapped: IProduct[] = (data || []).map((product: any) => ({
    ...product,
    image: product.productimages && product.productimages.length > 0
      ? product.productimages[0].url
      : undefined,
    imageUrls: product.productimages
      ? product.productimages.map((img: any) => img.url)
      : [],
  }));

  console.log(mapped)

  return mapped;
  }
};

export const getCategories = async (): Promise<ICategory[]> => {
  if (isMock) {
    return categoriesMock;
  } else {
    return (await supabase
      .from("categories")
      .select("*")).data as ICategory[];
  }
};

export const getAppSettings = async (): Promise<IAppSettings> => {
  if (isMock) {
    return appSettingsMock;
  } else {
    const { data, error } = await supabase
      .from("branding")
      .select("data")
      .order("created_at", { ascending: false }) // latest first
      .limit(1)
      .single(); // get only the latest row

    if (error) {
      console.error("Error fetching app settings:", error.message);
      throw new Error(error.message);
    }

    if (!data) {
      throw new Error("No branding data found");
    }

    // data.data is JSONB column
    return data.data as IAppSettings;
  }
};

export async function createOrder(cartState: ICartState) {
  if(isMock) {
    return cartState;
  } else {
    const { data: userData } = await supabase.auth.getUser();
    const user = userData?.user;
    if (!user) {
      throw new Error('User not authenticated');
    }
    const { data, error } = await supabase
      .from('orders')
      .insert([
        {
          cartitems: cartState.cartitems,
          totalquantity: cartState.totalquantity,
          totalprice: cartState.totalprice,
          checkoutdata: cartState.checkoutdata,
          userid: user.id
        }
      ])
      .select(); // return inserted row(s)

    if (error) {
      console.error('Error creating order:', error);
      return null;
    }

    console.log('Order created:', data);

    return data[0];
  }
}

export async function getOrders(): Promise<IOrder[] | null> {
  if(isMock) {
    return [];
  }
  const { data: userData } = await supabase.auth.getUser();
  const user = userData?.user;
  if (!user) {
    return [];
  }
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .eq('userid', user.id)
    .order('created_at', { ascending: false }); // newest first

  if (error) {
    console.error('Error fetching orders:', error);
    return null;
  }

  // data is an array of orders with cartitems as JSON
  return data as IOrder[];
}

export async function updateOrder(id: string, updates: Partial<IOrder>): Promise<IOrder | null> {

  if(isMock) {
    return null;
  }

  console.log("Updating order:", id, updates);
  const { data, error } = await supabase
    .from("orders")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Error updating order:", error);
    return null;
  }

  return data as IOrder;
}
