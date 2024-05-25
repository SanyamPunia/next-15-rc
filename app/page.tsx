import { unstable_after as after } from "next/server";
import SubComponent from "./subcomponent";
import Counter from "./optimizable-counter";
import BadComponent from "./bad-hydrating-component";

// export const dynamic = "force-dynamic";

export default async function Home() {
  const timeReq = await fetch("http://localhost:8080/", {
    cache: "force-cache",
  });
  const { time } = await timeReq.json();

  after(() => {
    console.log("finished rendering!");
  });

  return (
    <div>
      <SubComponent />
      <Counter />
      {/* <BadComponent /> */}
      {time}
    </div>
  );
}
