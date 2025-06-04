import Navbar from "@/components/Navbar";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
import ToolboxHeader from "@/components/ToolboxHeader";
import ProductList from "@/components/ProductList";

export default function ToolboxPage() {
  return (
    <main className="flex min-h-screen flex-col px-6 py-8 bg-gray-50">
      <Navbar />
      <div className="max-w-5xl mx-auto w-full mt-8">
        <ToolboxHeader />
        <ProductList />
      </div>
      <Subscribe />
      <Footer />
    </main>
  );
}
