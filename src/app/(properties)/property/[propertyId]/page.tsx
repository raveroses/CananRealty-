import { PropertyForRent } from "@/app/data/PropertyListing";
import { PropertyForsale } from "@/app/data/PropertyListing";
import SelectedProduct from "@/components/SelectedProduct";

type Prop = {
  params: {
    propertyId: string;
  };
  searchParams: { category?: string };
};
const combined = [...PropertyForsale, ...PropertyForRent];
export const generateStaticParams = async () => {
  return combined.map((property) => ({
    propertyId: property.id.toString(),
  }));
};

const ProductDisplay = async ({ params, searchParams }: Prop) => {
  const { propertyId } = await params;
  const { category } = await searchParams;

  const properties = combined.find(
    (item) => item.category === category && item.id === Number(propertyId)
  );

  if (!properties) return <div>Property not found</div>;

  return <SelectedProduct properties={properties} />;
};

export default ProductDisplay;
