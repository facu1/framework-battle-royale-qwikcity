import { component$, useContext } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Toolbar } from "~/components/Toolbar/toolbar";
import { UserContext } from "./layout";

export default component$(() => {
  const userState = useContext(UserContext);

  return (
    <>
      <Toolbar />
      {JSON.stringify(userState.user)}
    </>
  );
});

export const head: DocumentHead = {
  title: "Framework Battle Royale Qwik",
  meta: [
    {
      name: "description",
      content: "Framework Battle Royale Qwik",
    },
  ],
};
