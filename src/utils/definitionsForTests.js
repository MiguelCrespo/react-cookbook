export const REACT_CLASS_DEFINITION_WITH_SEEDS = `
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
`;

export const REACT_CLASS_DEFINITION_WITHOUT_SEEDS = `
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
    */
        name: PropTypes.string.isRequired,
    }

    render(){
        return <h1>Hello</h1>
    }
    }
`;

export const REACT_CLASS_DEFINITION_NO_PROCCESSED = `
    /**
    * Some component description
    * 
    */
    class SomeComponent extends Component {
    static propTypes = {
    /**
        If you want you can also document properties
        and if you don't provide an example [string|boolean|array|object]
        it will be calculate the minimal possible variations of this component
    */
        name: PropTypes.string.isRequired,
    }

    render(){
        return <h1>Hello</h1>
    }
    }
`;