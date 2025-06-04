import ProductCard from "./ProductCard";
import { tools } from "@/data/tools";

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {tools.map((tool) => (
        <ProductCard key={tool.name} name={tool.name} icon={tool.icon} description={tool.description} />
      ))}
    </div>
  );
}
