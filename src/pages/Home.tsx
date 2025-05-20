import ChooseFood from "../assets/components/ChooseFood";

function Home() {
  return (
    <>
      <ChooseFood position="left" />
      <ChooseFood position="right" />
      {/* <div style={{ margin: "100px" }}>
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          whileInView={{ opacity: 1, rotate: 360 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <img
            src="./src/assets/images/burger-image.jpg"
            style={{ width: "500px", margin: "100px" }}
          ></img>
        </motion.div>
      </div> */}
    </>
  );
}

export default Home;
