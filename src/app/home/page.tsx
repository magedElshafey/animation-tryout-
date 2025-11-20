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

const HomePage = () => {
  return (
    <div>
      <SliderSkeleton />
      <ProductSkelton />
      <CategorySkelton />
      <FullImageSkeleton />
      <ContactInfoSkeleton />
      <PaymentMethodsSkeleton />
      <div className="my-4">
        <FAQSkeleton />
      </div>
      <div className="my-4">
        <CustomSkeleton />
      </div>
      <div className="my-4">
        <ProductDetailsSkeleton />
      </div>
      <div className="my-4">
        <EditProfileSkeleton />
      </div>
      <div className="my-4">
        <CartTableSkeleton />
      </div>
    </div>
  );
};

export default HomePage;
