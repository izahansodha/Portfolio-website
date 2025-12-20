import Projectsccard from "../components/projectsccard";
function Projects() {
  return (
    <div className="w-full h-full flex flex-col items-center rounded-2xl">
      <div className="m-5">
        <Projectsccard 
        title={
          'Admin dashboard'
        }
        description={"help you mange your work"}
        tech={["React", "Tailwind", "Chart.js", "JSON Server"]}
        live={"Done"}
        github={"github.com"}
        />
      </div>
    </div>
  );
} 
export default Projects;
