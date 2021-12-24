function Login() {
        const [show, setShow]          = React.useState(true);
        const [status, setStatus]      = React.useState('');
        const [name, setName]          = React.useState('');
        const [password, setPassword]  = React.useState('');
        const [currentUserIndex, setCurrentUserIndex] = React.useState(0);
        const ctx = React.useContext(UserContext);
    
        // validation function used in handleCreate
        function validate(field, label) {
            if (!field) {
                setStatus('Error: ' + label);
                setTimeout(() => setStatus(''), 3000);
                alert(`Enter field: ${label}`);
                return false;
            }
            return true;
        }

        function validateForm() {
            return password.length > 8 && name.length > 0;
        }
    
        function handleSubmit() {
            if (!validate(name,     'name'))     return;
            if (!validate(password, 'password')) return;
            // loop over users array and check for the same name as entered
            //let users = [...ctx];
            for (let i = 0; i <= ctx.users.length - 1; i++){
                if (i === ctx.users[i].length) {
                    alert("Not a Current User: Please Create Account or try other credentials");
                    continue;
                }
                if (name !== ctx.users[i].name){
                    continue;
                }
                if (name === ctx.users[i].name){
                    setCurrentUserIndex(i);
                    setShow(false);
                    console.log(name, password, currentUserIndex);
                    return;
                }
            }
        }
    
        function clearForm() {
            setName('');
            setPassword('');
            setShow(true);
        }
    
        return (
            <Card
              bgcolor="primary"
              header="Account Login"
              status={status}
              body={show ? (
                  <>
                  Enter Account Name<br/>
                  <input type="input" className="form-control" id="name" placeholder="Enter Name" value={name} onChange={e => setName(e.currentTarget.value)}/><br/> 
                  Enter Password<br/>
                  <input type="password" className="form-control" id="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                  <button type="submit" disabled={!validateForm()} className="btn btn-light" onClick={handleSubmit} >Submit for verification</button>
                  </>
              ) : (
                  <>
                  <h5>Success</h5>
                  <button type="submit" className="btn btn-light" onClick={clearForm} >Continue to Account</button>
                  </>
              )}
            
            />
        )
    }