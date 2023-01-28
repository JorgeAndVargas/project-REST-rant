const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={data.place.pic} alt={data.place.name} />
                        <h3>
                            Located in {data.place.city}, {data.place.state}
                        </h3>
                    </div>
                    <div className="col-sm-6">
                        <h1>{ data.place.name }</h1>
                        <h2>Rating</h2>
                        <p>No Rating yet!</p>
                        <br /> 
                        <h2>Description</h2>
                        <p>No Description Yet!</p>
                    </div>
                </div>
                <hr />
                <h2>Comments</h2>
                <div className="row">
                    <p>No Comments yet!</p>
                </div>
                <a href={ `/places/${data.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method="POST" action={ `/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        delete
                    </button>
                </form>
            </main>
        </Def>
    )
}

module.exports = show