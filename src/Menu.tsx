//Typa propsen för att undvika att använda "any":
interface Props {
    admin: boolean,
    setPage: ((page: string) => void)
}
//Menycomponenten, den använder props från app.tsx:
function Menu(props: Props) {
    return (
        <div>
            <button onClick={() => props.setPage("start")}>Start</button>
            <button onClick={() => props.setPage("products")}>Products</button>
            <button onClick={() => props.setPage("about")}>About</button>
            {/* Admin-knapp visas bara om admin=true: */}
            {props.admin ? <button onClick={() => props.setPage("admin")}>Admin</button> : null}
        </div>
    );
}

export default Menu;