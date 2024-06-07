import React, { ReactNode, FC } from "react";
import styles from "./TableComponent.module.css";

interface TableProps {
  caption: string;
  children: ReactNode;
}

const TableComponent: FC<TableProps> = ({ caption, children }) => {
  const [header, body] = React.Children.toArray(children);

  return (
    <div className={`${styles.tableLayout} container`}>
      <div className={styles.containerTable}>
        <div className={styles.tableWrapper}>
          <table className={styles.tableItem}>
            <caption>{caption}</caption>
            <thead>{header}</thead>
            <tbody>{body}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
