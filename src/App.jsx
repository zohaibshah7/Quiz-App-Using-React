import React, { useState, useEffect } from 'react';
import './App.css';

const quizzes = {
  HTML: [
    { question: 'What does HTML stand for?', options: ['HyperText Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'None'], correct: 0 },
    { question: 'HTML is a...', options: ['Programming language', 'Markup language', 'Style Sheet', 'Database'], correct: 1 },
    { question: 'What tag is used to define an unordered list?', options: ['<ul>', '<ol>', '<li>', '<list>'], correct: 0 },
    { question: 'What is the correct way to link an external CSS file in HTML?', options: ['<link rel="stylesheet" href="style.css">', '<stylesheet link="style.css">', '<style href="style.css">', '<css link="style.css">'], correct: 0 },
    { question: 'Which tag is used for the largest heading?', options: ['<h6>', '<h1>', '<h3>', '<h4>'], correct: 1 },
    { question: 'What is the default alignment of text in HTML?', options: ['Left', 'Right', 'Center', 'Justify'], correct: 0 },
    { question: 'Which HTML element defines the title of a document?', options: ['<title>', '<head>', '<meta>', '<body>'], correct: 0 },
    { question: 'Which attribute specifies a unique identifier for an element?', options: ['id', 'class', 'name', 'style'], correct: 0 },
    { question: 'What does the <a> tag in HTML define?', options: ['Anchor', 'Article', 'Audio', 'Alert'], correct: 0 },
    { question: 'What does the <em> tag represent?', options: ['Emphasized text', 'Italic text', 'Bold text', 'Strong text'], correct: 0 },
    { question: 'Which attribute specifies the URL of an image in the <img> tag?', options: ['src', 'href', 'alt', 'img'], correct: 0 },
    { question: 'What tag is used to define a table row?', options: ['<tr>', '<td>', '<table>', '<th>'], correct: 0 },
    { question: 'Which HTML element is used for creating a form?', options: ['<form>', '<div>', '<input>', '<fieldset>'], correct: 0 },
    { question: 'Which doctype is used in HTML5?', options: ['<!DOCTYPE html>', '<!DOCTYPE HTML5>', '<!DOCTYPE HTML PUBLIC>', '<!DOCTYPE xml>'], correct: 0 },
    { question: 'How do you insert comments in HTML?', options: ['<!-- This is a comment -->', '// This is a comment', '# This is a comment', '/* This is a comment */'], correct: 0 },
    { question: 'What tag is used to define a paragraph?', options: ['<p>', '<para>', '<paragraph>', '<pg>'], correct: 0 },
    { question: 'Which tag is used to display a horizontal line?', options: ['<hr>', '<line>', '<br>', '<div>'], correct: 0 },
    { question: 'What tag is used to define an inline frame?', options: ['<iframe>', '<frame>', '<inlineframe>', '<div>'], correct: 0 },
  ],
  CSS: [
    { question: 'What does CSS stand for?', options: ['Creative Style Sheets', 'Cascading Style Sheets', 'Colorful Style Sheets', 'Computer Style Sheets'], correct: 1 },
    { question: 'Which property is used to change the background color?', options: ['bgcolor', 'background-color', 'color', 'background'], correct: 1 },
    { question: 'Which property is used to change the font of an element?', options: ['font-family', 'font-style', 'font-weight', 'font-size'], correct: 0 },
    { question: 'Which CSS property controls text size?', options: ['font-size', 'font-style', 'text-size', 'text-style'], correct: 0 },
    { question: 'What is the default value of the position property?', options: ['static', 'relative', 'absolute', 'fixed'], correct: 0 },
    { question: 'Which property is used to align text?', options: ['text-align', 'align', 'vertical-align', 'text-decoration'], correct: 0 },
    { question: 'How do you make the text bold?', options: ['font-weight: bold;', 'font-style: bold;', 'text-decoration: bold;', 'font: bold;'], correct: 0 },
    { question: 'What is the correct CSS syntax?', options: ['body {color: black;}', '{body;color:black;}', 'body:color=black;', '{body:color=black;}'], correct: 0 },
    { question: 'Which property is used to change the text color?', options: ['color', 'text-color', 'font-color', 'bg-color'], correct: 0 },
    { question: 'Which property adds space inside an element?', options: ['padding', 'margin', 'border', 'spacing'], correct: 0 },
    { question: 'Which property is used to make text italic?', options: ['font-style', 'text-style', 'font-family', 'font-weight'], correct: 0 },
    { question: 'What property controls the space between letters?', options: ['letter-spacing', 'word-spacing', 'line-height', 'text-spacing'], correct: 0 },
    { question: 'Which of the following properties will display an element as a block?', options: ['display: block;', 'display: inline;', 'display: none;', 'display: table;'], correct: 0 },
    { question: 'Which property controls the order of the flex items?', options: ['order', 'flex-direction', 'justify-content', 'align-items'], correct: 0 },
    { question: 'How do you add a comment in CSS?', options: ['/* comment */', '// comment', '# comment', '<!-- comment -->'], correct: 0 },
    { question: 'What CSS property is used to set the height of an element?', options: ['height', 'width', 'min-height', 'max-height'], correct: 0 },
    { question: 'What property is used to change the size of an image?', options: ['width', 'height', 'size', 'max-width'], correct: 0 },
    { question: 'Which value of the display property hides an element?', options: ['none', 'block', 'inline', 'inline-block'], correct: 0 },
    { question: 'How do you center-align text in CSS?', options: ['text-align: center;', 'text-align: middle;', 'text-align: justify;', 'text-align: left;'], correct: 0 },
    { question: 'What is the correct CSS syntax to set a background image?', options: ['background-image: url(image.jpg);', 'background: url(image.jpg);', 'background-img: url(image.jpg);', 'image: url(image.jpg);'], correct: 0 },
    { question: 'Which CSS property controls the visibility of an element?', options: ['visibility', 'display', 'opacity', 'hidden'], correct: 0 },
  ],
  JavaScript: [
    { question: 'Which company developed JavaScript?', options: ['Netscape', 'Mozilla', 'Microsoft', 'Oracle'], correct: 0 },
    { question: 'What does "var" in JavaScript mean?', options: ['Variable', 'Variance', 'Variant', 'None'], correct: 0 },
    { question: 'Which of the following is a JavaScript data type?', options: ['String', 'Boolean', 'Object', 'All of the above'], correct: 3 },
    { question: 'Which symbol is used for comments in JavaScript?', options: ['//', '/* */', '<!-- -->', 'Both // and /* */'], correct: 3 },
    { question: 'Which method is used to parse a string to an integer in JavaScript?', options: ['parseInt()', 'parseFloat()', 'Number()', 'toFixed()'], correct: 0 },
    { question: 'How can you add a comment in JavaScript?', options: ['// comment', '<!-- comment -->', '# comment', '/* comment */'], correct: 0 },
    { question: 'Which method is used to add elements at the end of an array?', options: ['push()', 'pop()', 'shift()', 'unshift()'], correct: 0 },
    { question: 'What is the result of "2" + 2 in JavaScript?', options: ['4', '22', 'NaN', 'Error'], correct: 1 },
    { question: 'Which event occurs when a user clicks on an HTML element?', options: ['onClick', 'onChange', 'onMouseOver', 'onMouseDown'], correct: 0 },
    { question: 'What is used to check for strict equality in JavaScript?', options: ['==', '===', '=', '!='], correct: 1 },
    { question: 'Which method is used to remove the last element from an array?', options: ['pop()', 'push()', 'shift()', 'unshift()'], correct: 0 },
    { question: 'Which keyword is used to declare a constant in JavaScript?', options: ['const', 'var', 'let', 'None'], correct: 0 },
    { question: 'What is "undefined" in JavaScript?', options: ['A variable with no value', 'A function', 'An error', 'A loop'], correct: 0 },
    { question: 'Which function is used to convert a string into a number?', options: ['Number()', 'toString()', 'String()', 'parseString()'], correct: 0 },
    { question: 'Which of the following loops through the properties of an object?', options: ['for...in', 'for...of', 'forEach', 'map'], correct: 0 },
    { question: 'What is the DOM in JavaScript?', options: ['Document Object Model', 'Data Object Model', 'Document Object Machine', 'Data Oriented Model'], correct: 0 },
    { question: 'What is the purpose of the "this" keyword in JavaScript?', options: ['Refers to the current object', 'Refers to the global object', 'Refers to the event', 'Refers to the function'], correct: 0 },
    { question: 'Which method is used to find the largest number in an array?', options: ['Math.max()', 'Math.min()', 'Math.sum()', 'Array.max()'], correct: 0 },
    { question: 'How can you detect the type of a variable in JavaScript?', options: ['typeof', 'instanceof', 'isType', 'getType'], correct: 0 },
    { question: 'Which of the following is NOT a reserved keyword in JavaScript?', options: ['this', 'catch', 'function', 'newObject'], correct: 3 },
    ],
  React: [
    { question: 'What is React?', options: ['A JavaScript library', 'A framework', 'A language', 'None'], correct: 0 },
    { question: 'Who maintains React?', options: ['Facebook', 'Google', 'Microsoft', 'Amazon'], correct: 0 },
    { question: 'What is JSX?', options: ['JavaScript XML', 'JavaScript XHTML', 'Java Syntax Extension', 'None'], correct: 0 },
    { question: 'Which of the following is a correct way to define a React component?', options: ['function MyComponent() {}', 'var MyComponent = function() {}', 'class MyComponent extends React.Component', 'All of the above'], correct: 3 },
    { question: 'What is a "state" in React?', options: ['An object that holds data', 'A JavaScript variable', 'A CSS property', 'None'], correct: 0 },
    { question: 'Which hook is used to add state in functional components?', options: ['useState()', 'useEffect()', 'useReducer()', 'useContext()'], correct: 0 },
    { question: 'How do you pass data to a child component?', options: ['Using props', 'Using state', 'Using Redux', 'Using context'], correct: 0 },
    { question: 'What is the virtual DOM in React?', options: ['A lightweight copy of the actual DOM', 'A JavaScript library', 'A framework', 'A database'], correct: 0 },
    { question: 'What is the use of useEffect in React?', options: ['To perform side effects', 'To handle state', 'To update props', 'To handle routing'], correct: 0 },
    { question: 'Which method is used to update the state of a class component?', options: ['setState()', 'useState()', 'updateState()', 'None'], correct: 0 },
    { question: 'What is the default method for creating a new React app?', options: ['create-react-app', 'react-cli', 'npm create-react-app', 'npx create-react-app'], correct: 3 },
    { question: 'How do you handle events in React?', options: ['Using camelCase event names', 'Using lowercase event names', 'Using CSS properties', 'None'], correct: 0 },
    { question: 'What is the purpose of keys in React lists?', options: ['To uniquely identify list elements', 'To create new components', 'To bind data to state', 'None'], correct: 0 },
    { question: 'Which lifecycle method is invoked after a component is rendered?', options: ['componentDidMount', 'componentWillMount', 'componentWillUpdate', 'componentDidUpdate'], correct: 0 },
    { question: 'Which hook is used for managing side effects in functional components?', options: ['useEffect()', 'useState()', 'useMemo()', 'useReducer()'], correct: 0 },
    { question: 'How do you handle forms in React?', options: ['Using controlled components', 'Using uncontrolled components', 'Using both controlled and uncontrolled components', 'None'], correct: 2 },
    { question: 'How can you conditionally render components in React?', options: ['Using ternary operators', 'Using if-else statements', 'Using && operator', 'All of the above'], correct: 3 },
    { question: 'What is the purpose of React Router?', options: ['To handle navigation in React apps', 'To handle state in React apps', 'To handle forms in React apps', 'To create new React components'], correct: 0 },
    { question: 'What is a PureComponent in React?', options: ['A component that implements shouldComponentUpdate', 'A function that returns JSX', 'A component with no state', 'None'], correct: 0 },
    { question: 'How do you optimize performance in a React application?', options: ['Using memoization and lazy loading', 'Using more state', 'Using more hooks', 'None'], correct: 0 },
  ],
};

function App() {
  const [quizType, setQuizType] = useState(localStorage.getItem("quizType") || null);
  const [startQuiz, setStartQuiz] = useState(localStorage.getItem("startQuiz") === "true");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
    parseInt(localStorage.getItem("currentQuestionIndex")) || 0
  );
  const [score, setScore] = useState(parseInt(localStorage.getItem("score")) || 0);
  const [timeLeft, setTimeLeft] = useState(parseInt(localStorage.getItem("timeLeft")) || 300);
  const [quizFinished, setQuizFinished] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleQuizSelect = (type) => {
    setQuizType(type);
    localStorage.setItem("quizType", type);
  };

  const handleStartQuiz = () => {
    setStartQuiz(true);
    localStorage.setItem("startQuiz", true);
  };

  const handleCloseQuiz = () => {
    const confirmClose = window.confirm(
      "Are you sure you want to close? Your test will be Lost."
    );
    if (confirmClose) {
      // Reset all states and navigate to the quiz selection page
      resetQuiz();
    }
  };

  const resetQuiz = () => {
    setQuizType(null);
    setStartQuiz(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimeLeft(300);
    setQuizFinished(false);

    // Clear local storage for a fresh start
    localStorage.clear();
  };

  const handleRestartQuiz = () => {
    resetQuiz();
  };

  const currentQuiz = quizType ? quizzes[quizType] : [];

  useEffect(() => {
    if (startQuiz) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          const updatedTime = prevTime > 0 ? prevTime - 1 : 0;
          localStorage.setItem("timeLeft", updatedTime);
          return updatedTime;
        });
      }, 1000);

      if (timeLeft === 0) {
        setQuizFinished(true);
      }

      return () => clearInterval(timer);
    }
  }, [timeLeft, startQuiz]);

  useEffect(() => {
    // Save progress to localStorage
    localStorage.setItem("currentQuestionIndex", currentQuestionIndex);
    localStorage.setItem("score", score);
  }, [currentQuestionIndex, score]);

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === currentQuiz[currentQuestionIndex]?.correct) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);

    if (currentQuestionIndex + 1 < currentQuiz.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  return (
  <div className="App">
    {!startQuiz ? (
      <div>
        <h1>Quiz App</h1>
        <div className="quiz-selection">
          <h2>Select a quiz</h2>
          <div className="quiz-options">
            <button onClick={() => handleQuizSelect("HTML")}>HTML</button>
            <button onClick={() => handleQuizSelect("CSS")}>CSS</button>
            <button onClick={() => handleQuizSelect("JavaScript")}>JavaScript</button>
            <button onClick={() => handleQuizSelect("React")}>React</button>
          </div>
        </div>
        {quizType && (
          <button className="start-btn" onClick={handleStartQuiz}>
            Start {quizType} Quiz
          </button>
        )}
      </div>
    ) : (
      <div className="quiz-container">
        {!quizFinished && (
          <button className="close-btn" onClick={handleCloseQuiz}>
            ✖
          </button>
        )}
        {quizFinished ? (
          <div className="result">
            <h2>Quiz Finished</h2>
            <p>
              Your score is: {score}/{currentQuiz.length}
            </p>
            <button className="restart-btn" onClick={handleRestartQuiz}>
              Restart the Test
            </button>
          </div>
        ) : (
          <div className="question-container">
            <h2>{quizType} Quiz</h2>
            <p>
              Time left: {Math.floor(timeLeft / 60)}:
              {timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
            </p>
            <h4>
              Question {currentQuestionIndex + 1} of {currentQuiz.length}
            </h4>
            <h3>{currentQuiz[currentQuestionIndex]?.question}</h3>
            <div className="options">
              {currentQuiz[currentQuestionIndex]?.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  className={selectedAnswer === index ? "selected" : ""}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              className="next-btn"
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
            >
              Next
            </button>
          </div>
        )}
      </div>
    )}
  </div>
);
}

export default App;
