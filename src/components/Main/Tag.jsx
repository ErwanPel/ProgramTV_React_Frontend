const Tag = ({ direct, isUnseen, className }) => {
  let special = "";
  if (direct) special = " • Direct";
  if (isUnseen) special = "• Inédit";
  return <span className={className}>{special}</span>;
};

export default Tag;
