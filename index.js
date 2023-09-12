let cards = [];
 function selectImage(imageName) {
  let imageInput = document.getElementById("selectedImage");
    imageInput.value = imageName;
  }
    function saveCard() {
        let cardNumber = document.getElementById("inputOne").value;
        let expiryDate = document.getElementById("inputTwo").value;
        let cvv = document.getElementById("inputThree").value;
        let selectedImage = document.getElementById("selectedImage").value;

        let card = {
            image: selectedImage,
            cardNumber: cardNumber,
            expiryDate: expiryDate,
             cvv: cvv
            };
            cards.push(card);
            showCard();
            document.getElementById("inputOne").value = "";
            document.getElementById("inputTwo").value = "";
            document.getElementById("inputThree").value = "";
            document.getElementById("selectedImage").value = "";
        }

        function showCard() {
            let tableBody = document.getElementById("body");
            tableBody.innerHTML = "";
            cards.forEach((card, index) => {
                let row = tableBody.insertRow();

                let imgCell = row.insertCell();
                imgCell.innerHTML = `<img src="image/${card.image}" alt="Card Image" style = "width:200px; height:100px" >`;

                let cardNumberCell = row.insertCell();
                cardNumberCell.textContent = newCardNumber(card.cardNumber);

                let expiryDateCell = row.insertCell();
                expiryDateCell.textContent = card.expiryDate;

                let cvvCell = row.insertCell();
                cvvCell.textContent = newCvv(card.cvv);

                let actionCell = row.insertCell();
                actionCell.innerHTML = `
                    <button onclick="editCard(${index})">Edit</button>
                    <button onclick="deleteCard(${index})">Delete</button>
                    <button onclick="viewCard(${index})">View</button>
                `;
            });
        }
        function newCardNumber(cardNumber) {
            let hideNumber = cardNumber.slice(0, -6) + "*".repeat(6);
            return hideNumber;
        }

        function newCvv(cvv) {
            let hidenCVV = "*".repeat(cvv.length);
            return hidenCVV;
        }

        function editCard(index) {
            let card = cards[index];
            document.getElementById("inputOne").value = card.cardNumber;
            cards.splice(index, 1);
            showCard()
        }
        function deleteCard(index) {
            cards.splice(index, 1);
            showCard();
        }
        function viewCard(index) {
            let card = cards[index];
            document.getElementById("inputOne").value = card.cardNumber;
            document.getElementById("inputTwo").value = card.expiryDate;
            document.getElementById("inputThree").value = card.cvv;
            showCard();
        }
       


  