import React from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";

interface Props {
  headers: string[];
}

export const OrderListHeader: React.FC<Props> = (props) => {
  const { headers } = props;
  return (
    <TableHead>
      <TableRow>
        {headers.map((head, index) => (
          <TableCell key={`maintable_header_${index}`}>{head}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
