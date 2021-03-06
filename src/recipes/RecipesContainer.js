
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import RecipeItem, { recipeShape } from './RecipeItem'
import RecipeEditor from './RecipeEditor'
import { fetchRecipes } from '../actions/recipes'
import './RecipesContainer.css'

export class RecipesContainer extends PureComponent {
  static propTypes = {
    recipes: PropTypes.arrayOf(recipeShape).isRequired,
  }

  componentWillMount() {
    // this.props.dispatch(fetchRecipes())
    this.props.fetchRecipes() //see mapDispatchToProps at bottom
  }

  renderRecipe = (recipe, index) => {
    return <RecipeItem key={index} { ...recipe } />
  }

  render() {
    return (
      <div className="recipes-wrapper">
        <header>
          <Title content="Recipes" />
          <RecipeEditor />
        </header>

        <main>
          {this.props.recipes.map(this.renderRecipe)}
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ recipes }) => ({ recipes })

// Same as:
// const mapStoreToProps = (store) => {
//   return { recipes: store.recipes }
// }

const mapDispatchToProps = { fetchRecipes }

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)
