import React from "react";

const ScrollToTop = () => {
  const styles = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: "9999",
    backgroundColor: "white",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    textAlign: "center",
    lineHeight: "50px",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    border: "1px solid #ccc",
    boxShadow: "0px 0px 10px #ccc",
    color: "#ccc",
    fontSize: "30px",
    fontWeight: "bold",
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    transform: "translateY(0px)",
    opacity: "1",
    "&:hover": {
      backgroundColor: "#ccc",
      color: "white",
      transform: "translateY(-5px)",
      opacity: "0.8",
      cursor: "pointer",
      boxShadow: "0px 0px 10px white",
    },
  };

  return (
    <div
      style={styles}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      {/* <i className="fas fa-chevron-up"></i>
       */}
      ^
    </div>
  );
};

export default ScrollToTop;
