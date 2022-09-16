import { React, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Thumnail from "../../assets/main/Thumnail.png";
import { useDispatch, useSelector } from "react-redux";
import { __addCertification } from "../../redux/modules/certificationSlice";
import { useNavigate } from "react-router-dom";


export default function VideoInput(props) {
  const { width, height } = props;

  const inputRef = useRef();
  const dispatch = useDispatch();
  const [source, setSource] = useState();
  const navigate = useNavigate();
  const [goalnumber, setGoalNumber] = useState(); 


  useEffect(() => {
    setGoalNumber(props.number);
  }, []);

  console.log(goalnumber)

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
  };

  const addVideo = () => {
    const formData = new FormData();
    formData.append("video", source);
    dispatch(__addCertification({
      formData,
      goalnumber
    }));
    // navigate("/", {replace: true});
    navigate("/");
  }

  const handleChoose = (event) => {
    inputRef.current.click();
  };

  return (
    <div className="VideoInput">
      <input
        ref={inputRef}
        className="VideoInput_input"
        type="file"
        onChange={handleFileChange}
        accept=".mov,.mp4"
        name="video"
        style={{ display: "none" }}
      />

      {!source && <Stbutton onClick={handleChoose}>Choose</Stbutton>}
      {source && (
        <video
          className="VideoInput_video"
          width="100%"
          height={height}
          controls
          src={source}
        />
      )}
      <button onClick={addVideo}>확인</button>
      {/* <div className="VideoInput_footer">{source || "Nothing selectd"}</div> */}
    </div>
  );
}


const Stbutton = styled.button`
  cursor:pointer;
`;