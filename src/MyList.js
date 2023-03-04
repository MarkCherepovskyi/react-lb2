import './MyList.css';

function MyList(props) {
    const items = props.items.map(item => <li>{item}</li>);
    return <div className={"my-list"}><ul className={"my-list__list"}>{items}</ul></div>
}

export default MyList;
