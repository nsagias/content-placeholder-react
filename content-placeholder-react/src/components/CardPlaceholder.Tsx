import React, {useState} from "react";

function CardPlaceholder () {
const [contentLoading, setContentLoading] = useState();


 const header = <img src="https://images.unsplash.com/photo-1484788984921-03950022c9ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80" alt=""
      />;
 const title = "Lorem ipsum dolor sit amet.";
 const excerpt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nesciunt.";
 const profile_img = <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="" />;
 const name = "Jane Doe";
 const date = "Jan 12, 2022";

 const data = {
   header,
   title,
   excerpt,
   profile_img,
   name,
   date
 };

  
  // animated_bgs.forEach(bg => bg.classList.remove("animated-bg"));
  // animated_bg_texts.forEach(bg => bg.classList.remove("animated-bg-text"));

  
  // Add useEffect that sets content status, loading?
  return (
    <>
        <div className="card">
          <div className="card-header animated-bg" id="header">
            {data.header}&nbsp;
          </div>

          <div className="card-content">
            <h3 className="card-title animated-bg animated-bg-text" id="title">{data.title}</h3>
            <p className="card-excerpt" id="excerpt">{data.excerpt}
           
              <span className="animated-bg animated-bg-text">&nbsp;</span>
              <span className="animated-bg animated-bg-text">&nbsp;</span>
              <span className="animated-bg animated-bg-text">&nbsp;</span>
            </p>
            <div className="author">
              <div className="profile-img animated-bg" id="profile_img">
                {data.profile_img}
              </div>
              <div className="author-info">
                <strong className="animated-bg animated-bg-text" id="name">{data.name}</strong>
                <small className="animated-bg animated-bg-text" id="date">{data.date}</small>
              </div>
            </div>
          </div>
      </div>

    </>
  );
}

export default CardPlaceholder;