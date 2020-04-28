import React, {
  FC,
  ReactElement,
  useState,
  Fragment,
  ChangeEventHandler,
  FormEventHandler,
} from "react";
import { Link, useHistory } from "react-router-dom";

import { useStore } from "../../store";

const SettingsPage: FC = (): ReactElement => {
  const {
    peopleStore: { settings },
  } = useStore();

  let history = useHistory();

  const [dobDateFormat, setDobDateFormat] = useState<string>(
    settings.dobDateFormat
  );

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setDobDateFormat(event.target.value);
  };

  const handleSubmit: FormEventHandler = (event): void => {
    event.preventDefault();
    settings.setDobDateFormat(dobDateFormat);
    history.push("/");
  };

  return (
    <Fragment>
      <Link to="/">Back</Link>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date-format-input">Date Format</label>
        <input
          onChange={handleChange}
          value={dobDateFormat}
          id="date-format-input"
          type="text"
          placeholder="dd-mmm-yyyy"
        />
        <button type="submit">Submit</button>
      </form>
    </Fragment>
  );
};

export default SettingsPage;
