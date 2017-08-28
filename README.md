# React cookbook generator

Project that aim to create a documentation generator for your react projects almost efforless and always up to date with your code through an interactive webpage where you can test the visual appearance and behavior of each of your components

## Objective

Allow the documentation of a React component using the three following options:

- ES6 class definitions (Doing)
- stateless components (TODO)

Documenting your first React Component

    /**
    * Some component description
    * 
    * @tracker
    */
    class SomeComponent extends Component {
        static propTypes = {
            /**
                If you want you can also document properties
                and if you don't provide an example [string|boolean|array|object]
                it will be calculate the minimal possible variations of this component
                
                @seed ['Miguel', 'Pepe']
            */
            name: PropTypes.string.isRequired,
        }
    
        render(){
            return <h1>Hello</h1>
        }
    }


Should generate a normal html page where you can see the component **SomeComponent** alongside with your normal documentation (Like the one JSDoc or JavaDoc generate) and a graphic representation of your component with all of its variations (Calculated from your seed property or the combination of primitive values of your propTypes definition) 

---
**Project under construction...** 
---