import React, { useEffect, useState } from "react";
import { getTenRandomCatImages } from "../services/cat";

function CallCat(props) {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    const getCat = async () => {
      try {
        const data = await getTenRandomCatImages();
        setCat(data);
      } catch (error) {
        console.log("Error fetching cat image", error);
      }
    };

    getCat();
  }, []);

  return (
    <div>
      <section>
        {cat.map((c) => (
          <div key={c.id}>
            <img
              key={c.id}
              src={c.url}
              alt={`cat ${c.id}`}
              style={{ width: `${c.width}px`, height: `${c.height}px` }}
            />
            <h3> Width: {c.width}</h3>
            <h3> Height: {c.height}</h3>
          </div>
        ))}
      </section>
    </div>
  );
}

export default CallCat;
