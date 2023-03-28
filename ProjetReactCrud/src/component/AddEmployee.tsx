import { useState } from "react";
import { IEmployee } from "./Employee.type";
import "./EmployeeForm.style.css";

type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: IEmployee) => void;
};

const AddEmployee = (props: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { onBackBtnClickHnd, onSubmitClickHnd } = props;

  const onFirstNameChangeHnd = (e: any) => {
    setFirstName(e.target.value);
  };

  const onLastNameChangeHnd = (e: any) => {
    setLastName(e.target.value);
  };

  const onEmailChangeHnd = (e: any) => {
    setEmail(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    const data: IEmployee = {
      id: new Date().toJSON().toString(),
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    onSubmitClickHnd(data);
    onBackBtnClickHnd();
  };

  return (
    <div className="form-container">
      <div >
        <h3>
          <small className="text-muted">Ajouter un client</small>
        </h3>
      </div>
      <br />
      <form onSubmit={onSubmitBtnClickHnd}>
        <div className="test">
          <input
            type="text"
            className="form-control"
            placeholder="Nom"
            value={firstName}
            onChange={onFirstNameChangeHnd}
          />
        </div>
        <div className="test">
          <input className="form-control" placeholder="Prénom" type="text" value={lastName} onChange={onLastNameChangeHnd} />
        </div>
        <div className="test">
          <input className="form-control" placeholder="Email" type="text" value={email} onChange={onEmailChangeHnd} />
        </div>
        <div>
          <br />
          <input className="btn btn-primary" type="button" value="Retour" onClick={onBackBtnClickHnd} />
          <input className="btn btn-success" type="submit" value="Ajouter" />
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
