
function LeftArrow(props){
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: " rgba(197, 190, 190, 0.194)",
        height: "5rem",
        width: "3rem",
        marginLeft: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4px",
        }}
      onClick={onClick}
    ></div>
  );
};

export default LeftArrow;