import { $, component$, useContext } from "@builder.io/qwik";
import { DialogContext } from "~/routes/layout";
import { Gbutton } from "../GButton/gbutton";
import { Gdialog } from "../GDialog/gdialog";
import styles from "./toolbar.module.css";
import { Guserform } from "../GUserForm/guserform";

export const Toolbar = component$(() => {
  const dialogState = useContext(DialogContext);

  const openDialog = $(() => {
    dialogState.value = true;
  });

  return (
    <>
      <div class={styles["toolbar-container"]}>
        <p>
          Framework Battle Royale: <strong>Qwik</strong>
        </p>
        <Gbutton onClick$={openDialog}>Open Dialog</Gbutton>
      </div>
      <Gdialog>
        <Guserform />
      </Gdialog>
    </>
  );
});
