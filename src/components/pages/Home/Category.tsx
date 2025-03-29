import { useNavigationHelper } from "@/hooks/use-navigate-helper";

interface ICategory {
  id: number;
  name: string;
  imageUrl: string;
}

interface IProps {
  category: ICategory;
}

const Category = (props: IProps) => {
  
  const navigationHelper = useNavigationHelper();

  return (

          <div className="border-0 rounded-lg overflow-hidden duration-300">
            <div className="woo_cat_thumb">
            <a onClick={() => navigationHelper.goToProducts(props.category.id?.toString())}>
              <img
                src={props.category.imageUrl}
                className="img-fluid w-full h-[100px] w-auto mx-auto"
                alt={props.category.name}
              />
            </a>
            </div>
            <div className="text-center mt-2">
              <h4>
              <a
                onClick={() => navigationHelper.goToProducts(props.category.id?.toString())}
                className="text-sm font-semibold text-gray-800 hover:text-green-500 transition-colors duration-200 cursor-pointer"
              >
                {props.category.name}
              </a>
              </h4>
            </div>
          </div>
  );
};

export default Category;
