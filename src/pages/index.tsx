import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { getAllCollections } from "@/utils/apiCalls";
import type { Collection } from "@/utils/types";
import styles from "@/styles/Home.module.scss";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const COLLECTION_TYPE = "collection-type";
const SUB_COLLECTION = "sub-collection";
const NAME = "name";
const DESCRIPTION = "description";

const NAME_REGEX = /^[a-zA-Z\s]*$/;

const INITIAL_VALUE = [
  {
    id: 1,
    name: "First collection",
  },
  {
    id: 2,
    name: "Second collection",
  },
];

const Home: NextPage = () => {
  const [collections, setCollections] = useState<Collection[]>(INITIAL_VALUE);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const watchedCollectionType = watch(COLLECTION_TYPE);

  const isSubCollectionDisabled: boolean =
    watchedCollectionType !== "sub-collection";

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    console.log("errors", errors);
  }, [errors]);

  /* useEffect(() => {
    (async () => {
      try {
        const collectionsData = await getAllCollections();
        setCollections(collectionsData);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []); */

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
              id={COLLECTION_TYPE}
              className={styles.collectionType}
              {...register(COLLECTION_TYPE)}
            >
              <option value="collection">Collection</option>
              <option value="sub-collection">Sub - Collection</option>
            </select>
            <select
              id={SUB_COLLECTION}
              placeholder="Sub-Collection Name"
              disabled={isSubCollectionDisabled}
              {...register(SUB_COLLECTION, { value: "" })}
            >
              {collections.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <input
            type="text"
            placeholder="Collection Name"
            {...register(NAME, {
              pattern: {
                value: NAME_REGEX,
                message: "Only letters are allowed",
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name={NAME}
            render={({ message }) => <p style={{ color: "red" }}>{message}</p>}
          />
          <input
            type="text"
            placeholder="Collection Description"
            {...register(DESCRIPTION)}
          />
        </form>
        <div className={styles.btnsContainer}>
          <button className={styles.btnCancel}>CANCEL</button>
          <button className={styles.btnBack}>BACK TO STEP 1</button>
          <button
            onClick={handleSubmit(onSubmit)}
            className={styles.btnProceed}
          >
            PROCEED
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
