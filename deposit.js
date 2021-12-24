function Deposit() {
    const [show, setShow]          = React.useState(true);
    const [status, setStatus]      = React.useState('');
    const [name, setName]          = React.useState('');
    const [deposit, setDeposit]    = React.useState('');
    const ctx = React.useContext(UserContext);
    
    // trying out accessing name from users object
    //let users = [...ctx];
    //let userName = ctx.users[0].name;
    

    // validation function used in handleCreate
    function validate(field, label) {
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 3000);
            alert(`Enter valid field: ${label}`);
            return false;
        }
        if (field === deposit) {
            if (Number(deposit) <= 0) {
                alert("Enter a positive number value to deposit");
                return false;
            }
        }
        return true;
    }

    function handleDeposit() {
        console.log(name, `Deposit amount: ${deposit}`);
        if (!validate(name,       'name'))       return;
        if (!validate(deposit,    'deposit'))    return;
        if (name === ctx.users[0].name) {
          ctx.users.push({deposit});
          ctx.users[0].balance += Number(deposit);
          setShow(false);
        } else {
            alert(`Incorrect User input.`);
        }
    }

    function clearForm() {
        //setName('');
        setDeposit('');
        setShow(true);
    }

    return (
        <Card
          bgcolor="primary"
          header="Deposit"
          status={status}
          body={show ? (
              <>
              Balance for Account           {ctx.users[0].balance} <br/><br/>
              Account Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter Name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>

              Deposit Amount<br/>
              <input type="number" className="form-control" id="withdraw" placeholder="Enter Deposit Amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} /><br/>

              <button type="submit" className="btn btn-light" onClick={handleDeposit} >Deposit</button>
              </>
          ) : (
              <>
              <h5>Successful Deposit</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm} >Make another Transaction</button>
              </>
          )}
        
        />
    )
}