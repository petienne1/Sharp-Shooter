import React from 'react';
// import SweetScroll from 'sweet-scroll';

const PlayerProfile = (props) => {
  // we can do anything here
  console.log(props);
  //
  const info = props.playerInfo.commonPlayerInfo[0];
  // Object Destructuring
  const { firstName, lastName } = info;
  // const string = `stuff ${1 + 1} put whatever we want ${1 > 2} more stuff`
  const { teamCode } = info;

  let image;
  const setDefaultImg = () => image.src = '/Style/images/profile/silhouette.png'

  return (
    <div className="profile-container">
      <div className="profile-pic-item" >
        <img
          src={`/Style/images/profile/${firstName + lastName}.png`}
          alt=" "
          ref={img => image = img}
          onError={setDefaultImg}
        />
      </div>
      <div className="profile-name-item">{ info.firstName + ' ' + info.lastName }</div>
      <div className="profile-logo-item">
        <img
          src={`/Style/images/logo/${teamCode}.png`}
          alt=" "
          ref={img => image = img}
        />
      </div>
      { /* <div className="profile-name-item">{ `${firstName} ${lastName}` }</div> */}
      <p>{'Team: ' + info.teamCity + ' ' + info.teamName}</p>
      <p>{'Position: ' + info.position}</p>
      <p>{'Height: ' + info.height}</p>
      <p>{'Weight: ' + info.weight}</p>
      <p>{'Jersey: ' + info.jersey}</p>
      <p>{'School: ' + info.school}</p>
      <p>{'Experience: ' + info.seasonExp}</p>
      {/* }<p>{JSON.stringify(props)}</p> */}
    </div>
  );
};

export default PlayerProfile;
