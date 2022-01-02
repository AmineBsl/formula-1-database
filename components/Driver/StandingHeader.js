function StandingHeader(props) {
    const titles = props.titles
    return (
        <div>
            <div className="border-b border-gray-600">
                <table className="table-fixed text-center w-full">
                    <thead className="">
                        <tr>
                            {titles.map((t, k) => <th key={k} className="py-2">{t}</th>)}
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default StandingHeader
