let accountdata ={
    number:'101',
    name:'Harsh',
    balance:''
};
function updateaccountinfo() {
    document.getElementById('account-number').textContent= accountdata.number;
    document.getElementById('account-name' ).textContent =accountdata.name;
    document.getElementById('account-balance').textContent= accountdata.balance.tofixed(2);

}
document.addEventListener('Domcontentload' ,(event)=>{
    updateaccountinfo();
     const TransferForm =document.getElementById('transfer-form');
     if(TransferForm){
        TransferForm.addEventListener('submit',(e)=>{
            e.preventDefault();
            const recipent = document.getElementById('recipent').value;
            const amount =parseFloat(document.getElementById('amount').value);
            if(amount<=o){
                document.getElementById('transfer-message').textContent ='Invalid amount. must be greater then 0.';
                return

            }
            if (amount> accountdata.balance){
                Document.getElementById('transfer-message').textContent='Insufficient funds'
            }
            accountdata.balance -=amount;
            document.getElementById('account-balance').textContent=accountdata.balance.tofixed(2);
            document.getElementById('transfer-message').textContent='tranferred $${amount.to fixed(2)} to account ${recipient}.';
            TransferForm.reset();
        })
     }
}) ;