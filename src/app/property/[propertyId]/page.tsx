import { PropertyForRent } from "@/app/data/PropertyListing";
import { PropertyForsale } from "@/app/data/PropertyListing";
import SelectedProduct from "@/components/SelectedProduct";
import { Metadata } from "next";

type PageProps = {
  params: Promise<{ propertyId: string }>;
};
const combined = [...PropertyForsale, ...PropertyForRent];
export const generateStaticParams = async () => {
  return combined.map((property) => ({
    propertyId: property.id.toString(),
  }));
};
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { propertyId } = await params;
  const id = Number(propertyId);

  const property = combined.find((item) => item.id === id);

  if (!property) {
    return {
      title: "Property not found",
    };
  }

  return {
    title: `${property.heading} - Canan Realty`,
    description:
      property.paragraph ?? "Explore property details on Canan Realty.",
    category: property.category,
  };
}
const ProductDisplay = async ({ params }: PageProps) => {
  const { propertyId } = await params;
  const id = Number(propertyId);

  const properties = combined.find((item) => item.id === id);

  if (!properties) return <div>Property not found</div>;

  return <SelectedProduct properties={properties} />;
};

export default ProductDisplay;
