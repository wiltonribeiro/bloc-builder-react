import React from 'react';

class BlocBuilder extends React.Component {

    //-1 waiting
    //0 active
    //1 done

    constructor(props){
        super(props);
        this.state = {
            snapshot : {
                data: null,
                connectionState: -1,
                error : null,
            }
        };

        this.subscription = null;
    }

    componentWillMount() {
        if(this.props.initialValue != null  && this.state.snapshot.connectionState === -1){
            this.setState({
                snapshot : {
                    data: this.props.initialValue,
                    connectionState: -1,
                    error : null,
                }
            })
        }
    }

    componentDidMount() {
        this.subscription = this.props.subject.subscribe(
            (data) => {
                this.setState({
                    snapshot:{
                        data: data,
                        connectionState : 0,
                        error : null
                    }
                })
            },
            (error) => {
                this.setState({
                    snapshot:{
                        data: null,
                        connectionState : 1,
                        error : error
                    }
                })
            },
            () => {
                this.setState({
                    snapshot:{
                        data: null,
                        connectionState : 1,
                        error : null
                    }
                })
            }
        );
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    render() {
        return(
            this.props.builder(this.state.snapshot)
        );
    }

}

export default BlocBuilder;
