import React from "react";

import introCircles from '../../assets/images/introCircles.svg';
import introBlocks from '../../assets/images/introBlocks.svg';
import companyLogo from '../../assets/images/companyLogo.svg';
import companyName from '../../assets/images/companyName.svg';
import successIcon from '../../assets/images/successIcon.svg';
import checkItem from '../../assets/images/checkItem.svg';
import maskGroup from '../../assets/images/maskGroup.png';
import maskGroupRegistration from '../../assets/images/maskGroupRegistration.png';
import { ImageTypes } from "./constants";

interface IProps {
  type: ImageTypes;
  className?: string;
  width?: number;
  height?: number;
}

export const Image: React.FC<IProps> = ({type, className, width, height}) => {
  switch(type) {
    case ImageTypes.introCircles: {
      return <img className={className} width={width} height={height} src={introCircles} alt="intro circles"/>
    }
    case ImageTypes.introBlocks: {
      return <img className={className} width={width} height={height} src={introBlocks} alt="intro blocks"/>
    }
    case ImageTypes.companyLogo: {
      return <img className={className} width={width} height={height} src={companyLogo} alt="company logo"/>
    }
    case ImageTypes.companyName: {
      return <img className={className} width={width} height={height} src={companyName} alt="company name"/>
    }
    case ImageTypes.successIcon: {
      return <img className={className} width={width} height={height} src={successIcon} alt="success icon"/>
    }
    case ImageTypes.checkItem: {
      return <img className={className} width={width} height={height} src={checkItem} alt="check item"/>
    }
    case ImageTypes.maskGroup: {
      return <img className={className} width={width} height={height} src={maskGroup} alt="mask group"/>
    }
    case ImageTypes.maskGroupRegistration: {
      return <img className={className} width={width} height={height} src={maskGroupRegistration} alt="mask group registration"/>
    }
    default: {
      return null;
    }
  }
}