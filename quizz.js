const questions = [
    {
        question: "Le Gulf Stream s'est formé il y a 4,1 millions ",
        choices: ["Vrai", "Faux"],
        correctAnswer: 0 // 0 pour "Vrai", 1 pour "Faux"
    },
    {
        question: "Les cheveux humains et les algues marines ont en commun une substance appelée kératine. ",
        choices: ["Vrai", "Faux"],
        correctAnswer: 1, // 0 pour "Vrai", 1 pour "Faux"
        explication: "Les algues n'ont pas de kératine, qui est une protéine animale"
    },
    {
        question: "L’eau salée des océans peut avoir quel effet sur les cheveux ?",
        choices: ["Renforcer leur croissance",
                "Les rendre secs et cassants",
                "Modifier leur couleur",
                "Augmenter leur volume de manière permanente"],
        correctAnswer: 1,
        explication: "Les rendre secs et cassants"
    },
    {
        question: "Quelle est la similarité entre l'eau de mer et les larmes humaines ?",
        choices: ["Les deux ont une concentration en sel identique",
                "Les deux contiennent du sel et des minéraux similaires",
                "Les deux sont à la même température moyenne",
                "Les deux ont un pH identique"],
        correctAnswer: 1,
        explication: "Les deux contiennent du sel et des minéraux similaires"
    },
    {
        question: "Pourquoi l’eau de mer irrite-t-elle souvent les yeux des nageurs ?",
        choices: ["À cause de sa teneur en sel",
                "Parce qu’elle contient du chlore naturel",
                "À cause de sa température",
                "Parce qu’elle est plus dense que l’eau douce"],
        correctAnswer: 0,
        explication: "A cause de sa teneur en sel"
    },
    {
        question: "Les bras des plongeurs subissent une force supplémentaire lorsqu'ils nagent dans l'océan. Quelle est cette force ?",
        choices: ["La poussée d'Archimède",
                "La friction de l'eau",
                "La pression hydrostatique",
                "L'absorption d'oxygène"],
        correctAnswer: 1
    },
    {
        question: "Les bras humains et les nageoires de nombreux poissons partagent :",
        choices: ["Une structure osseuse similaire",
                "Une capacité de régénération",
                "Une longueur identique",
                "Une composition chimique identique"],
        correctAnswer: 0,
        explication: "homologie entre les membres supérieurs humains et les nageoires des poissons"
    },
    {
        question: "Pourquoi les jambes sont-elles importantes pour nager efficacement dans l'océan ?",
        choices: ["Elles aident à respirer sous l'eau",
                "Elles génèrent la propulsion principale pour avancer",
                "Elles équilibrent la température corporelle",
                "Elles permettent de flotter sans effort"],
        correctAnswer: 1

    },
    {
        question: "Quelle adaptation permet aux jambes de surmonter la pression de l’eau à grande profondeur ?",
        choices: ["Une augmentation de la densité osseuse",
                    "La flexibilité des os longs",
                    "La contraction des veines pour limiter l’afflux sanguin",
                    "L’utilisation d’un équipement externe obligatoire"],
        correctAnswer: 2
    },
    {
        question: "Combien de temps un humain bien entraîné peut-il retenir sa respiration sous l'eau ?",
        choices: ["3 minutes",
                "6 minutes",
                "11 minutes",
                "24 minutes"],
        correctAnswer: 0,
        explication: "3. 11 minutes (Record mondial : environ 11 minutes et 54 secondes)"
    },
    {
        question: "Quel effet l’apnée dans l’océan a-t-elle sur les poumons ?",
        choices: ["Ils se dilatent davantage pour compenser la pression",
                "Ils se compriment sous l’effet de la pression de l’eau",
                "Ils produisent plus de mucus pour se protéger",
                "Ils cessent de fonctionner temporairement"],
        correctAnswer: 1
    },
    {
        question: "Les reins humains et l'océan ont en commun leur capacité à :",
        choices: ["Filtrer les sels",
                "Produire de l'oxygène",
                "Maintenir une température constante",
                "Réduire l'acidité"],
        correctAnswer: 0
    },
    {
        question: "Lorsqu’une personne boit de l’eau de mer, quel est l’impact sur ses reins ?",
        choices: ["Les reins éliminent facilement l’excès de sel",
                "Les reins doivent travailler plus intensément, ce qui entraîne une déshydratation",
                "Les reins cessent temporairement de fonctionner",
                "Les reins transforment le sel en minéraux bénéfiques"],
        correctAnswer: 1
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const trueButton = document.getElementById("true-button");
const falseButton = document.getElementById("false-button");
const nextButton = document.getElementById("next-button");
const resultElement = document.getElementById("result");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const exp = document.getElementById("exp");

no.style.display = "none";
yes.style.display = "none";
nextButton.style.display = "none";

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
}

function checkAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].correctAnswer;

    if (selectedIndex === correctIndex) {
        score++;
        yes.style.display = "block";
        no.style.display = "none";
        alert("Bonne réponse !");
    } else {
        no.style.display = "block";
        yes.style.display = "none";
        alert("Mauvaise réponse.");
    }

    exp.textContent = questions[currentQuestionIndex].explication;
    exp.style.display = "block";
    nextButton.style.display = "block";
}

function nextQuestion(){
    // Passer à la question suivante
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        yes.style.display = "none";
        no.style.display = "none";
        nextButton.style.display = "none";
        exp.style.display = "none";
        loadQuestion();
    } else {
        showResult();
    }
}


function showResult() {
    questionElement.style.display = "none";
    trueButton.style.display = "none";
    falseButton.style.display = "none";
    resultElement.textContent = `Vous avez obtenu ${score} sur ${questions.length} !`;
}

// Associer les boutons aux réponses
trueButton.addEventListener("click", () => checkAnswer(0));
falseButton.addEventListener("click", () => checkAnswer(1));
nextButton.addEventListener("click", () => nextQuestion());

// Charger la première question
loadQuestion();
