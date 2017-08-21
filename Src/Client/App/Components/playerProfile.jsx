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

  let image;
  const setDefaultImg = () => image.src = '/Style/images/profile/russellwestbrook.png'

  return (
    <div className="profile-container">
      <div className="profile-pic-item" >
        <img src={`/Style/images/profile/${firstName + lastName}.png`}
          ref={img => image = img}
          onError={setDefaultImg} />
      </div>
      <div className="profile-name-item">{ info.firstName + ' ' + info.lastName }</div>
        {/*<div className="profile-name-item">{ `${firstName} ${lastName}` }</div>*/}
      <p>{JSON.stringify(props)}</p>
    </div>
  );
}

export default PlayerProfile;
