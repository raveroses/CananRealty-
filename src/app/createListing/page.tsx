import ListFrontPage from "./component/ListFrontPage";
import Listing from "./component/Listing";
const CreateListing = () => {
  console.log(
    "Rendering on:",
    typeof window === "undefined" ? "server" : "client"
  );

  return (
    <div className="my-10">
      <ListFrontPage />
      <Listing />
    </div>
  );
};

export default CreateListing;
