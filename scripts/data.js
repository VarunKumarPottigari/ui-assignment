function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', './../data/fitness.json', true); //'data.json' is the relative path of the .json file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function buildHTML(jsonData) {
    // console.log(jsonData.fitness.length);
    let fitnessData = jsonData.fitness;
    let tabPane = document.getElementById("tab-data-1");
    for(let i = 0; i < fitnessData.length; i++) {
        let fitness = fitnessData[i];

        let card = document.createElement('div');
        card.classList.add('card');

        let trainerImageContainer = document.createElement('div');
        trainerImageContainer.classList.add('card-trainer-image-container');
        let trainerImageElement = document.createElement('img');
        trainerImageElement.classList.add('card-trainer-image');
        trainerImageElement.setAttribute('src', fitness.trainerImage);
        trainerImageContainer.appendChild(trainerImageElement);
        card.appendChild(trainerImageContainer);

        let cardInfoDetails = document.createElement('div');
        let cardInfoHeader = document.createElement('div');
        let cardInfoBy = document.createElement('span');
        let cardInfoTrainer = document.createElement('span');
        let cardInfoPara = document.createElement('div');

        cardInfoDetails.classList.add('card-info-details');
        cardInfoHeader.classList.add('card-info-header');
        cardInfoBy.classList.add('card-info-by');
        cardInfoTrainer.classList.add('card-info-trainer');
        cardInfoPara.classList.add('card-info-para');
        cardInfoHeader.innerText = fitness.program;
        cardInfoBy.innerText = 'by';
        cardInfoTrainer.innerText = fitness.trainer;
        cardInfoPara.innerText = fitness.info;
        
        cardInfoDetails.appendChild(cardInfoHeader);
        cardInfoDetails.appendChild(cardInfoBy);
        cardInfoDetails.appendChild(cardInfoTrainer);
        cardInfoDetails.appendChild(cardInfoPara);

        let cardSubInfo = document.createElement('div');
        let cardInfoClub = document.createElement('div');
        cardInfoClub.classList.add('card-info-row');
        let cardInfoClubSub = document.createElement('span');
        cardInfoClubSub.classList.add('card-sub');
        cardInfoClubSub.innerText = 'club';
        let cardInfoSubInfo = document.createElement('span');
        cardInfoSubInfo.classList.add('card-sub-info');
        cardInfoSubInfo.innerText = fitness.club;
        cardInfoClub.appendChild(cardInfoClubSub);
        cardInfoClub.appendChild(cardInfoSubInfo);

        let cardInfoPartners = document.createElement('div');
        cardInfoPartners.classList.add('card-info-row');
        let cardInfoPartnerSub = document.createElement('span');
        cardInfoPartnerSub.classList.add('card-sub');
        cardInfoPartnerSub.innerText = 'partners';
        let cardInfoPartnerInfo = document.createElement('span');
        cardInfoPartnerInfo.classList.add('card-sub-info');
        cardInfoPartnerInfo.innerText = fitness.partners;
        cardInfoPartners.appendChild(cardInfoPartnerSub);
        cardInfoPartners.appendChild(cardInfoPartnerInfo);

        let cardInfoMembers = document.createElement('div');
        cardInfoMembers.classList.add('card-info-row');
        let cardInfoMembersSub = document.createElement('span');
        cardInfoMembersSub.classList.add('card-sub');
        cardInfoMembersSub.innerText = 'members';
        let cardInfoMemberInfo = document.createElement('span');
        cardInfoMemberInfo.classList.add('card-sub-info');
        cardInfoMemberInfo.innerText = fitness.members;
        cardInfoMembers.appendChild(cardInfoMembersSub);
        cardInfoMembers.appendChild(cardInfoMemberInfo);

        cardSubInfo.appendChild(cardInfoClub);
        cardSubInfo.appendChild(cardInfoPartners);
        cardSubInfo.appendChild(cardInfoMembers);

        let cardRating = document.createElement('div');
        cardRating.classList.add('card-info-rating');
        cardRating.innerText = 'rating';

        let cardUsers = document.createElement('div');
        cardUsers.classList.add('card-info-users');
        cardUsers.innerText = 'users';

        let cardSubscribers = document.createElement('div');
        cardSubscribers.classList.add('card-info-subscriber');
        cardSubscribers.innerText = 'subscribe';

        card.appendChild(trainerImageContainer);
        card.appendChild(cardInfoDetails);
        card.appendChild(cardSubInfo);
        card.appendChild(cardRating);
        card.appendChild(cardUsers);
        card.appendChild(cardSubscribers);

        tabPane.appendChild(card);
        // console.log(cardInfoTrainer);
    }
}   

(function () {
    loadJSON(function (response) {
        var actual_JSON = JSON.parse(response); //Now you can use the actual_JSON variable to build your table
        buildHTML(actual_JSON);
    });
})()