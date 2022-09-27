import { useState } from "react";

import likeimg from "../../assets/community/like.svg";
import unLikeimg from "../../assets/community/unLike.svg";

function OnLike({ islike }) {
  const [like, setLike] = useState(islike);
  if (like) {
    return likeimg;
  } else {
    return unLikeimg;
  }
}

export default OnLike;
