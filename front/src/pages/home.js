import Presentation from "../component/presentation_quizz/presentation_quizz";
function Home() {

  localStorage.setItem("user", null );

  return (
    <div>
      <Presentation></Presentation>    
   </div>
  );
}

export default Home;
