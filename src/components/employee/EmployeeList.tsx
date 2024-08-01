import { useEffect, useState } from "react";
import { EmployeeDescription } from "./EmployeeDescription";

interface IEmployee {
  id: number;
  displayName: string;
  position: string;
  tokenContainerId: number;
}

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([] as IEmployee[]);
  const [loaded, setLoaded] = useState(false);

  const getEmployees = () => {
    fetch("https://xnl.hri7566.info/api/employment", {
      next: {
        revalidate: 60,
      },
    })
      .then((res) => {
        res
          .json()
          .then(
            (j: {
              type: "employment";
              count: number;
              employees: IEmployee[];
            }) => {
              setEmployees(j.employees);
              setLoaded(true);
            }
          )
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      {/* <EmployeeDescription name="Test" position="test" /> */}
      {loaded ? (
        employees
          .sort()
          .map((e) => (
            <EmployeeDescription
              name={e.displayName}
              position={e.position || "<no position>"}
              key={e.id}
            />
          ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
