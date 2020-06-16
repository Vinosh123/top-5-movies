import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { getMoviesData } from '../Actions/MoviesAction';
class DisplayMovies extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedValue: 'releaseDate',
            clicked: false,
            title: ''
        }
    }
    componentDidMount() {
        this.props.moviesInfo();
    }

    handleSelectChange = async (e) => {
        e.preventDefault();
        await this.setState({
            selectedValue: e.target.value
        });
    }
    handleClick = async (e, title) => {
        await this.setState({
            clicked: true,
            title: title
        });
    }
    render() {

        let data = this.props.moviesData;
        let list = data && data.components;
        const selectedList = list && list[0];
        const DisplayMovies = list && list[1]
        let selectValues = [];
        selectedList && selectedList.items.map((item) => selectValues.push(item.valueToOrderBy));
        let sortedData = DisplayMovies && DisplayMovies.items.sort((a, b) => (a[this.state.selectedValue] >= b[this.state.selectedValue]) ? 1 : -1);
        return (
            <Fragment>
                <div className="login">
                    <label> Choose option to sort:</label>
                    <select onChange={(e) => this.handleSelectChange(e)}>
                        {selectValues.map((item) => <option value={item}>{item}</option>)}
                    </select>
                </div>
                {sortedData && sortedData.map((item) => {
                    return (
                        <div style={{ float: 'left' }}>
                            <img src={item.imageUrl} className={`${this.state.clicked && item.title === this.state.title ? "imageStyleOnClick" : "imageStyle"}`}
                                onClick={(e) => this.handleClick(e, item.title)} />
                            {this.state.clicked && item.title === this.state.title &&
                                <div style={{ margin: 'auto', width: '200px' }}>
                                    <label>title:</label><p>{item.title}</p>
                                    <label>releaseDate:</label><p>{item.releaseDate}</p>
                                    <label>synopsis:</label><p>{item.synopsis}</p>
                                </div>
                            }
                        </div>
                    );
                })}
            </Fragment>
        );
    }
}


function mapStateToProps(state, props) {
    return {
        moviesData: state.moviesReducer.moviesData,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        moviesInfo: () => dispatch(getMoviesData()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DisplayMovies);