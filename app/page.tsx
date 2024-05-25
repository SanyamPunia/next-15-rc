import Image from "next/image";
import SubComponent from "./subcomponent";
import Counter from "./optimizable-counter";
import BadComponent from "./bad-hydrating-component";

// export const dynamic = "force-dynamic";

export default async function Home() {
  const timeReq = await fetch("http://localhost:8080/", {
    cache: "force-cache",
  });
  const { time } = await timeReq.json();

  return (
    <div>
      <SubComponent />
      <Counter />
      {/* <BadComponent /> */}
      {time}
    </div>
  );
}
