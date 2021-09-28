import Styles from "./main.module.scss";

interface Props {}

const Main: React.FC<Props> = (props) => {
  return (
    <main className={Styles.main}>
      <p className={Styles.main__details}>
        Use this wallet to play Track Games and other applications running on
        Track, an Ethereum sidechain.
      </p>
    </main>
  );
};

export default Main;
