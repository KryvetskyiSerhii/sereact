import classes from './../Blog.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { searchBarIsVisible } from '../../../redux/menu'
import { scrollToTheElement } from '../../../redux/articles'
import { useFormik } from 'formik'
import maginfier from './../../../img/maginfier.svg'




const LocalSearch = (props) => {
  const state = useSelector(state => state.articles.articleItems) 
  const isVisible = useSelector(state => state.modal.isSearchBarVisible)
  const dispatch = useDispatch()
 
  const searchVisible = () => {
    dispatch(searchBarIsVisible())
  }

  const initialValues = {
    text: ''
  }
  console.log(state);
  
   const  findTheElement = async (values) => {
    await dispatch(scrollToTheElement(values.text))
    setTimeout(()=> {
      const findId = state.filter(e => e.isFound === true)[0].id
      const element = document.getElementById(findId)
     element.scrollIntoView()
      formik.values.text=''
    }, 1000)
     
     
      }
      
  
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      await findTheElement(values);
    }
  });
  
   
      
    return (
        <div className={classes.navLocalSearch}>
           <div><button className={classes.navBtn} onClick={searchVisible}>Search</button></div>
           {isVisible && <form onSubmit={formik.handleSubmit} className={classes.navSearchForm}>
      
      <input
          className={classes.navSearchInput}
          id="searchInput"
          name="text"
          type="text"
          onChange={formik.handleChange}
          placeholder="Start your search"
          value={formik.values.text}
      />
      <button type="submit" className={classes.navGoButton}> <img src={maginfier}  /> </button>
  </form>} 
        </div>
    )
}

export default LocalSearch