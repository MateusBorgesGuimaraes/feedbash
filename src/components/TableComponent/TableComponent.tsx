import React, { ReactNode, FC } from "react";
import styles from "./TableComponent.module.css";

interface TableProps {
  caption: string;
  children: ReactNode;
  tableColor?: string;
  captionColor?: string;
  headerColor?: string;
  headerTextColor?: string;
  bodyTextColor?: string;
}

const TableComponent: FC<TableProps> = ({
  caption,
  children,
  tableColor = "var(--white-ice)",
  captionColor = "var(--purple-300)",
  headerColor = "var(--purple-200)",
  headerTextColor = "var(--purple-900)",
  bodyTextColor = "var(--purple-700)",
}) => {
  const [header, body] = React.Children.toArray(children);

  return (
    <div className={`${styles.tableLayout} container`}>
      <div className={styles.containerTable}>
        <div className={styles.tableWrapper}>
          <table
            className={styles.tableItem}
            style={{ background: tableColor }}
          >
            <caption style={{ background: captionColor }}>{caption}</caption>
            <thead style={{ background: headerColor, color: headerTextColor }}>
              {header}
            </thead>
            <tbody style={{ color: bodyTextColor }}>{body}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
