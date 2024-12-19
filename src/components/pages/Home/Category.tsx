
interface ICategory {
  name: string;
  imageUrl: string;
}

interface IProps {
  category: ICategory;
}

const Category = (props: IProps) => {
  return (

          <div className="border-0 rounded-lg overflow-hidden duration-300">
            <div className="woo_cat_thumb">
              <a href={"#"}>
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
                  href={"#"}
                  className="text-sm font-semibold text-gray-800 hover:text-green-500 transition-colors duration-200"
                >
                  {props.category.name}
                </a>
              </h4>
            </div>
          </div>
  );
};

export default Category;
