import type { IconType } from "react-icons";

interface ProductCardProps {
  name: string;
  icon: IconType;
  description: string;
}

export default function ProductCard({ name, icon: Icon, description }: ProductCardProps) {
  return (
    <div className="p-4 border rounded-lg flex items-start space-x-4 bg-white shadow-sm">
      <Icon className="w-8 h-8 text-gray-500 flex-shrink-0" />
      <div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
