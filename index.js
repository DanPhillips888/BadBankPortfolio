function Spa() {
    return (
        <HashRouter>
            <NavBar/>
            {/* users property with a value of the array */}
            <UserContext.Provider value={
                    {users:[{id: 1, name: 'Dan', email: 'dan@mit', password: 'secret1234', balance:100}]}}>
                <Route path="/" exact component={Home}/>
                <Route path="/CreateAccount/" exact component={CreateAccount}/>
                <Route path="/login/" exact component={Login}/>
                <Route path="/deposit/" exact component={Deposit}/>
                <Route path="/withdraw/" exact component={Withdraw}/>
                <Route path="/alldata/" exact component={AllData}/>
            </UserContext.Provider>
        </HashRouter>
    );
}

ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
)