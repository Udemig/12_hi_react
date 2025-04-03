import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";

const List = () => {
  const [tweets, setTweets] = useState(null);

  useEffect(() => {
    // kolleksiyon referansını al
    const collectionRef = collection(db, "tweets");

    // sorgu ayarlını yap
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    // kolleksiyona abone ol
    const unsub = onSnapshot(q, (docs) => {
      const temp = [];

      docs.forEach((doc) => temp.push({ id: doc.id, ...doc.data() }));

      setTweets(temp);
    });

    // aboneliği durdur
    return () => unsub();
  }, []);

  return <div>List</div>;
};

export default List;
