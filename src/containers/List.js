import React, { Component } from 'react';
import Card from '../components/Card';

class List extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            loading: true,
        };
    }

    async componentDidMount() {

        try {

            const movies = await fetch('../../src/assets/data.json');
            const moviesJSON = await movies.json();

            if (moviesJSON) {
                this.setState({ data: moviesJSON, loading: false, });
            }

        } catch (error) {
            this.setState({ data: [], loading: false });
        }

    }


    render() {
        const { data, loading } = this.state;
        if (loading) {
            return <div>Loading...</div>;
        }


        return data.map((movie) => <Card key={movie.id} movie={movie} />);
    }
};

export default List;