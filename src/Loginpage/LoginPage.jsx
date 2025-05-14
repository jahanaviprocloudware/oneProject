export const LoginPage = () => {
    return(
        <div className='container d-flex flex-column justify-content-center '>
            <div className="align-items-center">
                <div>
                    <input placeholder="Enter the name"/>
                </div>
                <div>
                    <input placeholder="Enter the password"/>
                </div>
                <div>
                    <button>submit</button>
                </div>
            </div>
        </div>
    )
}