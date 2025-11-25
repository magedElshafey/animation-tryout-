import AboutSection from "@/components/common/aboutSection/AboutSection";
import CartTableSkeleton from "../../components/common/loader/skeltons/CartTableSkeleton";
import CategorySkelton from "../../components/common/loader/skeltons/CategorySkelton";
import ContactInfoSkeleton from "../../components/common/loader/skeltons/ContactInfoSkeleton";
import CustomSkeleton from "../../components/common/loader/skeltons/CustomSkeleton";
import EditProfileSkeleton from "../../components/common/loader/skeltons/EditProfileSkeleton";
import FAQSkeleton from "../../components/common/loader/skeltons/FAQSkeleton";
import FullImageSkeleton from "../../components/common/loader/skeltons/FullImageSkeleton";
import PaymentMethodsSkeleton from "../../components/common/loader/skeltons/PaymentMethodsSkeleton";
import ProductDetailsSkeleton from "../../components/common/loader/skeltons/ProductDetailsSkeleton";
import ProductSkelton from "../../components/common/loader/skeltons/ProductSkelton";
import SliderSkeleton from "../../components/common/loader/skeltons/SliderSkelton";
import AreaOfInterest from "@/components/common/areaOfInterest/AreaOfInterest";

const HomePage = () => {
  return (
    <>
      <AboutSection />
      <AreaOfInterest />
    </>
  );
};

export default HomePage;
