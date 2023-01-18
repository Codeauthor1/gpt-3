import PropTypes from "prop-types";

import Image from "../Img";

import BrandImages from "./BrandImages";

function Brand() {
  const brands = BrandImages();
  return (
    <section style={containerStyle}>
      <div style={containerImageStyle}>
        {brands.map((brand) => {
          return (
            <Image
              key={brand.id}
              src={brand.src}
              alt={brand.alt}
              width="30px"
              height="30px"
              imageStyle={{
                width: "50%",
                height: "100%",
                cursor: "pointer",
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "15%",
  width: "100%",
};
const containerImageStyle = {
  display: "flex",
  justifyContent: "space-between",
  flexBasis: "80%",
};

Brand.propTypes = {
  containerStyle: PropTypes.object,
};
export default Brand;
