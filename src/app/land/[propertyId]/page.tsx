import { LandList } from "@/app/data/PropertyListing";
import SelectedProduct from "@/components/SelectedProduct";
import { Metadata } from "next";

type PageProps = {
  params: Promise<{ propertyId: string }>;
};

export const generateStaticParams = async () => {
  return LandList.map((property) => ({
    propertyId: property.id.toString(),
  }));
};
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { propertyId } = await params;
  const id = Number(propertyId);

  const property = LandList.find((item) => item.id === id);

  if (!property) {
    return {
      title: "Property not found",
    };
  }

  return {
    title: `${property.names} - Canan Realty`,
    description: "Explore property details on Canan Realty.",
    category: property.category,
  };
}

const ProductDisplay = async ({ params }: PageProps) => {
  const { propertyId } = await params;
  const id = Number(propertyId);
  const landproperties = LandList.find((item) => item.id === id);

  if (!landproperties) return <div>Property not found</div>;

  return <SelectedProduct landproperties={landproperties} />;
};

export default ProductDisplay;
