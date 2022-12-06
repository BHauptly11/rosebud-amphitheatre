

function Band({band}) {
    return (
    <>
    <img src={band.image} className="band" alt={band.name} />
    <h3>{band.name}</h3>
    <p>{band.description}</p>
    </>
    )
}

export default Band