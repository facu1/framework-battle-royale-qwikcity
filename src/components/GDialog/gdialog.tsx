import {
  $,
  Slot,
  component$,
  useComputed$,
  useContext,
} from "@builder.io/qwik";
import styles from "./gdialog.module.css";
import { Gbutton } from "../GButton/gbutton";
import { DialogContext } from "~/routes/layout";

export const Gdialog = component$(() => {
  const dialogState = useContext(DialogContext);

  const backgroundIsOpen = useComputed$(
    () =>
      `${styles["dialog-background"]} ${
        dialogState.value ? styles["open-background"] : ""
      }`
  );
  const containerIsOpen = useComputed$(
    () =>
      `${styles["dialog-container"]} ${
        dialogState.value ? styles["open-container"] : ""
      }`
  );

  const closeDialog = $(() => {
    dialogState.value = false;
  });

  return (
    <div class={backgroundIsOpen}>
      <dialog open={dialogState.value} class={containerIsOpen}>
        <Slot />
        <Gbutton onClick$={closeDialog}>Close</Gbutton>
      </dialog>
    </div>
  );
});
