import React, {useState, useEffect} from "react";



interface Data {
  header: any;
  headerImgData: string; 
  headerImgAlt: string;
  title: string;
  excerpt: string;
  profileImg: any;
  profileImgData: string;
  profileImgAlt: string;
  name: string;
  date: string;
}

const headerImgAlt = "";
const headerImgData = "https://images.unsplash.com/photo-1484788984921-03950022c9ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80";
const title = "Lorem ipsum dolor sit amet.";
const excerpt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nesciunt.";
const profileImgAlt = "";
const profileImgData = "https://randomuser.me/api/portraits/women/45.jpg";
const name = "Jane Doe";
const date = "Jan 12, 2022";
const header = <img src={headerImgData} alt={headerImgAlt}/>;
const profileImg = <img src={profileImgData} alt={profileImgAlt} />;

 

const profileData: Data = {
  header,
  headerImgData,
  headerImgAlt,
  title,
  excerpt,
  profileImg,
  profileImgData,
  profileImgAlt,
  name,
  date
};


function CardPlaceholder () {
  const [contentLoading, setContentLoading] = useState(true);

  const isLoadingLogicBgText = contentLoading ? "animated-bg animated-bg-text" : "";
  const isLoadingLogicBg = contentLoading ? "animated-bg" : "";
  
  const [header, setHeader]= useState("");
  const [headerImgData, setHeaderImgData]= useState("");
  const [headerImgAlt, setHeaderImgAlt]= useState("");
  const [title, setTitle]= useState("");
  const [excerpt, setExcerpt]= useState("");
  const [profileImg, setProfileImg]= useState("");
  const [profileImgData, setProfileImgData]= useState("");
  const [profileImgAlt, setProfileImgAlt]= useState("");
  const [name, setName ]= useState("");
  const [date, setDate ]= useState("");
  
  // const header = <img src={headerImgData} alt={headerImgAlt}/>;
  // const profileImg = <img src={profileImgData} alt={profileImgAlt} />;
 
  const dataHandler = () => {
      setHeader(profileData.header);
      setHeaderImgData(profileData.headerImgData);
      setHeaderImgAlt(profileData.headerImgAlt);
      setTitle(profileData.title);
      setExcerpt(profileData.excerpt);
      setProfileImg(profileData.profileImg);
      setProfileImgData(profileData.profileImgData);
      setProfileImgAlt(profileData.profileImgAlt);
      setName(profileData.name);
      setDate(profileData.date);
      setContentLoading(false);
  };

  useEffect(() => {
    setInterval(dataHandler, 5000);
  });
 
  return (
    <>
        <div className="card">
          <div className={`card-header ${isLoadingLogicBg}`} id="header">
            {header}&nbsp;
          </div>

          <div className="card-content">
            <h3 className={`card-title  ${isLoadingLogicBgText}`} id="title">{title ? title : ""}</h3>
            <p className="card-excerpt" id="excerpt">{excerpt}
              <span className={`${isLoadingLogicBgText}`}>&nbsp;</span>
              <span className={`${isLoadingLogicBgText}`}>&nbsp;</span>
              <span className={`${isLoadingLogicBgText}`}>&nbsp;</span>
            </p>
            <div className="author">
              <div className={`profile-img ${isLoadingLogicBg}`} id="profile_img">
                {profileImg}
              </div>
              <div className="author-info">
                <strong className={`${isLoadingLogicBgText}`} id="name">{name}</strong>
                <small className={`${isLoadingLogicBgText}`} id="date">{date}</small>
              </div>
            </div>
          </div>
      </div>

    </>
  );
}

export default CardPlaceholder;