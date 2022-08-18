import { useState } from 'react';

function TodoFilter({setTasksFilter}) {

    const linksAttributes = [
        {
            className: 'selected',
            href: '/public',
            textContent: 'All',
        },
        {
            className: '',
            href: '/active',
            textContent: 'Active',
        },
        {
            className: '',
            href: '/completed',
            textContent: 'Completed',
        },
    ];
    const [linksAttr, setLinksAttr] = useState(linksAttributes);

    const handlerOnFilterClick = (e) => {
        e.preventDefault();
        const selectedFilterText = e.target.textContent;
        setTasksFilter(selectedFilterText);

        setLinksAttr([...linksAttr.map((link) => {
            if (link.textContent !== selectedFilterText) {
                link['className'] = '';
            } else {
                link['className'] = 'selected';
            }

            return link;
        })]);
    };

    return (
        <ul className="filters">
            {
                linksAttr.map(({className, href, textContent}) => {
                    return <li>
                        <a href={ href } className={ className } onClick={ handlerOnFilterClick }>{ textContent }</a>
                    </li>;
                })
            }


        </ul>

    );
}

export default TodoFilter;
