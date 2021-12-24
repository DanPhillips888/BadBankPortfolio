function Home() {
    return (
        <Card
            bgcolor="primary"
            txtcolor="white"
            header="Bad Bank Landing Page"
            title="Welcome to the bank"
            text="Please select an action from the menu"
            body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
        />
    );
}