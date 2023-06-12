import React from "react";

export interface RateRowProps {
    name: string;
    value?: string;
    className?: string;
}

export const RateRow = ({
    name,
    value,
    className: className,
}: RateRowProps) => {
    return (
        <tr className={className}>
            <td>{name}</td>
            <td>{value}</td>
        </tr>
    );
};
