import { useState } from "react";
import { IEmployee } from "./Employee.type";
import "./EmployeeForm.style.css";

type Props = {
  data: IEmployee;
  onBackBtnClickHnd: () => void;
  onUpdateClickHnd: (data: IEmployee) => void;
};

const EditEmployee = (props: Props) => {
  const { data, onBackBtnClickHnd, onUpdateClickHnd } = props;

  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);
  const [email, setEmail] = useState(data.email);

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
    const updatedData: IEmployee = {
      id: data.id,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    onUpdateClickHnd(updatedData);
    onBackBtnClickHnd();
  };

  return (
    <div className="form-container">
      <div>
        <h3>
        <small className="text-muted">Modifier le client</small>
        </h3>
      </div>
      <br />
      <form onSubmit={onSubmitBtnClickHnd}>
        <div className="test" >
          <input
          className="form-control" placeholder="Nom"
            type="text"
            value={firstName}
            onChange={onFirstNameChangeHnd}
          />
          </div>
          <div className="test" >
          <input className="form-control" placeholder="Prénom" type="text" value={lastName} onChange={onLastNameChangeHnd} />
          </div>
          <div className="test" >
          <input className="form-control" placeholder="Email" type="text" value={email} onChange={onEmailChangeHnd} />
          </div>
          <br />
          <input className="btn btn-primary" type="button" value="Retour" onClick={onBackBtnClickHnd} />
          <input className="btn btn-success" type="submit" value="Modifier" />
      </form>
    </div>
  );
};

export default EditEmployee;
