import React, { useContext} from 'react'
import "./Card.scss"
import Card from './Card';
import MyContext from '../../Common/Context/MyContext';


const CardsContainer = () => {

    const{ currentPosts,totalPosts,postsPerPage,currentPage,setCurrentPage} =useContext(MyContext)

   const handlestep =(page)=>{
    localStorage.setItem('step',page)
    }
   const inc= currentPage+1
   const dec= currentPage-1
 
    let pages = [];

    for(let i = 1;i<= Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i)
    }
    return (
             
        
        <>
        
        <div className="cards-container anim-card">
            {currentPosts.map((obj, index) => {
                return <Card obj={obj} key={index} />;
            })}
        </div>

        <div className='pagination'>
  
          <button 
          disabled={currentPage === 1}
          onClick={()=>setCurrentPage(currentPage-1) || handlestep(dec) }> &lt;
          </button>

    {
        pages.map((page,index)=>{
            return <button
             key={index} 
            onClick={()=>setCurrentPage(page) || handlestep(page)}
            className={currentPage === page ? 'active'  : ''}>
                    {page}
            </button>
        })
    }

    <button 
      disabled={currentPage ===  pages.length}
    onClick={()=>setCurrentPage(currentPage+1) || handlestep(inc)}> &gt;
    </button>

        </div>     
        </>
    )
}

export default CardsContainer