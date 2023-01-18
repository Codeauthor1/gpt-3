import HeaderTemp from "./HeaderTemp";

function Headers() {
  return (
    <section
      style={{
        display: "flex",
        // alignSelf: "baseline",
        width: "100%",
        height: "150px",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <HeaderTemp
        header="Chatbots"
        paragraph="We so opinion friends me message as delight. Whole front do of
          plate header oh ought"
      />
      <HeaderTemp
        header="Knowledgebase"
        paragraph="At jointure ladyship an insisted so humanity 
          he. Friendly bachelor enhance to on by. As 
          put impossible own apartment"
      />
      <HeaderTemp
        header="Education"
        paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          ducimus animi corrupti in dolorem! Vel necessitatibus voluptatum rerum
          beatae, animi eos!"
      />
    </section>
  );
}

export default Headers;
