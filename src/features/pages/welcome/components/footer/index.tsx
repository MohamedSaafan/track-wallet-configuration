import Styles from "./footer.module.scss";

interface Props {}

const Footer: React.FC<Props> = (props) => {
  return (
    <footer className={Styles.footer}>
      Need help? Join our{" "}
      <a href='#' className={Styles.footer__link}>
        Discord{" "}
      </a>{" "}
      server and visit the #support channel.
    </footer>
  );
};

export default Footer;
