const questions = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Layout",
      "Hyperlink and Text Markup Language",
      "Home Tool Markup Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    id: 2,
    question: "Which CSS property is used to change text color?",
    options: ["color", "background-color", "font-color", "text-color"],
    correctAnswer: "color",
  },
  {
    id: 3,
    question: "Which JavaScript keyword is used to declare a variable?",
    options: ["var", "let", "const", "All of the above"],
    correctAnswer: "All of the above",
  },
  {
    id: 4,
    question: "What does `flex: 1` do in CSS Flexbox?",
    options: [
      "Sets an equal share of space",
      "Centers the element",
      "Makes the element unresponsive",
      "None of the above",
    ],
    correctAnswer: "Sets an equal share of space",
  },
  {
    id: 5,
    question: "Which of the following is a JavaScript framework/library?",
    options: ["React", "Django", "Laravel", "Flask"],
    correctAnswer: "React",
  },
  {
    id: 6,
    question: "What is the default display value for a `<div>` element?",
    options: ["inline", "block", "inline-block", "grid"],
    correctAnswer: "block",
  },
  {
    id: 7,
    question: "Which tag is used to link an external CSS file?",
    options: ["<link>", "<style>", "<css>", "<script>"],
    correctAnswer: "<link>",
  },
  {
    id: 8,
    question:
      "Which method is used to add an element at the end of an array in JavaScript?",
    options: ["push()", "pop()", "unshift()", "shift()"],
    correctAnswer: "push()",
  },
  {
    id: 9,
    question: "Which HTTP method is used to send data to a server?",
    options: ["GET", "POST", "DELETE", "PUT"],
    correctAnswer: "POST",
  },
  {
    id: 10,
    question: "What is the primary purpose of Next.js?",
    options: [
      "To build mobile applications",
      "To handle backend operations",
      "To enhance React with SSR and static site generation",
      "To replace JavaScript",
    ],
    correctAnswer: "To enhance React with SSR and static site generation",
  },
  {
    id: 11,
    question: "Which JavaScript function is used to parse JSON data?",
    options: ["JSON.parse()", "JSON.stringify()", "parseJSON()", "toJSON()"],
    correctAnswer: "JSON.parse()",
  },
  {
    id: 12,
    question: "What does Tailwind CSS mainly focus on?",
    options: [
      "Providing pre-built UI components",
      "Allowing utility-first CSS styling",
      "Requiring inline styles for every element",
      "Offering only color themes",
    ],
    correctAnswer: "Allowing utility-first CSS styling",
  },
  {
    id: 13,
    question: "Which attribute is used to make an HTML input field mandatory?",
    options: ["required", "validate", "mandatory", "checked"],
    correctAnswer: "required",
  },
  {
    id: 14,
    question:
      "Which hook is used to manage state in functional components in React?",
    options: ["useEffect", "useState", "useRef", "useContext"],
    correctAnswer: "useState",
  },
  {
    id: 15,
    question: "Which protocol is used for secure communication on the web?",
    options: ["HTTP", "HTTPS", "FTP", "TCP"],
    correctAnswer: "HTTPS",
  },
  {
    id: 16,
    question: "Which CSS property makes text bold?",
    options: ["font-weight", "bold", "text-style", "font-bold"],
    correctAnswer: "font-weight",
  },
  {
    id: 17,
    question:
      "Which JavaScript method is used to remove the last item in an array?",
    options: ["pop()", "push()", "shift()", "unshift()"],
    correctAnswer: "pop()",
  },
  {
    id: 18,
    question: "What does the 'position: absolute;' CSS property do?",
    options: [
      "Positions an element relative to its normal position",
      "Positions an element relative to its parent",
      "Positions an element relative to the viewport",
      "Removes an element from the document flow",
    ],
    correctAnswer: "Positions an element relative to its parent",
  },
  {
    id: 19,
    question: "Which of the following is not a CSS preprocessor?",
    options: ["SASS", "LESS", "SCSS", "Bootstrap"],
    correctAnswer: "Bootstrap",
  },
  {
    id: 20,
    question: "Which React method is used for side effects?",
    options: ["useState", "useEffect", "useMemo", "useRef"],
    correctAnswer: "useEffect",
  },
  {
    id: 21,
    question: "What is the default port for a Next.js development server?",
    options: ["3000", "5000", "8080", "4000"],
    correctAnswer: "3000",
  },
  {
    id: 22,
    question: "Which function is used to redirect users in Next.js?",
    options: [
      "redirect()",
      "navigate()",
      "router.push()",
      "useRouter().push()",
    ],
    correctAnswer: "useRouter().push()",
  },
  {
    id: 23,
    question: "What is JSX?",
    options: [
      "A JavaScript XML syntax extension",
      "A CSS framework",
      "A new JavaScript library",
      "None of the above",
    ],
    correctAnswer: "A JavaScript XML syntax extension",
  },
  {
    id: 24,
    question: "Which command starts a Next.js development server?",
    options: ["npm run dev", "next build", "npm start", "next serve"],
    correctAnswer: "npm run dev",
  },
  {
    id: 25,
    question:
      "Which JavaScript object method returns an array of an object’s property names?",
    options: [
      "Object.keys()",
      "Object.values()",
      "Object.entries()",
      "Object.getProperties()",
    ],
    correctAnswer: "Object.keys()",
  },
  {
    id: 26,
    question: "Which Next.js function is used for API routes?",
    options: ["apiHandler", "getServerProps", "getStaticProps", "app/api/"],
    correctAnswer: "app/api/",
  },
  {
    id: 27,
    question: "Which CSS framework uses utility-first classes?",
    options: ["Bootstrap", "Bulma", "Materialize", "Tailwind CSS"],
    correctAnswer: "Tailwind CSS",
  },
  {
    id: 28,
    question: "What is the file extension for a JSX file?",
    options: [".jsx", ".js", ".tsx", ".html"],
    correctAnswer: ".jsx",
  },
  {
    id: 29,
    question: "Which HTML tag is used to create a table row?",
    options: ["<tr>", "<td>", "<th>", "<table>"],
    correctAnswer: "<tr>",
  },
  {
    id: 30,
    question: "Which Next.js function pre-fetches static content?",
    options: ["getStaticProps", "getServerSideProps", "fetch()", "useEffect"],
    correctAnswer: "getStaticProps",
  },
  {
    id: 31,
    question: "Which of these is a valid React event handler?",
    options: ["onClick", "handleEvent", "reactClick", "eventHandler"],
    correctAnswer: "onClick",
  },
  {
    id: 32,
    question: "Which HTTP status code represents a successful response?",
    options: ["200", "404", "500", "301"],
    correctAnswer: "200",
  },
  {
    id: 33,
    question: "Which CSS property sets the spacing between lines of text?",
    options: ["line-height", "letter-spacing", "word-spacing", "text-indent"],
    correctAnswer: "line-height",
  },
  {
    id: 34,
    question: "What is the default method for forms in HTML?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: "GET",
  },
  {
    id: 35,
    question: "Which JavaScript operator is used for strict equality?",
    options: ["==", "===", "!=", "<>"],
    correctAnswer: "===",
  },
  {
    id: 36,
    question: "What is the main purpose of the useRef hook in React?",
    options: [
      "Accessing DOM elements",
      "Managing state",
      "Performing API calls",
      "Handling events",
    ],
    correctAnswer: "Accessing DOM elements",
  },
  {
    id: 37,
    question: "Which HTML element is used to display images?",
    options: ["<image>", "<img>", "<picture>", "<src>"],
    correctAnswer: "<img>",
  },
  {
    id: 38,
    question:
      "Which method is used to create a new array with all elements that pass a test in JavaScript?",
    options: ["filter()", "map()", "reduce()", "forEach()"],
    correctAnswer: "filter()",
  },
  {
    id: 39,
    question: "Which CSS property controls the size of an element's font?",
    options: ["font-size", "text-size", "size", "text-font"],
    correctAnswer: "font-size",
  },
  {
    id: 40,
    question: "What is the purpose of the 'key' prop in React?",
    options: [
      "To provide unique identification for components in a list",
      "To identify the CSS styles",
      "To call a method in a component",
      "None of the above",
    ],
    correctAnswer: "To provide unique identification for components in a list",
  },
  {
    id: 41,
    question:
      "Which of the following is a JavaScript method used to convert a string into a number?",
    options: ["parseInt()", "toNumber()", "parseFloat()", "Number()"],
    correctAnswer: "parseInt()",
  },
  {
    id: 42,
    question: "Which HTML element is used to define important text?",
    options: ["<strong>", "<b>", "<important>", "<mark>"],
    correctAnswer: "<strong>",
  },
  {
    id: 43,
    question: "What does the 'useEffect' hook in React do?",
    options: [
      "Runs after every render",
      "Runs only once when the component mounts",
      "Runs before the component renders",
      "Runs only when a state value changes",
    ],
    correctAnswer: "Runs after every render",
  },
  {
    id: 44,
    question:
      "What is the default value of the 'display' property in CSS for most elements?",
    options: ["block", "inline", "flex", "none"],
    correctAnswer: "block",
  },
  {
    id: 45,
    question:
      "Which operator is used to combine two or more arrays in JavaScript?",
    options: ["concat()", "combine()", "push()", "join()"],
    correctAnswer: "concat()",
  },
  {
    id: 46,
    question:
      "Which method is used to get the first element of an array in JavaScript?",
    options: ["first()", "shift()", "unshift()", "pop()"],
    correctAnswer: "shift()",
  },
  {
    id: 47,
    question:
      "Which Next.js function is used to get data from an API on the server side?",
    options: ["getStaticProps", "getServerSideProps", "useEffect", "useSWR"],
    correctAnswer: "getServerSideProps",
  },
  {
    id: 48,
    question: "Which of the following is a valid React hook?",
    options: ["useState", "useComponent", "useEvent", "useProps"],
    correctAnswer: "useState",
  },
  {
    id: 49,
    question: "Which of these CSS properties is used for text decoration?",
    options: [
      "text-decoration",
      "font-style",
      "text-transform",
      "letter-spacing",
    ],
    correctAnswer: "text-decoration",
  },
  {
    id: 50,
    question:
      "Which of the following is used to handle API requests in Next.js?",
    options: ["getServerSideProps", "getStaticProps", "API Routes", "useFetch"],
    correctAnswer: "API Routes",
  },
];

const questionContainer = document.getElementById("question_container");
const optionContainer = document.querySelector(".options");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const questionControl = document.getElementsByClassName("question-control")[0];
let currentQuestionIndex = 0;
let questionNumber = document.getElementById("current-question");
let totalQuestion = document.getElementById("number-of-questions");
let isAnswerSelected = false; // To track if an answer has been selected
let timeLeft = 15;
let initialScore = 0;
let newScore = 0;
let timerDisplay = document.getElementById("timer");
let countDown; // Store the interval globally

// Display the questions
function displayQuestions() {
  if (countDown) clearInterval(countDown); // Clear existing timer
  timeLeft = 15; // Reset time for each question
  setTimer();

  let currentQuestion = questions[currentQuestionIndex];
  questionContainer.textContent = currentQuestion.question;
  displayOptions();
  questionCount();
}

function displayOptions() {
  optionContainer.innerHTML = ""; // Clear previous options
  let currentQuestion = questions[currentQuestionIndex];

  currentQuestion.options.forEach((option) => {
    let optionElement = document.createElement("li");
    optionElement.classList.add("option-list");

    let optionButton = document.createElement("button");
    optionButton.classList.add("option-btn");

    let optionText = document.createElement("span");
    optionText.classList.add("option");
    optionText.textContent = option;

    optionButton.appendChild(optionText);
    optionElement.appendChild(optionButton);
    optionContainer.appendChild(optionElement);

    // Add event listener to check the selected answer
    optionElement.addEventListener("click", function () {
      if (!isAnswerSelected) {
        checkAnswer(option);
      }
    });
  });
}

function questionCount() {
  questionNumber.textContent = currentQuestionIndex + 1;
  totalQuestion.textContent = questions.length;
}

// Check answer function
function checkAnswer(selectedOption) {
  isAnswerSelected = true; // Answer is now selected

  // Disable further clicks on options
  const optionButtons = optionContainer.querySelectorAll(".option-btn");
  optionButtons.forEach((btn) => {
    btn.disabled = true;
  });

  // Check if the selected option is correct
  let currentQuestion = questions[currentQuestionIndex];
  if (currentQuestion.correctAnswer === selectedOption) {
    console.log("Correct answer");
    alert("Correct Answer!");
    newScore = initialScore + 1;
  } else {
    console.log("Wrong answer");
    alert("Wrong Answer!");
  }

  // Enable the next button after selecting an option
  next.disabled = false;
}

function handleNext() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    isAnswerSelected = false; // Reset selection state
    displayQuestions();
    next.disabled = true; // Disable next until a new option is selected
  } else {
    // Last question, show submit button instead of "Next"
    next.classList.add("hide");
    const submit = document.createElement("button");
    submit.classList.add("submit");
    submit.textContent = "Submit";
    submit.addEventListener("click", function () {
      window.location.href = "score.html"; // Navigate to score page
    });

    questionControl.appendChild(submit);
  }
}

function handlePrevious() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    isAnswerSelected = false; // Reset selection state
    displayQuestions();
    previous.disabled = false; // Ensure previous is not permanently disabled
  }
}

function setTimer() {
  if (countDown) clearInterval(countDown); // Clear any existing timer

  countDown = setInterval(function () {
    timeLeft--;
    timerDisplay.textContent = `Time left: 00:${timeLeft} seconds`;

    if (timeLeft <= 0) {
      clearInterval(countDown);
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        displayQuestions();
      }
    }
  }, 1000);
}

// Event listeners
next.addEventListener("click", handleNext);
previous.addEventListener("click", handlePrevious);

// Start the quiz
displayQuestions();
