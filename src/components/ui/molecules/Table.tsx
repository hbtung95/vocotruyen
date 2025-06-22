import React from "react";

type Props = React.TableHTMLAttributes<HTMLTableElement>;

const Table: React.FC<Props> = ({ children, ...props }) => (
  <div className="w-full overflow-x-auto glass rounded-2xl shadow">
    <table className="w-full min-w-[560px] text-left bg-transparent" {...props}>
      {children}
    </table>
  </div>
);

export default Table;
