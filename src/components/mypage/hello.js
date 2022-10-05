/**
 * @param { 'success' | 'fail' } type
 * @returns { { circleCss: { color: string, backgroundColor: string }, leftCircleCss: { color: string, backgroundColor: string }, rightCircleCss: { color: string, backgroundColor: string }, squareCss: { color: string, backgroundColor: string } } }
 */
function getCalenderCss(type) {
  if (type === "success") {
    const leftCircleCss = {
      color: "#fff",
      backgroundColor: "#70CCA6",
      borderRadius: "50% 0 0 50%",

      height: "40px",
      width: "40px",
      border: "0",
      transform: "translate(6px,0)",
    };
    const rightCircleCss = {
      color: "#fff",
      backgroundColor: "#70CCA6",
      borderRadius: "0 50% 50% 0",
      height: "40px",
      width: "40px",
      border: "0",
    };
    const squareCss = {
      color: "#fff",
      backgroundColor: "#70CCA6",
      borderRadius: "0 0 0 0",
      height: "40px",
    };
    return {
      leftCircleCss,
      rightCircleCss,
      squareCss,
    };
  } else {
    const circleCss = {
      color: "#fff",
      backgroundColor: "#EEAE67",
      height: "40px",
      width: "40px",
    };
    const leftCircleCss = {
      color: "#fff",
      backgroundColor: "#EEAE67",
      borderRadius: "50% 0 0 50%",
      height: "40px",
      width: "40px",
      border: "0",
      transform: "translate(6px,0)",
    };
    const rightCircleCss = {
      color: "#fff",
      backgroundColor: "#EEAE67",
      borderRadius: "0 50% 50% 0",
      height: "40px",
      width: "40px",
      border: "0",
    };
    return {
      circleCss,
      leftCircleCss,
      rightCircleCss,
    };
  }
}

export default getCalenderCss;
