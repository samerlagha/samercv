import MainContainer from '../components/MainContainer';
import Link from 'next/link'
const Portfolio =()=>{
    return(
        <MainContainer>
            <section className="section">
                <div className="skills">
                    <p>
               <h2>PORTFOLIO</h2> <br/><br/>

               <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <h4 class="card-title">Project List</h4> <br/><br/>
         
        </div>
        <div class="card-action">
            <div className="div"><br/><br/>
            <Link href="https://samerlagha.github.io/react-shop/">
            <a style={{textDecoration:'none'}}  target='_blank' >React Shop Simple</a>
            </Link>
        <Link  href="https://samerlagha.github.io/cookies-recipes/">
        <a style={{textDecoration:'none'}} target='_blank'>Cookies Recipes</a>
        </Link>
        </div>
        <div className="div"><br/><br/>
        <Link href="https://samerlagha.github.io/react-movies/">
        <a style={{textDecoration:'none'}} target='_blank'>Simple React Movies</a>
        </Link>
         <Link href="https://blog-nba-m4z2cszzi.vercel.app/">
         <a style={{textDecoration:'none'}}target='_blank'>Simple Blog NBA command with Next.js</a>
         </Link>
         </div>
         <div className="div"><br/><br/>
          <Link href="https://github.com/samerlagha/calendar-week">
          <a style={{textDecoration:'none'}}target='_blank' >Calendar App</a>
          </Link>
         
          
         <Link href="https://github.com/samerlagha/todolist-react">
         <a style={{textDecoration:'none'}}target='_blank'>Todo List</a>
         </Link>
         </div><br/><br/>
         <div>
         <Link href=":https://github.com/samerlagha/weaterCard-React">
         <a style={{textDecoration:'none'}}target='_blank'>Weather Card</a>
         </Link>
         <Link href="https://github.com/samerlagha/airport-tabel">
         <a style={{textDecoration:'none'}}target='_blank'>Airport tabel</a>
         </Link>
         </div>
        
       
        </div>
      </div>
    </div>
  </div>

</p>

                </div>
            </section>
        </MainContainer>
    )
}

export default Portfolio