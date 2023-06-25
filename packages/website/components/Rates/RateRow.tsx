export interface RateRowProps {
    name: string;
    detail?: string;
    value?: string;
    className?: string;
}

export const RateRow = ({
    name,
    detail,
    value,
    className: className,
}: RateRowProps) => {
    return (
        <tr className={className}>
            <td>{name}</td>
            {detail && <td>{detail}</td>}
            <td>{value}</td>
        </tr>
    );
};
