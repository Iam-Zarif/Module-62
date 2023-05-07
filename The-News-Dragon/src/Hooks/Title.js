import { useEffect } from "react"

const Title = title =>{
  useEffect(() =>{
    document.title =`${title} - Dragon News`;

  },[title])
};

export default Title;