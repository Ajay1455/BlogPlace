import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function Home() {
  // const posts = [
  //   {
  //     id: 1,
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     img: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg",
  //     title: "Blog Post 1",
  //   },
  //   {
  //     id: 2,
  //     description: "Nulla tempor lacus quis velit fermentum, sed ullamcorper.",
  //     img: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg",
  //     title: "Blog Post 2",
  //   },
  //   {
  //     id: 3,
  //     description: "Fusce a velit tristique, aliquam sapien vel, varius est.",
  //     img: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg",
  //     title: "Blog Post 3",
  //   },
  //   {
  //     id: 4,
  //     description: "Praesent interdum ipsum eget turpis tincidunt varius.",
  //     img: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg",
  //     title: "Blog Post 4",
  //   },
  //   {
  //     id: 5,
  //     description: "Suspendisse fringilla ex a ipsum tristique eleifend.",
  //     img: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg",
  //     title: "Blog Post 5",
  //   },
  // ];

  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => {
          return (
            <div className="post" key={post.id}>
              <div className="img">
                <img src={`../upload/${post.img}`} alt={post.title} />
              </div>
              <div className="content">
                <h1>{post.title}</h1>
                <p>{getText(post.desc).slice(0, 400)}...</p>
                <Link className="link" to={`/post/${post.id}`}>
                  <button>Read More</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
