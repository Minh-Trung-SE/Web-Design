import { Table } from "@tanstack/react-table";
import TableCell from "features/IAM/common/TanStackTable/components/TableCell.tsx";

function TableRows<T = unknown>(props: { table: Table<T> }) {
    const { table } = props;

    return table.getRowModel().rows.map((row) => (
        <tr
            key={row.id}
            className="border-b text-white last:border-b-0 hover:bg-slate-800 transition-all duration-300"
        >
            {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} cell={cell} />
            ))}
        </tr>
    ));
}

export default TableRows;
