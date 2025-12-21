import Projectsccard from "../components/projectsccard";
function Projects() {
  return (
    <div className="w-full bg-[#0c969c] flex flex-col items-center rounded-2xl">
      <div className="w-full flex gap-5 m-5 sm:flex-row flex-col p-5">
        <div>
        <Projectsccard 
        title={
          'Admin dashboard'
        }
        description={"help you mange your work"}
        tech={["React", "Tailwind", "Chart.js", "JSON Server"]}
        live={"https://admin-dashboard-lovat-eight-95.vercel.app/"}
        github={"https://github.com/izahansodha/Admin-Dashboard.git"}
        status={"Completed"}
        />
        </div>
        <div>
        <Projectsccard
        title={
          'Portfolio Web'
        }
        description={"Responsive Portfolio Web"}
        tech={["React", "Tailwind"]}
        live={"https://portfolio-izahans-projects.vercel.app/"}
        github={"https://github.com/izahansodha/Portfolio-website.git"}
        status={"Completed"}
        />
        </div>
        <div>
        <Projectsccard
        title={
          'E-commerce Frontend'
        }
        description={"E-commerce Full Fronted"}
        tech={["React", "Tailwind"]}
        live={"Inprogress"}
        github={"/"}
        status={"Inprogress"}
        />
        </div>
      </div>
    </div>
  );
} 
export default Projects;
