const Route         = ReactRouterDOM.Route;
const Link          = ReactRouterDOM.Link;
const HashRouter    = ReactRouterDOM.HashRouter;
const UserContext   = React.createContext(null);

function Card(props) {
// transfer state declarations
  const [show, setShow]          = React.useState(true);
  const [status, setStatus]      = React.useState('');
  const [name, setName]          = React.useState('');
  const [email, setEmail]        = React.useState('');
  const [password, setPassword]  = React.useState('');
  const ctx = React.useContext(UserContext);
  
  //transfer function definitions
  // validation function used in handleCreate
  function validate(field, label) {
    if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''), 3000);
        alert(`Enter field: ${label}`);
        return false;
    }
    // email validation in progress
    // if (label === email) {
       // check that entered string has @ dividing and '.' dividing
    //     if(email does not contains '@' character)
    //        alert("Enter Valid Email");
    // }
    return true;
  }

    function validateForm() {
        return password.length > 8 && name.length > 0 && email.length > 0;
    }
    
    function handleCreate() {
        console.log(name, email, password);
        if (!validate(name,     'name'))     return;
        if (!validate(email,    'email'))    return;
        if (!validate(password, 'password')) return;
        ctx.users.push({name, email, password, balance: 100});
        setShow(false);
    }
    
    function clearForm() {
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    function classes() {
        const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
        return 'card mb-3' + bg + txt;
    }

    return (
        <div className={classes()} style={{maxWidth: "18rem"}}>
            <div className="card-header">{props.header}</div>
            <div className="card-body">
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
                {props.handle && show ? (
                   <>
                   Name<br/>
                   <input type="input" className="form-control" id="name" placeholder="Enter Name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
                   Email address<br/>
                   <input type="input" className="form-control" id="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
                   Password<br/>
                   <input type="password" className="form-control" id="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br/>
                   <button type="submit" disabled={!validateForm()} className="btn btn-light" onClick={handleCreate} >Create Account</button>
                   </>
                ) : (
                props.submitButton && (
                   <>
                   <h5>Success</h5>
                   <button type="submit" className="btn btn-light" onClick={clearForm} >{props.submitButton}</button>
                   </>
                )
                )}
                {props.status && (<div id="'createStatus">{props.status}</div>)}
            </div>
        </div>
    )
}