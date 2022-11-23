import CrossIcon from '../../assets/icons/CrossIcon.svg';

function SearchInputExitBtn({ clickHandler }) {
    return (
        <div
            className="home-search-input-group-cross"
            role="button"
            tabIndex="-1"
            onClick={clickHandler}
        >
            <img src={CrossIcon} alt="Search" />
        </div>
    );
}

export default SearchInputExitBtn;
