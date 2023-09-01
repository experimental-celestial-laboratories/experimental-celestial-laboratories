import { useEffect, useState } from "react";
import { EmployeeDescription } from "~/components/EmployeeDescription";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState({} as Record<string, string>);
  const [loaded, setLoaded] = useState(false);

  const getEmployees = () => {
    fetch("https://xnl.hri7566.info/employment/", {
      next: {
        revalidate: 60,
      },
    })
      .then((res) => {
        res
          .json()
          .then((j) => {
            setEmployees(j as Record<string, string>);
            setLoaded(true);
          })
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
        Object.keys(employees)
          .sort()
          .map((k) => (
            <EmployeeDescription
              name={k}
              position={employees[k] || "<no position>"}
              key={Object.keys(employees).indexOf(k)}
            />
          ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
