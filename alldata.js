function AllData() {
  const ctx = React.useContext(UserContext);
//     const [currentUserIndex, setCurrentUserIndex] = React.useState(0); //need to have something to change index as requested
//     let name = JSON.stringify(ctx.users[currentUserIndex].name);
//     let balance = ctx.users[currentUserIndex].balance;

// // look into using the spread operator to access each user account

//   return (
//     <h1>All Data<br/>
//       {JSON.stringify(ctx)}<br/>
//       {JSON.stringify(currentUserIndex)}<br/>
//       Balance of {name} is {balance}<br/>
//       {JSON.stringify(ctx.users[currentUserIndex].name)}<br/>
//     </h1>
//   );

// spread ctx.users
  let users = [...ctx.users];
  console.log(...users);
  // for loop iterate over users in ctx object
  // for (let i=0; i <= users.length-1; i++) {
  //   console.log(users[i]);
  return (
    // <Card.Group>
    //   {users.map((user) => (
        <Card 
          bgcolor="primary"
          txtcolor="white"
          header="All data Summary"
          text="Users Data Table"
          body={
          <>
            Name: {users.name}<br/>
            Email: {users.email}<br/>
            Password: {users.password}<br/>
            Balance: {users.balance}<br/><br/>
          </> }
        /> 
        // )
    //   )}
    // </Card.Group>
  );
}