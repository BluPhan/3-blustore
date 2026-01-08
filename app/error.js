"use client";

import { useEffect } from "react";

export default function Error(props) {
  const { error, reset } = props;

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div>
      <h3>Something went wrong :(</h3>
      <div>
        <button onClick={reset}>Reset</button>
        <link href={"/"}>
          <button>Home</button>
        </link>
      </div>
    </div>
  );
}
