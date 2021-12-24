function CreateAccount() {
    const ctx = React.useContext(UserContext);

    function handle(data){
        ctx.users.push({name: data.name, email: data.email, password: data.password, balance:100 });
        return true;
    }

    return (
        <Card
          bgcolor="primary"
          header="Create Account"
          handle={handle}
          submitButton="Add another account"
        />
    )
}