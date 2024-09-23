import Porto from "./pagecomponents/Porto"
import port from './pageassets/My-Portfolio.png'
import carrental from './pageassets/Car-Rental.png'
import htmlport from './pageassets/htmlportfolio.png'
import recipe from './pageassets/recipe-book.png'
import alpha from './pageassets/alpha.png'
import atm from './pageassets/ATM-App.png'
import blog from './pageassets/blog.png'
import converter from './pageassets/curr-conv.png'
import snap from './pageassets/snap-pagw.jpg'

const Portfolio = () => {
  return (
    <div className="relative bg-white mb-4 mt-12 ml-8">
      <h1 className="text-[2rem] font-bold">Portfolio</h1>
      <hr className="border-2 border-blue-500 w-[3.2rem] mt-4 ml-8" />
      <p className="my-3 leading-7">
        These are some of my completed projects and the ones I am currently working on
      </p>


      <div className="projects flex justify-between items-center gap-4 flex-wrap mr-4">
        <Porto 
        pic = {carrental}
        site = "/car-rental"
        />
        <Porto 
        pic = {alpha}
        site = "/alphanews"
        />
        <Porto 
        pic = {blog}
        site = "/blog"
        />
        <Porto 
        pic = {atm}
        site = "/atm-app"
        />
        <Porto 
        pic = {snap}
        site = "#"
        />
        <Porto 
        pic = {recipe}
        site = "#"
        />
        <Porto 
        pic = {converter}
        site = "/currency-converter"
        />
        <Porto 
        pic = {port}
        site = "#"
        />
        <Porto 
        pic = {htmlport}
        site = "/htmlportfolio"
        />
        </div>

    </div>
  )
}

export default Portfolio