import LookingIcon from "@/assets/img/icons/looking.svg";
import EuroIcon from "@/assets/img/icons/euro.svg";
import LocationIcon from "@/assets/img/icons/location.svg";
import HouseIcon from "@/assets/img/icons/house.svg";
import InputField from "../components/InputField";

const Search = () => {
  return (
    <div className="search-container py-6 px-5.5 rounded-lg bg-white">
      <form className="grid lg:grid-cols-[repeat(4,minmax(0,1fr))_auto] md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
        <div className="">
          <InputField
            label="Looking For"
            icon={LookingIcon}
            placeholder="Enter Property Type"
          />
        </div>
        <div className="">
          <InputField label="Price" icon={EuroIcon} placeholder="10,000,000" />
        </div>
        <div className="">
          <InputField
            label="Location"
            icon={LocationIcon}
            placeholder="1 Person"
          />
        </div>
        <div className="">
          <InputField
            label="Property Type"
            icon={HouseIcon}
            placeholder="house, apartment..."
          />
        </div>

        <div className="flex items-end">
          <button
            type="submit"
            className="btn w-full justify-center bg-primary text-primary-foreground">
            Search Property
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
