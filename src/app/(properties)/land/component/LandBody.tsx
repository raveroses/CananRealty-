"use client";
import { useRouter } from "next/navigation";
import { FaRegHeart } from "react-icons/fa";
import PropertyListing from "@/app/data/PropertyListing";

const LandBody = () => {
  const router = useRouter();
  const viewProduct = (id: number, service: string, category: string) => {
    router.push(`property/${id}?service=${service}?category=${category}`);
  };
  return (
    <section className="md:px-20 px-[10px]  my-20">
      <div className="flex items-center justify-between">
        <div className="heads">
          <h1 className="md:text-[30px] text-[25px] font-bold">Residential</h1>
          <p className="text-[15px]">25 Residential Land Found </p>
        </div>

        <div className="category grid md:grid-cols-4 grid-cols-2 items-center md:gap-[20px] gap-[10px]">
          <div className="bg-black text-center text-white md:text-[13px] text-[12px] py-1 px-2 rounded">
            Residential
          </div>
          <div className="bg-black text-center text-white md:text-[13px] text-[11px]  py-1 px-3 rounded">
            Commercial
          </div>
          <div className="bg-black text-center text-white md:text-[13px] text-[12px]  py-1 px-2 rounded">
            Farm
          </div>
        </div>
      </div>

      <section className=" grid md:grid-cols-4 grid-cols-2 md:gap-15 gap-5 items-center mt-10">
        {PropertyListing &&
          PropertyListing.map((property, index) => {
            return (
              <div
                key={index}
                className="relative max-w-full md:w-[220px] w-[210px]  h-[190px] rounded-xl relative"
                style={{
                  backgroundImage: `url(${property.image})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="loveIcon absolute top-4 right-4 text-white text-[20px]">
                  <FaRegHeart />
                </div>
                <div
                  className="bg-white absolute md:top-35 top-30 md:left-2 flex md:gap-12 left-3 gap-7 
                 p-[5px] rounded"
                >
                  <div>
                    <h3 className="text-[11px]">{property.heading}</h3>
                    <p className="text-[10px]">{property.paragraph}</p>
                  </div>
                  <button
                    className="text-[10px] border-1 px-3  py-0 rounded bg-[#1266e3] text-white"
                    onClick={() =>
                      viewProduct(
                        property.id,
                        property.service,
                        property.category
                      )
                    }
                  >
                    {property.view}
                  </button>
                </div>
              </div>
            );
          })}
      </section>
    </section>
  );
};

export default LandBody;
