import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useItemDetail = (id) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  return [item, setItem];
};

export default useItemDetail;
