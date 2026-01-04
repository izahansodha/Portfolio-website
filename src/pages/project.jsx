import Projectsccard from "../components/projectsccard";
function Projects() {
  return (
    <div id="Projects" className="w-full flex flex-col items-center rounded-2xl p-20">
      <div className="w-full flex gap-5 m-5 sm:flex-row flex-col p-5 justify-center flex-wrap">
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
        live={"https://portfolio-web-red-iota.vercel.app/"}
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
        live={"https://e-commerce-web-five-ochre.vercel.app/"}
        github={"/"}
        status={"Completed"}
        />

        <Projectsccard
        title={
          'Agency Landing Page'
        }
        description={"Responsive Agency Website"}
        tech={["React", "Tailwind",'html','css','javascript']}
        live={"https://agency-web-page-dbz6hu6y5-izahans-projects.vercel.app/"}
        github={"https://github.com/izahansodha/Agency-web-page.git"}
        status={"Completed"}
        />


        </div>
      </div>
    </div>
  );
} 

export default Projects;
