import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "../lib/media";
// import Image from "./image";

const Card = ({ article }) => {
  // console.log("images", article.attributes.image);

  const imageUrl = getStrapiMedia(article.attributes.image);

  const myLoader = () => {
    return `${imageUrl}`;
  };

  console.log("imageURl", imageUrl);

  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            {/* <Image image={imageUrl} alt="" /> */}
            <Image
              src={`${imageUrl}`}
              alt=""
              width={400}
              height={400}
              loader={myLoader}
            />
          </div>
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {article.attributes.category.data.attributes.name}
            </p>
            <p id="title" className="uk-text-large">
              {article.attributes.title}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
