const calculate = ()=>{
    let amount = document.getElementById('bill_amount').value;
    
    let perc = document.getElementById('tip_percentage').value;
    
    let tip = amount*(perc/100);
    let total= tip+Number(amount);
    
    
    document.getElementById('tip_total').value = tip
    document.getElementById('total billed').value = total;
    
    }
    const reset = () => {
    let amount = document.getElementById('bill_amount').value;
    
    let perc = document.getElementById('tip_percentage').value;
    
    document.getElementById('tip_total').value = ""
    document.getElementById('total billed').value = "";
    document.getElementById('bill_amount').value = "";
    document.getElementById('tip_percentage').value = "";
    
    }