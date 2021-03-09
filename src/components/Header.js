import Button from './Button';

const Header = () => {

    const onClick = (e) => {
        console.log(e)
    }

    return (
        <header className="header">
            <h1>Tasker</h1>
            <Button color="green" text="Add" onClick={onClick} />
        </header>
    )
}

export default Header
