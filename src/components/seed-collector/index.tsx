import Styles from "./seed-collector.module.scss";

interface Props {}

const SeedCollector: React.FC<Props> = (props) => {
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleInput1Change = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <form onSubmit={handleSubmit} className={Styles.collector__inputs}>
      <label>
        {" "}
        <span> #1 </span>
        <input
          type='text'
          onChange={handleInput1Change}
          className={Styles.collector__input}
        />{" "}
      </label>
      <label>
        {" "}
        <span> #2 </span>
        <input
          type='text'
          onChange={handleInput1Change}
          className={Styles.collector__input}
        />{" "}
      </label>
      <label>
        {" "}
        <span> #3 </span>
        <input
          type='text'
          onChange={handleInput1Change}
          className={Styles.collector__input}
        />{" "}
      </label>
      <label>
        {" "}
        <span> #4 </span>
        <input
          type='text'
          onChange={handleInput1Change}
          className={Styles.collector__input}
        />{" "}
      </label>
      <label>
        {" "}
        <span> #5 </span>
        <input
          type='text'
          onChange={handleInput1Change}
          className={Styles.collector__input}
        />{" "}
      </label>
      <label>
        {" "}
        <span> #6 </span>
        <input
          type='text'
          onChange={handleInput1Change}
          className={Styles.collector__input}
        />{" "}
      </label>
      <label>
        {" "}
        <span> #7 </span>
        <input
          type='text'
          onChange={handleInput1Change}
          className={Styles.collector__input}
        />{" "}
      </label>
      <label>
        {" "}
        <span> #8 </span>
        <input
          type='text'
          onChange={handleInput1Change}
          className={Styles.collector__input}
        />{" "}
      </label>
      <label>
        {" "}
        <span> #9 </span>
        <input
          type='text'
          onChange={handleInput1Change}
          className={Styles.collector__input}
        />{" "}
      </label>

      <label>
        {" "}
        <span> #10 </span>
        <input
          type='text'
          onChange={handleInput1Change}
          className={Styles.collector__input}
        />{" "}
      </label>
      <label>
        {" "}
        <span> #11 </span>
        <input
          type='text'
          onChange={handleInput1Change}
          className={Styles.collector__input}
        />{" "}
      </label>
      <label>
        {" "}
        <span> #12 </span>
        <input
          type='text'
          onChange={handleInput1Change}
          className={Styles.collector__input}
        />{" "}
      </label>
    </form>
  );
};

export default SeedCollector;
