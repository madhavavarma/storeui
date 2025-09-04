import productsMock from '../assets/json/products.json';
import categoriesMock from '../assets/json/categories.json';
import { IProduct } from '@/interfaces/IProduct';
import { ICategory } from '@/interfaces/ICategory';
import { IAppSettings } from '@/interfaces/IAppSettings';
import appSettingsMock from '../assets/json/appSettings.json';
import { supabase } from '@/supabaseClient';

export const isMock = false; // Toggle this to false for real API calls


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
