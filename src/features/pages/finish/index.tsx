import Heading from "../../../components/heading";
import Footer from "./components/footer";
import Header from "./components/header";
import Styles from "./finish.module.scss";

interface Props {}

const Finish: React.FC<Props> = (props) => {
  return (
    <div className={`page ${Styles.page}`}>
      <Heading />
      <Header />
      <Footer />
    </div>
  );
};

export default Finish;
