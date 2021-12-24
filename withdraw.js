function Withdraw() {
    const [show, setShow]          = React.useState(true);
    const [status, setStatus]      = React.useState('');
    const [name, setName]          = React.useState('');
    const [withdraw, setWithdraw]  = React.useState('');
    const ctx = React.useContext(UserContext);

    // variables will later be state managed and become global in context.js
    //let name = ctx.users[0].name;
    let balance = ctx.users[0].balance;

    // validation function used in handleCreate
    function validate(field, label) {
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 3000);
            alert(`Enter valid field: ${label}`);
            return false;
        }
        if (field === withdraw) {
            if (withdraw <= 0) {
                alert("Enter a positive number value to withdraw");
                return false;
            }
        }
        return true;
    }

    function handleWithdraw() {
        if (!validate(name,       'name'))       return;
        if (!validate(withdraw,    'withdrawl'))    return;
        if (name === ctx.users[0].name){
            if ((Number(withdraw)) <= balance) {
                console.log(name, `Withdrawl amount: ${withdraw}`);
                ctx.users.push({withdraw});
                ctx.users[0].balance -= Number(withdraw);
                setShow(false);
            } else {
                alert("Insufficient Funds");
                return;
            }
        } else {
            alert(`Incorrect User input.`);
        }
        
    }

    function clearForm() {
        //setName('');
        setWithdraw('');
        setShow(true);
    }

    return (
        <Card
          bgcolor="primary"
          header="Withdraw"
          status={status}
          body={show ? (
              <>
              Balance for Account           {balance} <br/><br/>
              Account Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter Name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              
              Withdrawl Amount<br/>
              <input type="number" className="form-control" id="withdraw" placeholder="Enter Withdrawl Amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)} /><br/>

              <button type="submit" className="btn btn-light" onClick={handleWithdraw} >Withdrawl</button>
              </>
          ) : (
              <>
              <h5>Successful Withdrawl</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm} >Make another Transaction</button>
              </>
          )}
        
        />
    )
}