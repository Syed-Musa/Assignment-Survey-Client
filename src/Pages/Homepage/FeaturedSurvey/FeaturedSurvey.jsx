
const FeaturedSurvey = () => {
  return (
    <div>
      <h2 className="text-5xl font-bold text-center uppercase text-orange-500 italic my-10">Our Fetured Survey</h2>
      <div className="card bg-orange-50 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="card-body">
          <h2 className="card-title">MongoDB(M)</h2>
          <p>If <span className="font-bold italic">Very Experienced</span> receives the most votes, it indicates a high level of proficiency in using MongoDB for storing and managing data. Developers with this expertise are likely adept at designing robust database schemas and optimizing queries.</p>
        </div>

        <div className="card-body">
          <h2 className="card-title">Express JS(E)</h2>
          <p>A majority of votes for <span className="font-bold italic">Very Comfortable</span> suggests that respondents are highly at ease using Express.js for building the backend. This implies a strong understanding of middleware, routing, and server-side logic.</p>
        </div>

        <div className="card-body">
          <h2 className="card-title">React(R)</h2>
          <p>If <span className="font-bold italic">Extremely Confident</span> is the most voted option, it signals a high level of confidence and proficiency in using React for front-end development. Developers at this level are likely skilled in state management, component architecture, and optimizing React applications.</p>
        </div>

        <div className="card-body">
          <h2 className="card-title">Node JS(N)</h2>
          <p>The majority choosing <span className="font-bold italic">Expert</span> indicates a high skill level in using Node.js for server-side development. Developers at this level are likely well-versed in asynchronous programming, event-driven architecture, and utilizing npm packages effectively.</p>
        </div>

        <div className="card-body">
          <h2 className="card-title">API Development</h2>
          <p>If <span className="font-bold italic">Expert Understanding</span> is the most voted option, it suggests a comprehensive understanding and proficiency in designing and implementing APIs. Developers at this level are likely skilled in choosing between RESTful and GraphQL APIs based on project requirements.</p>
        </div>

        <div className="card-body">
          <h2 className="card-title">Testing and Debugging</h2>
          <p>The most votes for <span className="font-bold italic">Extremely Proficient</span> indicate a strong capability in testing and debugging MERN stack applications. Developers at this level are likely proficient in writing unit tests, conducting integration tests, and debugging complex issues efficiently.</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSurvey;
