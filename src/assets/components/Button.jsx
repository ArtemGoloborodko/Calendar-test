

export const Button = ({ text, handel, dis }) => {
    return (
        <div>
        <button onClick={handel} disabled={dis}>{text}</button>
        </div>
    )
}