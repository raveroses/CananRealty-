// import ListFrontPage from "./component/ListFrontPage";
import Listing from "./component/Listing";
const CreateListing = () => {
  console.log(
    "Rendering on:",
    typeof window === "undefined" ? "server" : "client"
  );

  return (
    <>
      {/* <ListFrontPage /> */}
      <Listing />
    </>
  );
};

export default CreateListing;
