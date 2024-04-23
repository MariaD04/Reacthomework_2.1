export const Toolbar = ({ filters, selected, onSelectFilter }) => {
    return (
        <nav className='nav-main'>
            <ul className='nav-menu'>
                {
                    filters.map((filter, index) => {
                       
                        return (
                            <li className='nav-item' key={`${index}${filter}`}>
                                <a href="#" className={`nav-link ${filter == selected ? 'active' : ''}`} onClick={() => onSelectFilter(filter)}>
                                    {filter}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}
