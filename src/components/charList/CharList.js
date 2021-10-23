import './charList.scss';
import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { Component } from 'react';
import Spinner from '../spinner/Spinner';
import PropTypes from 'prop-types';


class CharList extends Component {

    state = {
        charList: [],
        loading: true,
        error: false,
        newItemLoading: false,
        offset: 1540,
        charEnded: false
    }

    marvelService = new MarvelService();

    onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) { ended = true }
        this.setState(({ offset, charList }) => ({
            charList: [...charList, ...newCharList],
            loading: false,
            newItemLoading: false,
            offset: offset + 9,
            charEnded: ended
        }))
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    updateCharList = (offset) => {
        this.marvelService
            .getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }

    componentDidMount() {
        this.updateCharList();
    }

    onRequest = (offset) => {
        this.onCharListLoading();
        this.updateCharList(offset);
    }

    onCharListLoading = () => {
        this.setState({
            newItemLoading: true
        })
    }

    itemsRefs = [];

    setRef = (ref) => {
        this.itemsRefs.push(ref)
    }

    focusOnItem = (id) => {
        this.itemsRefs.forEach(item => item.classList.remove('char__item_selected'));
        this.itemsRefs[id].classList.add('char__item_selected');
        this.itemsRefs[id].focus();
    }

    renderItems(arr) {
        const items = arr.map((item, i) => {
            let imgStyle = { 'objectFit': 'cover' };
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = { 'objectFit': 'unset' };
            }
            return (
                <li
                    className="char__item"
                    tabIndex={0}
                    ref={this.setRef}
                    key={item.id}
                    onClick={() => {
                        this.props.onCharSelected(item.id);
                        this.focusOnItem(i);
                    }}
                    onKeyPress={(e) => {
                        if (e.key === '' || e.key === 'Enter' || e.key === 'Space') {
                            this.props.onCharSelected(item.id);
                            this.focusOnItem(i);
                        }
                    }}>
                    <img src={item.thumbnail} alt={item.name} style={imgStyle} />
                    <div className="char__name">{item.name}</div>
                </li >
            )
        })

        return (
            <ul className="char__grid" >
                {items}
            </ul>
        )
    }

    render() {
        const { charList, loading, error, newItemLoading, offset, charEnded } = this.state;
        const items = this.renderItems(charList);
        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? items : null;
        console.log(offset)
        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                {content}
                <button
                    className="button button__main button__long"
                    style={{ 'display': charEnded ? 'none' : 'block' }}
                    disabled={newItemLoading}
                    onClick={() => this.onRequest(offset)}>
                    <div className="inner">load more</div>
                </button>
            </div >
        )
    }
};

CharList.propTypes = {
    onCharSelected: PropTypes.func
};

export default CharList;