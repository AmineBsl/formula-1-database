function StandingHeader(props) {
    const titles = props.titles
    return (
        <div>
            <div className="border-b border-gray-600">
                <table className="table-fixed w-full">
                    <thead className="">
                        <tr>
                            {titles.map((t, k) => <th key={k} className="p-4">{t}</th>)}
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default StandingHeader
