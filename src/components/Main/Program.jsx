import Image from "./Image";
import Time from "./Time";
import Info from "./Info";

const Program = ({
  time,
  src,
  title,
  subtitle,
  duration,
  direct,
  isUnseen,
}) => {
  console.log("src", { src });

  return (
    <section>
      <Time time={time} />
      <Image src={src} />
      <Info
        title={title}
        subtitle={subtitle}
        duration={duration}
        direct={direct && direct}
        isUnseen={isUnseen}
      />
    </section>
  );
};

export default Program;
