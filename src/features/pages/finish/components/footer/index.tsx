import Styles from "./footer.module.scss";

interface Props {}

const Footer: React.FC<Props> = (props) => {
  return (
    <footer className={Styles.footer}>
      <p className={Styles.footer__p}>
        Remenber to keep your seed phrase safe, it’s your responsability.
      </p>
      <p className={Styles.footer__p}>
        Track cannot recover your seed phrase. if you ever have questions or see
        something fishy, email us{" "}
        <a href='#' target='_blank'>
          hello@track.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
