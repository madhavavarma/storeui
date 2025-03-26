import { useNavigate, NavigateFunction } from 'react-router-dom';

class NavigationHelper {
  private navigate: NavigateFunction;

  constructor(navigate: NavigateFunction) {
    this.navigate = navigate;
  }

  goToHome = () => {
    this.navigate('/');
  };

  goToProducts = () => {
    this.navigate('/products');
  };

  goToProductDetail = (id: string | number) => {
    this.navigate(`/product/${id}`);
  };

  goToCart = () => {
    this.navigate('/cart');
  };
}

export const useNavigationHelper = () => {
  const navigate = useNavigate();
  return new NavigationHelper(navigate);
};
