function calTotalTicketCost(){
    var numberOfTickets = document.getElementById("numberOfTickets").value;
    var perTicketPrice = 50;
    var TotalCost = numberOfTickets * perTicketPrice;
    document.getElementById("totalprice").value = TotalCost;
    console.log(TotalCost);
}