import { ShoppingCartIcon, DollarSignIcon, HeadphonesIcon } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const featuresData: Feature[] = [
  {
    title: 'Home Delivery',
    description: 'Enjoy hassle-free delivery, on us!.',
    icon: <ShoppingCartIcon className="text-4xl text-green-500" />,
  },
  {
    title: 'Money Back Guarantee',
    description: 'Not happy? Get a full refund, no questions asked.',
    icon: <DollarSignIcon className="text-4xl text-green-500" />,
  },
  {
    title: '24x7 Online Support',
    description: 'Always here, anytime you need us.',
    icon: <HeadphonesIcon className="text-4xl text-green-500" />,
  },
];

const Features = ({ bgColor = 'bg-gray-0' }: { bgColor?: string }) => {
  return (
    <div className={`${bgColor} mt-12 text-xs`}>
      <div className="flex flex-wrap justify-between gap-2">
        {featuresData.map(({ title, description, icon }, index) => (
          <div key={index} className="single_facts w-full md:w-[30%]">
            <Card className={`${bgColor} transition-shadow duration-300 border-0 px-2 text-4xl`}>
              <CardContent className="flex items-center justify-start">
                <div className="facts_icon mr-4 border-2 p-4">{icon}</div>
                <div className="facts_caption text-gray">
                  <h4 className="text-xs font-semibold mb-2">{title}</h4>
                  <p className="text-xs text-gray-400">{description}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
