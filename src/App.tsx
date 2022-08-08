import React from 'react';
import './App.css';
import {Image} from "./components/Image";
import {ImageTypes} from "./components/Image/constants";
import Intro from "./components/Intro";
import Upload from "./components/Upload/Upload";

function App() {
  return (
    <div className="App">
      {/*<Image type={ImageTypes.introCircles}/>*/}
      {/*<Image type={ImageTypes.introBlocks}/>*/}
      {/*<Image width={55} height={60} type={ImageTypes.companyLogo}/>*/}
      {/*<Image type={ImageTypes.companyName}/>*/}
      {/*<Image type={ImageTypes.successIcon}/>*/}
      {/*<Image type={ImageTypes.checkItem}/>*/}
      {/*<Image type={ImageTypes.maskGroup}/>*/}
      {/*<Image type={ImageTypes.maskGroupRegistration}/>*/}
        <Intro />
        {/*<Upload />*/}
    </div>
  );
}

export default App;
