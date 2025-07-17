import { LandList } from "@/app/data/PropertyListing";
import SelectedProduct from "@/components/SelectedProduct";

type Prop = {
  params: {
    propertyId: string;
  };
  searchParams: { category?: string };
};

export const generateStaticParams = async () => {
  return LandList.map((property) => ({
    propertyId: property.id.toString(),
  }));
};

const ProductDisplay = async ({ params, searchParams }: Prop) => {
  const { propertyId } = await params;
  const { category } = await searchParams;

  const landproperties = LandList.find(
    (item) => item.category === category && item.id === Number(propertyId)
  );

  if (!landproperties) return <div>Property not found</div>;

  return <SelectedProduct landproperties={landproperties} />;
};

export default ProductDisplay;
