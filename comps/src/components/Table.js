function Table ({data, config, keyFn}){
const renderHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>
})





    const renderRows = data.map((rowData) => {
        const renderedCells = config.map((column) => {

            return(
                 <td className="p-2" key={column.label}>
                {column.render(rowData)}
                </td>
            );
        });

        return(
            <tr className="border-b" key={keyFn(rowData.name)}>
                {renderedCells}
                
            </tr>
        )
    });

    




    return(
    <table className="table-auto border-spacing-2">
        <thead>
            <tr className="border-b-2">
                <th>{renderHeaders}</th></tr>
        </thead>
        <tbody>
            {renderRows}
        </tbody>

    </table>
    );
}
export default Table;