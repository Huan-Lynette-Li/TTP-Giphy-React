import react from "react";


function Giphy(props) {
  const { random, search, list, randomsearch, searching, trending } = props;

  return (
    <>
      {randomsearch &&
        random.map((element) => {
          return (
            <div className="container2"
               key={element.id}>
                  <a href={element.url}>
                    <img
                      src={element.images.fixed_height.url}
                      alt="gif"
                    ></img>
                  </a>
            </div>
          );
        })}
      {searching &&
        search.map((element) => {
          return (
            <div className="container2"
             key={element.id} >
                  <a href={element.url}>
                    <img
                      src={element.images.fixed_height.url}
                      alt="gif"
                    ></img>
                  </a>
            </div>
          );
        })}
      {trending &&
        list.map((element) => {
          return (
            <div className="container2"
              key={element.id}>
                  <a href={element.url}>
                    <img
                      src={element.images.fixed_height.url}
                      alt="gif"
                    ></img>
                  </a>
            </div>
          );
        })}
    </>
  );
}

export default Giphy;
