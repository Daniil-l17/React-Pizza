import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="587" cy="579" r="122" /> 
    <circle cx="130" cy="129" r="111" /> 
    <rect x="12" y="257" rx="0" ry="0" width="249" height="30" /> 
    <rect x="10" y="309" rx="0" ry="0" width="251" height="73" /> 
    <rect x="14" y="414" rx="0" ry="0" width="102" height="35" /> 
    <rect x="155" y="414" rx="0" ry="0" width="102" height="35" />
  </ContentLoader>
)

export default Skeleton