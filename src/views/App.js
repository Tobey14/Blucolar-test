import React, {useState, useEffect} from 'react';
import Home from './Home';
import Header from './Header';
import ReactPaginate from "react-paginate";


function App() {

  const [gits, GitApi] = useState([])

  useEffect(()=> {
    
    fetch("https://api.github.com/search/repositories?q=created:%3E2021-08-13&sort=stars&order=desc")
    .then(response => response.json())
    .then(data => 

            GitApi(data.items)

    )
  }, []);

  

      const Today=new Date();
      const time=Today.getTime();

      
      const [pageNumber, setPageNumber] = useState(0);
      const itemsPerPage = 10
      const pagesVisited = pageNumber * itemsPerPage

      const Data = gits.slice(pagesVisited, pagesVisited + itemsPerPage).map(git =><Home  key={git.id} repoName={git.name} repoDesc={git.description} 
       noOfStars={git.stargazers_count} noOfIssues={git.open_issues_count} time={time} created_at={git.created_at} avatar={git.owner.avatar_url}/>)

      const pageCount = Math.ceil(gits.length / itemsPerPage)

      const changePage = ({selected}) => {
          setPageNumber(selected);
 
      }
    return(

        <div> 
         
          <Header />
          {Data}

          <ReactPaginate 
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        
        
        </div>

    )
}

export default App;