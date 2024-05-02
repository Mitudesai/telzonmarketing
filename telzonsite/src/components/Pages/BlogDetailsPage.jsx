import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { pageTitle } from "../../helper";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
import Div from "../Div";
import Sidebar from "../Sidebar.jsx";
import Spacing from "../Spacing";
import PostStyle2 from "../Post/PostStyle2.jsx";
import SectionHeading from "../SectionHeading/index.jsx";
import RelatedPostStyle from "../Post/relatedPostStyle.jsx";
import { domain } from "../../hostDomainHelper.js";

export default function BlogDetailsPage() {
  const [post, setPost] = useState({});
  const [relatedPost, setRelatedPost] = useState([]);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const params = useParams();
  pageTitle("Blog Details");
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    async function getBlog() {
      // const res = await fetch("http://localhost:5173/api/post/getPosts");
      const res = await fetch(
        `${domain}/api/post/getposts?slug=${params.blogDetailsId}`
      );

      const data = await res.json();
      // console.log(data.posts);
      setPost(data.posts[0]);
    }
    getBlog();
  }, []);

  useEffect(() => {
    async function getRelatedBlogs() {
      // const res = await fetch("http://localhost:5173/api/post/getPosts");
      const res = await fetch(`${domain}/api/post/getposts?limit=3`);

      const data = await res.json();
      console.log(data.posts);
      setRelatedPost(data.posts);
    }
    getRelatedBlogs();
  }, []);

  return (
    <>
      {/* Start Page Heading Section */}
      {post && (
        <>
          <Div style={{ marginTop: "2rem" }}></Div>
          <PageHeading
            title={post.title}
            // bgSrc="/images/blog_details_hero_bg.jpeg"
            bgSrc="/images/blog_details_hero_bg"
            pageLinkText={new Date(post.createdAt).toDateString()}
            style={{ marginTop: "2rem" }}
          />
          {/* End Page Heading Section */}
          <Spacing lg="100" md="50" />
          <Div
            style={{
              width: "100%",
              // border: "2px solid red",
              textAlign: "center",
            }}
          >
            <img src={post.image} alt={post.title} style={{ margin: "auto" }} />
          </Div>
          {/* Start Blog Details */}
          <Spacing lg="100" md="50" />
          <Div className="container">
            <Div className="row">
              <Div className=" m-auto">
                {/* <span className="italic">
                  {post && (post.content.length / 1000).toFixed(0)} mins read
                </span> */}
                <Div className=" text-white  cs-blog-post cs-style2">
                  <div
                    className="p-3 max-w-2xl mx-auto w-full post-content"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  ></div>
                </Div>
                {/* End Details Post Content */}
              </Div>
              <Div className="col-xl-3 col-lg-4 offset-xl-1"></Div>
            </Div>
          </Div>
          <Spacing lg="150" md="80" />
        </>
      )}
      <Div className="container">
        <SectionHeading
          title="Related Articles"
          subtitle="Read Latest Articles"
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="45" />
      </Div>
      <Div className="related_posts_grid">
        {relatedPost.map((item, index) => (
          <Div key={index}>
            <RelatedPostStyle
              thumb={item.image}
              title={item.title}
              subtitle={item.subtitle}
              date={item.createdAt}
              category={item.category}
              categoryHref={item.categoryHref}
              href={item.slug}
            />
            {/* {postData.length > index + 1 && <Spacing lg="95" md="60" />} */}
          </Div>
        ))}
      </Div>
      {/* Start Blog Details */}

      {/* Start CTA Section */}
      {/* <Div className="container">
      <Cta
      title="Let’s disscuse make <b />something <i>cool</i> together"
      btnText="Apply For Meeting"
      btnLink="/contact"
      bgSrc="/images/cta_bg.jpeg"
        />
      </Div> */}
      {/* End CTA Section */}
    </>
  );
}
