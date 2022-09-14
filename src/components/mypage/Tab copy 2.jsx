import styled from "styled-components";
import MyPageCalendar from "./MyPageCalendar";
import MyVideo from "../video/MyVideo";



function Tab() {

  return(
    <div class='tab_content'>
      <input type="radio" name="tabmenu" id="myCalendar" checked/>
      <label for = "myCalendar">my calendar</label>
      <input type="radio" name="tabmenu" id="myVideo"/>
      <label for = "myVideo">my video</label>
      
     <div class='conbox con1'>{MyPageCalendar}</div>
     <div class='conbox con2'>{MyVideo}</div>

    </div>
  );
}

export default Tab;

const StTap = styled.style`
input[type='radio'] {display:none}
input[type='radio'] + label {display:inline-block; font-size: 18px;color: #000;padding:20px 0px 5px 0px;hover{ color : #70CCA6;border-bottom: solid 2px #70CCA6; }}
input[type='radio']:checked + label { border-bottom: solid 2px #70CCA6; color : #70CCA6; }

.conbox 
input[id= "myCalendar"]:checked ~ .con1 {display:block;}
input[id= "MyVideo"]:checked ~ .con2 {display:block;}
`
{/* <style>  
input[type='radio'] {display:none}
input[type='radio'] + label {display:inline-block; font-size: 18px;color: #000;padding:20px 0px 5px 0px;hover{ color : #70CCA6;border-bottom: solid 2px #70CCA6; }}
input[type='radio']:checked + label { border-bottom: solid 2px #70CCA6; color : #70CCA6; }

.conbox 
input[id= "myCalendar"]:checked ~ .con1 {display:block;}
input[id= "MyVideo"]:checked ~ .con2 {display:block;}
</style> */}