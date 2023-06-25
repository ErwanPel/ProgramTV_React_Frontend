import Title from "./Title";
import Subtitle from "./Subtitle";
import Duration from "./Duration";
import Tag from "./Tag";

const Info = ({ title, subtitle, duration, direct, isUnseen }) => {
  return (
    <div className="program_info">
      <Title title={title} />
      <Subtitle subtitle={subtitle} />
      <div>
        <Duration duration={duration} />
        <Tag
          className="red"
          direct={direct && direct}
          isUnseen={isUnseen && isUnseen}
        />
      </div>
    </div>
  );
};

export default Info;
