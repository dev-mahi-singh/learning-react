import Card from './components/Card'

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/500px-Google_%22G%22_logo.svg.png",
      company: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlQC8zoGKyaMRDAgp9s-IEsGe1vKqWN1EC-Q&s",
      company: "Amazon",
      datePosted: "2 weeks ago",
      post: "Software Development Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
      company: "Meta",
      datePosted: "10 days ago",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$60/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBOxFuTWkNpYq17xxlRrnqqjdZ_b3B6NX-iQ&s",
      company: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Cupertino, USA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYOYFH1uXNMd6-Czcz0ZrnBdrYdiUC6gRNQ&s",
      company: "Netflix",
      datePosted: "1 week ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Los Gatos, USA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
      company: "Microsoft",
      datePosted: "4 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$50/hr",
      location: "Noida, India"
    },
    {
      brandLogo: "https://m.media-amazon.com/images/I/51USKDYqHZL._AC_UF894,1000_QL80_.jpg",
      company: "Tesla",
      datePosted: "8 days ago",
      post: "Embedded Systems Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Austin, USA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnKG9q1CSlce9wrSB-I1sd9Q66pJsaNlbJRg&s",
      company: "Adobe",
      datePosted: "6 days ago",
      post: "UI/UX Designer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$48/hr",
      location: "Delhi, India"
    },
    {
      brandLogo: "https://www.vhv.rs/dpng/d/453-4533338_oracle-logo-for-website-new-oracle-logo-png.png",
      company: "Oracle",
      datePosted: "9 days ago",
      post: "Database Administrator",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$58/hr",
      location: "Pune, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVEu8tfOJpA-vMjPqyI2gEyaDjTaI7tSJFzQ&s",
      company: "NVIDIA",
      datePosted: "12 days ago",
      post: "AI/ML Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$80/hr",
      location: "Santa Clara, USA"
    }
  ];

  return (
    <div className='parent'>

      {jobOpenings.map(function (elem, idx) {
        return <div key={idx}>
          <Card brandLogo={elem.brandLogo} company={elem.company} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
        </div>
      })}
    </div>
  )
}

export default App