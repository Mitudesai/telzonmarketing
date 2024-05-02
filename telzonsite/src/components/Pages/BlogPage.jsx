import React, { useEffect, useState } from "react";
import { pageTitle } from "../../helper";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
import Pagination from "../Pagination";
import PostStyle2 from "../Post/PostStyle2";
import Div from "../Div";
import Sidebar from "../Sidebar.jsx";
import Spacing from "../Spacing";
import SectionHeading from "../SectionHeading/index.jsx";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { domain } from "../../hostDomainHelper.js";

const postData = [
  {
    thumb: "/images/post_4.jpeg",
    title: "A.I will take all human job within next year",
    subtitle:
      "Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Tortor posuere ac ut consequat semper viverra nam libero justo. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Purus sit amet luctus venenatis lectus. Nunc aliquet bibendum enim facilisis. Pretium viverra suspendisse potenti nullam ac tortor vitae.",
    date: "07 Mar 2022",
    category: "Tech",
    categoryHref: "/blog",
    href: "/blog/blog-details",
  },
  {
    thumb: "/images/post_5.jpeg",
    title: "Creative studio programm coming soon",
    subtitle:
      "Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Tortor posuere ac ut consequat semper viverra nam libero justo. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Purus sit amet luctus venenatis lectus. Nunc aliquet bibendum enim facilisis. Pretium viverra suspendisse potenti nullam ac tortor vitae.",
    date: "05 Mar 2022",
    category: "Photography",
    categoryHref: "/blog",
    href: "/blog/blog-details",
  },
  {
    thumb: "/images/post_6.jpeg",
    title: "Artistic mind will be great for creation",
    subtitle:
      "Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Tortor posuere ac ut consequat semper viverra nam libero justo. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Purus sit amet luctus venenatis lectus. Nunc aliquet bibendum enim facilisis. Pretium viverra suspendisse potenti nullam ac tortor vitae.",
    date: "04 Mar 2022",
    category: "Tech",
    categoryHref: "/blog",
    href: "/blog/blog-details",
  },
];

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  pageTitle(
    "Telzon Marketing Blog | Latest Digital Marketing Trends - Pune & Nagpur"
  );

  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    async function getBlogs() {
      // const res = await fetch("http://localhost:5173/api/post/getPosts");
      let data;
      if (pageNo !== 0) {
        const res = await fetch(
          `${domain}/api/post/getposts?startIndex=${pageNo * 6}?limit=6?`
        );

        data = await res.json();
      } else {
        const res = await fetch(`${domain}/api/post/getposts?limit=6`);

        data = await res.json();
      }
      // console.log(data.posts);
      setPosts(data.posts);
    }
    getBlogs();
  }, [pageNo]);

  function handlePageIncrease() {
    if (pageNo * 6 < postData.length) setPageNo(pageNo + 1);
    // console.log(pageNo);
  }
  function handlePageReduce() {
    // console.log(postData.length);
    if (pageNo > 0) setPageNo(pageNo - 1);
    // console.log(pageNo);
  }
  return (
    <>
      {/* <PageHeading
        title="Our Blog"
        bgSrc="/images/blog_hero_bg.jpeg"
        pageLinkText="Blog"
      /> */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <SectionHeading
            title="Read The Latest Trends In The World Of Business!!"
            subtitle="Latest Posts"
            variant="cs-style1 text-center"
          />
          <Spacing lg="65" md="45" />
          <Div className="posts_grid">
            {posts.map((item, index) => (
              <Div key={index}>
                <PostStyle2
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
            <Spacing lg="60" md="40" />
          </Div>
          <Spacing lg="60" md="40" />

          {/* <Pagination /> */}
          <ul className="cs-pagination_box cs-center cs-white_color cs-mp0 cs-semi_bold ">
            <li>
              <Link
                onClick={handlePageReduce}
                to="#"
                className="cs-pagination_item cs-center"
              >
                <Icon icon="akar-icons:chevron-left" />
              </Link>
            </li>
            <li>
              <Link
                onClick={handlePageIncrease}
                to="#"
                className="cs-pagination_item cs-center"
              >
                <Icon icon="akar-icons:chevron-right" />
              </Link>
            </li>
          </ul>

          {/* <Div className="col-xl-3 col-lg-4 offset-xl-1">
            <Spacing lg="0" md="80" />
            <Sidebar />
          </Div> */}
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </>
  );
}
