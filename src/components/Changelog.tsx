import { useEffect, useState } from "react";
import { ChangelogEntry } from "~/components/ChangelogEntry";

export interface LogEntry {
  content: string;
  data: {
    title: string;
    date: string;
  };
  isEmpty: boolean;
  excerpt: string;
}

export const Changelog = () => {
  const [entries, setEntries] = useState([] as LogEntry[]);
  const [loaded, setLoaded] = useState(false);

  const getEmployees = () => {
    fetch("https://xnl.hri7566.info/api/changelog?n=5", {
      next: {
        revalidate: 60,
      },
    })
      .then((res) => {
        res
          .json()
          .then((j) => {
            setEntries((j as any).logs as LogEntry[]);
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
        entries.map((entry, index) => (
          <ChangelogEntry
            title={entry.data.title}
            date={entry.data.date}
            content={entry.content}
            key={index}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
