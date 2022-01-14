import React, {useState} from "react";



interface Data {
  header: any;
  headerData: string; 
  headerAlt: string;
  title: string;
  excerpt: string;
  profileImg: any;
  profileImgData: string;
  profileImgAlt: string;
  name: string;
  date: string;
}



function CardPlaceholder () {
  const [contentLoading, setContentLoading] = useState(true);

  const isLoadingLogicBgText = contentLoading ? "animated-bg animated-bg-text" : "";
  const isLoadingLogicBg = contentLoading ? "animated-bg" : "";
  

  const headerAlt = "";
  const headerData = "https://images.unsplash.com/photo-1484788984921-03950022c9ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80";
  const header = <img src={headerData} alt={headerAlt}/>;
  const title = "Lorem ipsum dolor sit amet.";
  const excerpt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nesciunt.";
  
  const profileImgAlt = "";
  const profileImgData = "https://randomuser.me/api/portraits/women/45.jpg";

  const profileImg = <img src={profileImgData} alt={profileImgAlt} />;
  const name = "Jane Doe";
  const date = "Jan 12, 2022";


  const data: Data = {
    header,
    headerData: "",
    headerAlt: "",
    title: "",
    excerpt: "",
    profileImg: "",
    profileImgData: "",
    profileImgAlt: "",
    name: "",
    date: ""
  };



  // Add useEffect that sets content status
  return (
    <>
        <div className="card">
          <div className={`card-header ${isLoadingLogicBg}`} id="header">
            {data.header}&nbsp;
          </div>

          <div className="card-content">
            <h3 className={`card-title  ${isLoadingLogicBgText}`} id="title">{data ? data.title : ""}</h3>
            <p className="card-excerpt" id="excerpt">{data.excerpt}
              <span className={`${isLoadingLogicBgText}`}>&nbsp;</span>
              <span className={`${isLoadingLogicBgText}`}>&nbsp;</span>
              <span className={`${isLoadingLogicBgText}`}>&nbsp;</span>
            </p>
            <div className="author">
              <div className={`profile-img ${isLoadingLogicBg}`} id="profile_img">
                {data.profileImg}
              </div>
              <div className="author-info">
                <strong className={`${isLoadingLogicBgText}`} id="name">{data.name}</strong>
                <small className={`${isLoadingLogicBgText}`} id="date">{data.date}</small>
              </div>
            </div>
          </div>
      </div>

    </>
  );
}

export default CardPlaceholder;