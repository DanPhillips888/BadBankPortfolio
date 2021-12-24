function Spa() {
    return (
        <HashRouter>
            <NavBar/>
            {/* users property with a value of the array */}
            <UserContext.Provider value={{users:[{name: 'Abel', email: 'abel@mit.edu', password: 'secret', balance:100}]}}>
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