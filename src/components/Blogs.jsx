import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5 w-75 bg-light p-5 '>
            <h3>Question-01: Tell us the differences between uncontrolled and controlled components.</h3>
            <p>Ans: In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. They use a ref to access the DOM element's current value and update the state accordingly.</p>
            <h3>Question-02: How to validate React props using PropTypes</h3>
            <p>Ans: In this example, we are creating App component with all the props that we need. App.propTypes is used for props validation. If some of the props aren't using the correct type that we assigned, we will get a console warning. After we specify validation patterns, we will set App.defaultProps. <br />App.propTypes = 
            propArray: React.PropTypes.array.isRequired, <br />
            propBool: React.PropTypes.bool.isRequired, <br />
            propFunc: React.PropTypes.func,<br />
            propNumber: React.PropTypes.number,<br />
            propString: React.PropTypes.string,<br />
            propObject: React.PropTypes.object
                                                </p>
            <h3>Question-03: Tell us the difference between nodejs and express js.</h3>
            <p>Ans: (Node and Exoress) js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses. <br />NodeJS is a framework of JavaScript which is mainly used for working with the backend of our application or building the backend using JavaScript, whereas ReactJS is a JavaScript front-end library. It is mainly used for building the user interface or the frontend of our application.</p>
            <h3>Question-04: What is a custom hook, and why will you create a custom hook?</h3>
            <p>Ans: Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
        </div>
    );
};

export default Blogs;