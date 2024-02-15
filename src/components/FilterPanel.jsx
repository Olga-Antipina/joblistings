import './FilterPanel.css'
import { ReactComponent as CloseFilter } from '../assets/images/icon-remove.svg';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectFilters } from '../store/filters/filters-selectors';
import { closeFilter, clearFilters } from '../store/filters/filters-actions';
import { Component } from 'react';
import { connect } from 'react-redux';

// export const FilterPanel = () => {
//     const filters = useSelector(selectFilters);
//     const dispatch = useDispatch();

//     if (filters.length === 0) {
//         return null;
//     }
//     return (
//         <div className="filter_panel">
//             <div className='select_filters'>
//                 {filters.map((item) => {
//                     return <div key={item} className='current_filter'>
//                         <div className='current_filter__name'>
//                             {item}
//                         </div>
//                         <CloseFilter className='current_filter__close' onClick={() => dispatch(closeFilter(item))} />
//                     </div>
//                 })}
//             </div>
//             <div className='clear' onClick={() => dispatch(clearFilters)}>Clear</div>
//         </div>
//     )
// }


class _FilterPanel extends Component {
    render() {
        if (this.props.filters.length === 0) {
            return null;
        }
        return (
            <div className="filter_panel">
                <div className='select_filters'>
                    {this.props.filters.map((item) => {
                        return <div key={item} className='current_filter'>
                            <div className='current_filter__name'>
                                {item}
                            </div>
                            <CloseFilter className='current_filter__close' onClick={() => this.props.close(item)} />
                        </div>
                    })}
                </div>
                <div className='clear' onClick={this.props.clear}>Clear</div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    filters: state.filters,
})

const mapDispatchToProps = {
    close: closeFilter,
    clear: clearFilters,
}

export const FilterPanel = connect(
    mapStateToProps,
    mapDispatchToProps,
)(_FilterPanel);