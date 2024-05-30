const Loading = () => {
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                    <span role="status">Loading...</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Loading