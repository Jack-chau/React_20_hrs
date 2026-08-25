function Employee( props ) {

    return (
        <div>
            <h3>Employee { props.name }</h3>
            <p>
            {props.role ? 
            (
                <p class="role">{props.role}</p>
            ) : (
                <p class="norole">No role</p> 
            )
            }
            </p>
        </div>
    )
}

export default Employee;