import React from 'react';
import SectionCard from './SectionCard';
import ProductImg1 from '../assets/product-description 1.png';
import ProductImg2 from '../assets/product-description 2.png';
import ProductImg3 from '../assets/product-description 3.png';
import Service from './Service';

const ProductSection = () => {
  const productInfo1 = {
    serviceImg: ProductImg1,
    serviceName: 'Our Product',
    serviceInfo:
      `Our product is made on the base of our team’s careful research and analyses, ranging from internet based lorem application.`,
  };
  const productInfo2 = {
    serviceImg: ProductImg2,
    serviceName: 'Our Service',
    serviceInfo: `DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.
    `,
  };
  const productInfo3 = {
    serviceImg: ProductImg3,
    serviceName: 'Our Technology',
    serviceInfo:
      'First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.',
  };
  return (
    <>
    <h1 className='sectionTitle'>Product and Service</h1>
    <SectionCard>
      <Service productInfo={productInfo1} />
      <Service productInfo={productInfo2} />
      <Service productInfo={productInfo3} />
    </SectionCard>
    </>
  );
};

export default ProductSection;
