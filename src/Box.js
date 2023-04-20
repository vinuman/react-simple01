const Box = ({ colorValue }) => {
  return (
    <div className="box" style={{ backgroundColor: colorValue }}>
      <p>{colorValue ? colorValue : "Empty value"}</p>
    </div>
  );
};

Box.defaultProps = {
  colorValue: "Empty Color value",
};

export default Box;
