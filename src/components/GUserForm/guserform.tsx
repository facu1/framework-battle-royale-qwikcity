import { $, component$, useContext } from "@builder.io/qwik";
import { type SubmitHandler, useForm, zodForm$ } from "@modular-forms/qwik";
import { UserSchema, type User } from "~/models";
import { DialogContext, UserContext, useFormLoader } from "~/routes/layout";
import styles from "./guserform.module.css";
import { ButtonTypes, Gbutton } from "../GButton/gbutton";

export const Guserform = component$(() => {
  const dialogState = useContext(DialogContext);
  const userState = useContext(UserContext);

  const [, { Form, Field }] = useForm<User>({
    loader: useFormLoader(),
    validate: zodForm$(UserSchema),
  });

  const handleSubmit: SubmitHandler<User> = $((value: User) => {
    userState.changeValues(value);
    dialogState.value = false;
  });

  return (
    // eslint-disable-next-line qwik/valid-lexical-scope
    <Form class={styles.form} onSubmit$={handleSubmit}>
      <Field name="name">
        {(field, props) => <input type="text" {...props} value={field.value} />}
      </Field>
      <Gbutton type={ButtonTypes.SUBMIT}>Save</Gbutton>
    </Form>
  );
});
