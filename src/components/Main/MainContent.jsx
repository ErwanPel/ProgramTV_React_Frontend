import Program from "./Program";

const MainContent = ({ data }) => {
  return (
    <main>
      {data.map((element, index) => {
        return (
          <>
            <Program
              key={index}
              time={element.time}
              src={element.image}
              title={element.title}
              subtitle={element.type}
              duration={element.duration}
              direct={element.direct && element.direct}
              isUnseen={element.isUnseen}
            />
            <hr></hr>
          </>
        );
      })}

      {/* <Program
        hour="18h45"
        src=""
        alt=""
        title="Tous en cuisine, en direct avec Cyril Lignac"
        subtitle="Magazine culinaire"
        duration="1h"
      />
      */}
    </main>
  );
};

export default MainContent;
