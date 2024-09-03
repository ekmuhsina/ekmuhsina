import React from 'react';
import Star from '../../../../public/star.svg';
import StarHalf from '../../../../public/star-half.svg';
import StarFill from '../../../../public/star-fill.svg';
import Image from 'next/image';

function ProductRating(props: any) {
  const { rate } = props;

  const stars: JSX.Element[] = [];
  const maxRating = 5;

  for (let i = 1; i <= maxRating; i++) {
    if (rate >= i) {
      stars.push(<Image key={i} src={StarFill} alt={`star-Fill-${i}`} />);
    } else if (rate + 0.5 === i) {
      stars.push(<Image key={i} src={StarHalf} alt={`star-half-${i}`} />);
    } else {
      stars.push(<Image key={i} src={Star} alt={`star-${i}`} />);
    }
  }
  return <>{stars}</>;
}
export default ProductRating;