import type { NextPage } from "next";
import styles from "@/styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.steps}>
          <div className={styles.bullet}>1</div>
          <div>SELECT DEALS</div>
          <div className={styles.line} />
          <div className={styles.bullet}>2</div>
          <div>EDIT COLLECTION</div>
          <div className={styles.line} />
          <div className={styles.bullet}>3</div>
          <div>CONFIRM</div>
        </div>
        <h1>Collection</h1>
        <p>
          Collection will help you show deals alongside each other and
          <br />
          nested within other collections.
        </p>
        <form className={styles.form}>
          <div>
            <select
              id="collection-type"
              name="collection-type"
              className={styles.collectionType}
            >
              <option value="collection">Collection</option>
              <option value="sub-collection">Sub - Collection</option>
            </select>
            <select
              id="sub-collection"
              name="sub-collection"
              placeholder="Sub-Collection Name"
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <input type="text" placeholder="Collection Name" />
          <input type="text" placeholder="Collection Description" />
        </form>
        <div className={styles.btnsContainer}>
          <button className={styles.btnCancel}>CANCEL</button>
          <button className={styles.btnBack}>BACK TO STEP 1</button>
          <button className={styles.btnProceed}>PROCEED</button>
        </div>
      </div>
    </main>
  );
};

export default Home;
