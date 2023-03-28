import { useState } from "react";
import { IEmployee } from "./Employee.type";
import "./EmployeeList.style.css";
import EmployeeModal from "./EmployeeModal";

type Props = {
  list: IEmployee[];
  onDeleteClickHnd: (data: IEmployee) => void;
  onEdit: (data: IEmployee) => void;
};

const EmployeeList = (props: Props) => {
  const { list, onDeleteClickHnd, onEdit } = props;
  const [showModal, setShowModal] = useState(false);
  const [dataToShow, setDataToShow] = useState(null as IEmployee | null);

  const viewEmployee = (data: IEmployee) => {
    setDataToShow(data);
    setShowModal(true);
  };

  const onCloseModal = () => setShowModal(false);

  return (
    <div>
      <article>
        <h3 className="list-header">Liste des clients</h3>
        <br />
      </article>
      <table className="table table-striped">
        <tr >
          <th className="thead-dark" scope="col">Nom et prénom</th>
          <th scope="col">Email</th>
          <th scope="col">Action</th>
        </tr>
        {list.map((employee) => {
          return (
            <tr key={employee.id}>
              <td>{`${employee.firstName} ${employee.lastName}`}</td>
              <td>{employee.email}</td>
              <td>
                <div>
                  <input
                    type="button"
                    value="Modifier"
                    className="btn btn-warning"
                    onClick={() => onEdit(employee)}
                  />
                  <input
                    type="button"
                    value="Supprimer"
                    className="btn btn-danger"
                    onClick={() => onDeleteClickHnd(employee)}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </table>
      {showModal && dataToShow !== null && (
        <EmployeeModal onClose={onCloseModal} data={dataToShow} />
      )}
    </div>
  );
};

export default EmployeeList;
